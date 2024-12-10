import React, { useState, useRef } from 'react';
import { handlePurchase } from '../services/vendingService';

const DrinksMenu = ({ data, onUpdate }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cash, setCash] = useState(0);
  const [coins, setCoins] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('cash'); // Default to 'cash'
  
  // Error states
  const [productError, setProductError] = useState('');
  const [cashError, setCashError] = useState('');
  const [coinsError, setCoinsError] = useState('');
  
  // Refs for focus management
  const cashInputRef = useRef(null);
  const coinsInputRef = useRef(null);

  // Utility function to set and clear errors
  const setErrorWithTimeout = (setError, message) => {
    setError(message);
    setTimeout(() => setError(''), 3000); // Clear error after 3 seconds
  };

  const validateAndPurchase = async () => {
    const product = data.products[selectedProduct];

    // Reset all errors
    setProductError('');
    setCashError('');
    setCoinsError('');

    // Validate product selection
    if (!selectedProduct) {
      setErrorWithTimeout(setProductError, 'Please select a Drink.');
      return;
    }

    if (!product || product.stock <= 0) {
      setErrorWithTimeout(setProductError, 'The selected Drink is out of stock.');
      return;
    }

    // Validate payment amount
    // const paymentAmount = paymentMethod === 'cash' ? cash : coins;
    if (paymentMethod === 'cash' && cash < product.price) {
      setErrorWithTimeout(setCashError, 'Insufficient cash. Please enter a valid amount.');
      cashInputRef.current?.focus();
      return;
    }

    if (paymentMethod === 'coins' && coins < product.price) {
      setErrorWithTimeout(setCoinsError, 'Insufficient coins. Please enter a valid amount.');
      coinsInputRef.current?.focus();
      return;
    }

    // Confirm purchase
    const confirm = window.confirm(
      `You are about to buy ${selectedProduct} for Rs.${product.price}. Proceed?`
    );
    if (!confirm) return;

    // Process purchase
    await handlePurchase(
      data,
      selectedProduct,
      paymentMethod === 'cash' ? cash : 0,
      paymentMethod === 'coins' ? coins : 0,
      onUpdate
    );

    // Reset state after purchase
    setCash(0);
    setCoins(0);
    setSelectedProduct(null);
  };

  return (
    <div className="payment">
      <div className="mb-4">
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h4 className="text-xl font-semibold">Vending Machine Balances</h4>
          <p className="text-lg">Cash: Rs.{data.cash}</p>
          <p className="text-lg">Coins: Rs.{data.coins}</p>
        </div>
      </div>

      {/* Payment Method Selection */}
      <div className="mb-4">
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h4 className="text-xl font-semibold">Payment Method</h4>
          <label className="mr-4">
            <input
              type="radio"
              name="paymentMethod"
              value="cash"
              checked={paymentMethod === 'cash'}
              onChange={() => setPaymentMethod('cash')}
              className="mr-2"
            />
            Cash
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="coins"
              checked={paymentMethod === 'coins'}
              onChange={() => setPaymentMethod('coins')}
              className="mr-2"
            />
            Coins
          </label>
        </div>
      </div>

      {/* Product Selection Grid */}
      <div className="mb-4">
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h4 className="text-xl font-semibold">Available Drinks</h4>
          <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {Object.keys(data.products).map((product) => {
              const { price, stock, image } = data.products[product];
              return (
                <div
                  key={product}
                  className={`p-4 rounded-lg text-center cursor-pointer border-2 ${
                    selectedProduct === product ? 'border-blue-500' : 'border-gray-300'
                  } hover:border-blue-400 transition`}
                  onClick={() => setSelectedProduct(product)}
                >
                  <img
                    src={image}
                    alt={product}
                    className="w-16 h-16 mx-auto mb-2 rounded-lg"
                  />
                  <h4 className="text-xl font-semibold">{product}</h4>
                  <p>Price: Rs.{price}</p>
                  <p>Stock: {stock}</p>
                </div>
              );
            })}
          </div>
          {productError && <p className="text-red-500">{productError}</p>}
        </div>
      </div>

      {/* Show input field based on payment method */}
      <label for="amount" className="text-xl font-semibold">Amount</label>
      {paymentMethod === 'cash' ? (
        <div>
            
          <input
            ref={cashInputRef}
            type="number"
            value={cash}
            onChange={(e) => setCash(Number(e.target.value))}
            placeholder="Enter cash amount"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          {cashError && <p className="text-red-500">{cashError}</p>}
        </div>
      ) : (
        <div>
          <input
            ref={coinsInputRef}
            type="number"
            value={coins}
            onChange={(e) => setCoins(Number(e.target.value))}
            placeholder="Enter coins amount"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          {coinsError && <p className="text-red-500">{coinsError}</p>}
        </div>
      )}

      <button
        onClick={validateAndPurchase}
        className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition"
      >
        Buy
      </button>
    </div>
  );
};

export default DrinksMenu;

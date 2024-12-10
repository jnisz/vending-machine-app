import React from 'react';

const DrinksMenu = () => {
  return (
    <div className="payment">
      <div className="mb-4">
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h4 className="text-xl font-semibold">Vending Machine Balances</h4>
          <p className="text-lg">Cash: Rs.200</p>
          <p className="text-lg">Coins: Rs.100</p>
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
              className="mr-2"
            />
            Cash
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="coins"
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
            <div className="p-4 rounded-lg text-center border-2 border-gray-300">
              <img
                src="https://via.placeholder.com/64"
                alt="Product 1"
                className="w-16 h-16 mx-auto mb-2 rounded-lg"
              />
              <h4 className="text-xl font-semibold">Coke</h4>
              <p>Price: Rs.20</p>
              <p>Stock: 10</p>
            </div>
            <div className="p-4 rounded-lg text-center border-2 border-gray-300">
              <img
                src="https://via.placeholder.com/64"
                alt="Product 2"
                className="w-16 h-16 mx-auto mb-2 rounded-lg"
              />
              <h4 className="text-xl font-semibold">Pepsi</h4>
              <p>Price: Rs.25</p>
              <p>Stock: 10</p>
            </div>
            <div className="p-4 rounded-lg text-center border-2 border-gray-300">
              <img
                src="https://via.placeholder.com/64"
                alt="Product 3"
                className="w-16 h-16 mx-auto mb-2 rounded-lg"
              />
              <h4 className="text-xl font-semibold">Dew</h4>
              <p>Price: Rs.30</p>
              <p>Stock: 10</p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Amount Input */}
      <label htmlFor="amount" className="text-xl font-semibold">Amount</label>
      <div>
        <input
          type="number"
          placeholder="Enter amount"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
      </div>

      <button className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition">
        Buy
      </button>
    </div>
  );
};

export default DrinksMenu;

import React, { useState } from 'react';
import { handleRefund } from '../services/vendingService';

const RefundDrink = ({ data, onUpdate, onError }) => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [error, setError] = useState('');

  const onRefund = async () => {
    if (!selectedProduct) {
      const errorMessage = 'Please select a product to refund.';
      setError(errorMessage);
      onError && onError(errorMessage);

      // Set a timer to clear the error message after 5 seconds
      setTimeout(() => {
        setError('');
      }, 5000); // 5000ms = 5 seconds

      return;
    }

    // Confirmation dialog
    const confirmation = window.confirm(
      `Are you sure you want to refund "${selectedProduct}"?`
    );
    if (!confirmation) return;

    try {
      setError(''); // Clear any previous errors.
      await handleRefund(data, selectedProduct, onUpdate);
      setSelectedProduct('');
    } catch (error) {
      const errorMessage = 'Refund failed. Please try again.';
      setError(errorMessage);
      onError && onError(errorMessage);

      // Set a timer to clear the error message after 5 seconds
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  return (
    <div className="refund mt-6">
   
      <div className="mb-4">
        <select
          className="w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => setSelectedProduct(e.target.value)}
          value={selectedProduct}
        >
          <option value="">Select a product</option>
          {Object.keys(data.products).map((product) => (
            <option key={product} value={product}>
              {product} - Rs.{data.products[product].price} (Stock: {data.products[product].stock})
            </option>
          ))}
        </select>
      </div>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <button
        onClick={onRefund}
        className="w-full bg-red-600 text-white p-3 rounded-md hover:bg-red-700"
      >
        Refund
      </button>
    </div>
  );
};

export default RefundDrink;

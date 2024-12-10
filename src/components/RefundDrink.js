import React from 'react';

const RefundDrink = () => {
  return (
    <div className="refund mt-6">
      <div className="mb-4">
        <select className="w-full p-2 border border-gray-300 rounded-md">
          <option value="">Select a product</option>
          <option value="Product1">coke - Rs.20 (Stock: 10)</option>
          <option value="Product2">pepsi - Rs.25 (Stock: 10)</option>
          <option value="Product3">dew - Rs.30 (Stock: 10)</option>
        </select>
      </div>
      
      <button className="w-full bg-red-600 text-white p-3 rounded-md hover:bg-red-700">
        Refund
      </button>
    </div>
  );
};

export default RefundDrink;

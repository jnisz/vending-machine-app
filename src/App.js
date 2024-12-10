import React, { useEffect, useState } from 'react';

import DrinksMenu from './components/DrinksMenu';
import RefundDrink from './components/RefundDrink';

import { getVendingData, updateVendingData } from './utils/api';
import './App.css';

const App = () => {
  const [vendingData, setVendingData] = useState(null);
  

  useEffect(() => {
    (async () => {
      const data = await getVendingData();
      setVendingData(data);
    })();
  }, []);

  const handleUpdate = async (updatedData) => {
    await updateVendingData(updatedData);
    setVendingData(updatedData);
  };

 

  if (!vendingData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Vending Machine</h1>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Purchase</h2>
          <DrinksMenu data={vendingData} onUpdate={handleUpdate} />
        </div>
  
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Refund Drink</h2>
          <RefundDrink data={vendingData} onUpdate={handleUpdate} />
        </div>
      </div>
    </div>
  );
}  

export default App;

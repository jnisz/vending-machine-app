import React from 'react';
import DrinksMenu from './components/DrinksMenu';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Vending Machine</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Purchase</h2>
          <DrinksMenu />
        </div>
        
      </div>
    </div>
  );
};

export default App;

import vendingData from '../data/vendingData.json';

export const getVendingData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(vendingData), 500); // Simulate API delay
  });
};

export const updateVendingData = async (data) => {
  return new Promise((resolve) => {
    // Here, in a real application, you'd update a backend
    Object.assign(vendingData, data);
    setTimeout(() => resolve(true), 500); // Simulate API delay
  });
};



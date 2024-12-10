import { updateVendingData } from "../utils/api";

export const handlePurchase = async (data, selectedProduct, cash, coins, onUpdate) => {
  const product = data.products[selectedProduct];
  const totalPayment = cash + coins;

  if (totalPayment < product.price) {
    alert('Insufficient payment.');
    return;
  }

  if (product.stock <= 0) {
    alert('Product out of stock.');
    return;
  }

  const change = totalPayment - product.price;

  if (change > data.coins) {
    alert('Not enough coins for change.');
    return;
  }

  const updatedData = {
    ...data,
    products: {
      ...data.products,
      [selectedProduct]: {
        ...product,
        stock: product.stock - 1,
      },
    },
    cash: data.cash + cash,
    coins: data.coins + coins - change,
  };

  await updateVendingData(updatedData);
  onUpdate(updatedData);

  alert(`Purchase successful! Change returned: Rs.${change}`);
};

/**
 * Handles the refund of a product.
 * @param {Object} data - The current state of the vending machine data.
 * @param {string} selectedProduct - The product the user wants to refund.
 * @param {Function} onUpdate - A callback to update the state of the vending machine data.
 */
export const handleRefund = async (data, selectedProduct, onUpdate) => {
  const product = data.products[selectedProduct];

  const updatedData = {
    ...data,
    products: {
      ...data.products,
      [selectedProduct]: {
        ...product,
        stock: product.stock + 1,
      },
    },
    cash: data.cash - product.price,
  };

  await updateVendingData(updatedData);
  onUpdate(updatedData);

  alert(`Refund successful for ${selectedProduct}`);
};

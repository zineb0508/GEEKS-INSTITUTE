import { createSelector } from '@reduxjs/toolkit';

export const selectProducts = state => state.cart.products;
export const selectCartIds = state => state.cart.cart;

export const selectCartItems = createSelector(
  [selectProducts, selectCartIds],
  (products, cart) => cart.map(id => products.find(p => p.id === id))
);

export const calculateTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total, item) => total + item.price, 0)
);

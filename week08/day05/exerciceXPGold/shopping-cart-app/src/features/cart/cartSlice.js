import { createSlice } from '@reduxjs/toolkit';

// Initial state with products and an empty cart
const initialState = {
  products: [
    { id: 1, name: 'Laptop', price: 800 },
    { id: 2, name: 'Headphones', price: 79},
    { id: 3, name: 'Mouse', price: 50 },
  ],
  cart: [] // Array of product IDs
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add a product to the cart
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },

    // Remove the first occurrence of a product from the cart
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const index = state.cart.indexOf(productId);
      if (index !== -1) {
        state.cart.splice(index, 1); // Remove one item at that index
      }
    }
  }
});

// Export actions
export const { addToCart, removeFromCart } = cartSlice.actions;

// Export reducer to be added to the store
export default cartSlice.reducer;




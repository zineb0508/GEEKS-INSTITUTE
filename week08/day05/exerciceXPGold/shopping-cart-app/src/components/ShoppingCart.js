import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectProducts,
  selectCartItems,
  calculateTotalPrice
} from '../features/cart/cartSelectors';
import {
  addToCart,
  removeFromCart
} from '../features/cart/cartSlice';

const ShoppingCart = () => {
  const dispatch = useDispatch();

  // Select data from Redux store
  const products = useSelector(selectProducts);
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(calculateTotalPrice);

  // Handler to add item to cart
  const handleAddToCart = useCallback(
    (id) => {
      dispatch(addToCart(id));
    },
    [dispatch]
  );

  // Handler to remove item from cart
  const handleRemoveFromCart = useCallback(
    (id) => {
      dispatch(removeFromCart(id));
    },
    [dispatch]
  );

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🛍️ Redux Shopping Cart</h1>

      {/* Product List */}
      <h2>🛒 Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ${product.price}{' '}
            <button onClick={() => handleAddToCart(product.id)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      {/* Cart List */}
      <h2>🧺 Cart</h2>
      <ul>
        {cartItems.map((item, i) => (
          <li key={i}>
            {item.name} - ${item.price}{' '}
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
};

export default ShoppingCart;

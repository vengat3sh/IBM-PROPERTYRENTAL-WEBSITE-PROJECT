import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Get cart items from localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCartItems(storedCart);
    }
  }, []);

  const handleRemoveFromCart = (id) => {
    // Remove item from cart
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update cart in localStorage
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.images[0].src} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p className="cart-item-price">Price: ${item.price.toLocaleString()}</p>
                <button className="remove-btn" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <Link to="/properties" className="back-link">Back to Properties</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;

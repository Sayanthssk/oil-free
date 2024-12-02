import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importing Bootstrap CSS

const Cart = ({ cartItems, setCartItems, handleAddToCart }) => {
  const [notification, setNotification] = useState('');

  // Remove item from cart
  const handleRemoveFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart); // Update cart items state
  };

  return (
    <div className="container-fluid  bg-primary-subtle">
      {/* Notification for adding an item to the cart */}
      {notification && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          {notification}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )}

      <h2 className="text-center mb-4">Your Cart</h2>

      {/* Display cart items */}
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="row">
          {cartItems.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <img src={item.img} className="card-img-top" alt={item.name} height={'150px'} width={'100px'}/>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h5">${item.price}</span>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => handleRemoveFromCart(index)} // Remove item from cart
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;

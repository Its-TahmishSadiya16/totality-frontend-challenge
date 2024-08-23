import React, { useState } from 'react';
import './Cart.css'; // Ensure this CSS file is linked

const Cart = ({ cartItems, removeFromCart }) => {
    const [checkoutMessage, setCheckoutMessage] = useState('');

    const handleCheckout = () => {
        setCheckoutMessage('Congrats! This listing is yours now.');
        // You can add more logic here for actual checkout processing if needed
    };

    return (
        <div className="cart-container">
            <h2 className="cart-title">Cart</h2>
            {cartItems.length > 0 ? (
                <>
                    <ul className="cart-items">
                        {cartItems.map((item, index) => (
                            <li key={index} className="cart-item">
                                <span className="cart-item-title">{item.title} - ${item.price}</span>
                                <button 
                                    className="cart-remove-button" 
                                    onClick={() => removeFromCart(index)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button className="cart-checkout-button" onClick={handleCheckout}>
                        Checkout
                    </button>
                    {checkoutMessage && <p>{checkoutMessage}</p>}
                </>
            ) : (
                <p className="cart-empty-message">No items in the cart.</p>
            )}
        </div>
    );
};

export default Cart;







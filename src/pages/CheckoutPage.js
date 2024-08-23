import React, { useState } from 'react';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state

const CheckoutPage = () => {
    // Access cart items from the Redux store
    const cartItems = useSelector(state => state.cart.items) || []; // Default to an empty array if undefined
    
    // State to manage confirmation message
    const [message, setMessage] = useState('');

    // Handler for checkout button click
    const handleCheckout = () => {
        // Set confirmation message
        setMessage('Thank you for your purchase! You have successfully booked these properties.');
    };

    return (
        <div>
            <h2>Checkout</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <h3>Your Cart Items</h3>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                {item.title} - ${item.price}/month
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleCheckout}>Confirm Purchase</button>
                    {message && <p>{message}</p>} {/* Display the confirmation message */}
                </div>
            )}
        </div>
    );
};

export default CheckoutPage;

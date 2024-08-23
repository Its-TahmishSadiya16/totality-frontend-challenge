import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import FilterComponent from '../components/FilterComponent';
import Cart from '../components/Cart';

const Home = () => {
    const [properties, setProperties] = useState([
        // ...properties data...
        {
            id: 1,
            title: 'Luxury Apartment',
            description: 'A beautiful luxury apartment in the city center.',
            price: 1500,
            location: 'India',
            image: 'image/download (2).jpeg'
        },
        {
            id: 2,
            title: 'Cozy Cottage',
            description: 'A cozy cottage in the countryside.',
            price: 800,
            location: 'American',
            image: '/image/download (1).jpeg'
        },
        {
            id: 3,
            title: 'Modern Villa',
            description: 'A modern villa with a private pool.',
            price: 2000,
            location: "New York",
            image: '/image/download.jpeg'
        },
    ]);

    const [cartItems, setCartItems] = useState([]);
    const [addToCartMessage, setAddToCartMessage] = useState('');

    const handleFilter = (filterCriteria) => {
        const filteredProperties = properties.filter(property => {
            return (
                (!filterCriteria.location || property.location.toLowerCase().includes(filterCriteria.location.toLowerCase())) &&
                (!filterCriteria.price || property.price <= filterCriteria.price)
            );
        });
        setProperties(filteredProperties);
    };

    const addToCart = (property) => {
        setCartItems([...cartItems, property]);
        setAddToCartMessage(`${property.title} has been added to your cart.`);
        setTimeout(() => setAddToCartMessage(''), 3000);  // Clear the message after 3 seconds
    };

    const removeFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);  // Remove the item at the given index
        setCartItems(updatedCart);
    };

    return (
        <div>
            <FilterComponent onFilter={handleFilter} />
            {addToCartMessage && <p>{addToCartMessage}</p>}  {/* Show the add-to-cart message */}
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            <div className="property-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {properties.map(property => (
                    <PropertyCard 
                        key={property.id} 
                        property={property} 
                        onBookNow={() => addToCart(property)} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;







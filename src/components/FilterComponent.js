import React, { useState } from 'react';
import './FilterComponent.css';  // Make sure to import the CSS file

const FilterComponent = ({ onFilter }) => {
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');

    const handleFilter = () => {
        onFilter({ location, price });
    };

    return (
        <div className="filter-container">
            <input 
                type="text" 
                className="filter-input"
                placeholder="Location" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)} 
            />
            <input 
                type="number" 
                className="filter-input"
                placeholder="Max Price" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
            />
            <button className="filter-button" onClick={handleFilter}>Filter</button>
        </div>
    );
};

export default FilterComponent;



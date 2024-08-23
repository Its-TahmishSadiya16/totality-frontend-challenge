import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './PropertyCard.css'; // Import the CSS file for custom styling

const PropertyCard = ({ property, onBookNow }) => {
    return (
        <Card className="property-card">
            <Card.Img variant="top" src={property.image} alt={property.title} className="property-image" />
            <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>{property.description}</Card.Text>
                <Card.Text>{property.location}</Card.Text>
                <Card.Text className="property-price">${property.price}/month</Card.Text>
                <Button variant="primary" onClick={onBookNow}>Book Now</Button>
            </Card.Body>
        </Card>
    );
};

export default PropertyCard;










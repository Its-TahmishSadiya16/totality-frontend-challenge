// src/components/Checkout.js
import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

const Checkout = ({ cartItems, totalCost }) => {
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    paymentInfo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handleCheckout = () => {
    // Add your checkout logic here
    alert("Checkout complete!");
  };

  return (
    <div>
      <Typography variant="h4">Checkout</Typography>
      <TextField
        label="Name"
        name="name"
        value={bookingDetails.name}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        label="Email"
        name="email"
        value={bookingDetails.email}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        label="Payment Info"
        name="paymentInfo"
        value={bookingDetails.paymentInfo}
        onChange={handleInputChange}
        fullWidth
      />
      <Typography variant="h6">Total: ${totalCost}</Typography>
      <Button variant="contained" color="primary" onClick={handleCheckout}>
        Complete Checkout
      </Button>
    </div>
  );
};

export default Checkout;

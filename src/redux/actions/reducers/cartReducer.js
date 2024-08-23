// src/redux/cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [] // Ensure items is initialized as an empty array
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        // Add other actions as needed
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

  
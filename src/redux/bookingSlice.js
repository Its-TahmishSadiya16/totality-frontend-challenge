import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookedProperties: [],
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state.bookedProperties.push(action.payload);
    },
    removeBooking: (state, action) => {
      state.bookedProperties = state.bookedProperties.filter(
        property => property.id !== action.payload
      );
    },
    clearBookings: state => {
      state.bookedProperties = [];
    },
  },
});

export const { addBooking, removeBooking, clearBookings } = bookingSlice.actions;
export default bookingSlice.reducer;

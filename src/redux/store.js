import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './bookingSlice'; // Ensure you have this slice created

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
});

export default store;

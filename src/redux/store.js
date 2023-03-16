import { configureStore } from '@reduxjs/toolkit';
import detailsSlice from './details/detailsSlice';

const store = configureStore({
  reducer: {
    details: detailsSlice,
  },
});

export default store;

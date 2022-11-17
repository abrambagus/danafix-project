import { configureStore } from '@reduxjs/toolkit'
import phoneReducer from '../slices/phoneSlices';

const store = configureStore({
  reducer: {
    phoneNumber: phoneReducer
  },
})

export default store;

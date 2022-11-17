import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  phoneNumber: null,
};

export const phoneSlice = createSlice({
  name: 'phoneNumber',
  initialState,
  reducers: {
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    }
  },
});

export const { setPhoneNumber } = phoneSlice.actions;

export const phoneSelector = (state) => state.phoneNumber;

export default phoneSlice.reducer;
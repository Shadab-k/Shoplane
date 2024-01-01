import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  token:""
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    cart: (state, action) => {
      const {payload} = action;
      state.cart = payload;
    },
    token: (state, action) => {
      const {payload} = action;
      state.token = payload;
    },
  },
});
export default AuthSlice.reducer;

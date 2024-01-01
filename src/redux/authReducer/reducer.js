import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  token:""
};

const HomeSlice = createSlice({
  name: 'Home',
  initialState,
  reducers: {
    cart: (state, action) => {
      console.log('inreducer');
      const {payload} = action;
      state.language = payload;
    },
  },
});
export default HomeSlice.reducer;

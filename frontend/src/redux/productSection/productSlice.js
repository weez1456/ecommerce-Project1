import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: { cartItems: [] },
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItems: (state, action) => {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
    },
    removeProduct: (state, action) => {
     state.cart.cartItems = state.cart.cartItems.filter((item) => item._id !== action.payload._id);
    },
    cartReset: () => initialState
    
  },
});

export const {cartReset, addCartItems, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;

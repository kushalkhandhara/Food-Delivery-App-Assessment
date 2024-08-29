import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);
      
      if (!existingItem) {
        state.cartItems.push({
          ...newItem,
          quantity: 1,
        });
        state.totalQuantity++;
      } else {
        existingItem.quantity++;
      }
    },
    
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);
      
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.cartItems = state.cartItems.filter(item => item.id !== id);
          state.totalQuantity--;
        } else {
          existingItem.quantity--;
        }
      }
    },

    clearCart(state) {
      state.cartItems = [];
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

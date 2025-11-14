import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      // allow payload to include a `quantity` for bulk add
      const qtyToAdd = product.quantity && Number(product.quantity) > 0 ? Number(product.quantity) : 1;
      const existing = state.items.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += qtyToAdd;
      } else {
        // ensure stored item uses property name `quantity`
        const { quantity: _quantity, ...rest } = product;
        state.items.push({ ...rest, quantity: qtyToAdd });
      }

      state.totalQuantity += qtyToAdd;
      state.totalPrice += (product.price || 0) * qtyToAdd;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items = state.items.filter((i) => i.id !== id);
      }
    },

    increaseQty: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity++;
        state.totalQuantity++;
        state.totalPrice += item.price;
      }
    },

    decreaseQty: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item && item.quantity > 1) {
        item.quantity--;
        state.totalQuantity--;
        state.totalPrice -= item.price;
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

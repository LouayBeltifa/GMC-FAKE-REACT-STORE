import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  userInfo: {
    name: "",
    email: "",
    phone: "",
    address: "",
  },
  cardInfo: {
    nameOnCard: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  },
  status: "idle",
  orderId: null,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    updateUserField: (state, action) => {
      const { field, value } = action.payload;
      state.userInfo[field] = value;
    },
    updateCardField: (state, action) => {
      const { field, value } = action.payload;
      state.cardInfo[field] = value;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setOrderId: (state, action) => {
      state.orderId = action.payload;
    },
    clearCheckout: (state) => {
      state.step = 1;
      state.userInfo = { name: "", email: "", phone: "", address: "" };
      state.cardInfo = { nameOnCard: "", cardNumber: "", expiry: "", cvv: "" };
      state.status = "idle";
      state.orderId = null;
    },
  },
});

export const {
  setStep,
  updateUserField,
  updateCardField,
  setStatus,
  setOrderId,
  clearCheckout,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;

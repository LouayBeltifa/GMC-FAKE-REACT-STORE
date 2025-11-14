import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const favouriteSlice = createSlice({
    name: "favourite",
    initialState,
    reducers: {
        addToFavourites: (state, action) => {
            const product = action.payload;
            const existing = state.items.find((item) => item.id === product.id);
            if (!existing) {
                state.items.push(product);
            }
        },

        removeFromFavourites: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter((item) => item.id !== id);
        },
    },
});

export const { addToFavourites, removeFromFavourites } = favouriteSlice.actions;

export default favouriteSlice.reducer;
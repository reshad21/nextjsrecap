"use client"
const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    value: 0,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, payload) => {
            state.value = state.value + 1;
        }
    }
})


export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
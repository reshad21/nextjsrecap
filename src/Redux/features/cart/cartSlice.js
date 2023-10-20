"use client"
const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    value: 0,
    cart:[]
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.value = state.value + 1;
            state.cart.push(action.payload);
        }
    }
})


export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
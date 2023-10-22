"use client"
const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    cart: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productToAdd = action.payload;
            const existingProduct = state.cart.find((product) => product.id === productToAdd.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.cart.push({ ...productToAdd, quantity: 1 });
            }
        },
        increase: (state, action) => {
            const productToIncrease = action.payload;
            const existingProduct = state.cart.find((product) => product.id === productToIncrease.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            }
        },
        decrease: (state, action) => {
            state.cart = state.cart.filter((product) => {
                if (product.id === action.payload.id) {
                    if (product.quantity > 1) {
                        product.quantity -= 1;
                        return true; // Keep the product in the cart
                    }
                    return false; // Remove the product from the cart
                }
                return true; // Keep other products in the cart
            });
        },
    }
})


export const { addToCart, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
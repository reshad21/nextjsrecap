"use client"
const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    cart: [],
    // price: null,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.cart.find((product) => product.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },

        increase: (state, action) => {
            const existingProduct = state.cart.find((product) => product.id === action.payload.id);
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
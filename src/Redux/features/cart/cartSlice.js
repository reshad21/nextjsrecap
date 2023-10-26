"use client"
const { createSlice } = require("@reduxjs/toolkit")
const initialState = {
    cart: [],
    totalPrice: 0,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.cart.find((product) => product.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
                existingProduct.price += action.payload.price;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
                state.totalPrice += action.payload.price;
            }
        },

        increase: (state, action) => {
            const existingProduct = state.cart.find((product) => product.id === action.payload.id);
            if (existingProduct) {
                const pricePerUnit = existingProduct.price / existingProduct.quantity;
                existingProduct.quantity += 1;
                existingProduct.price += pricePerUnit;
                state.totalPrice += pricePerUnit;
            }
            
        },

        decrease: (state, action) => {
            const existingProduct = state.cart.find((product) => product.id === action.payload.id);

            if (existingProduct) {
                if (existingProduct.quantity > 1) {
                    const pricePerUnit = existingProduct.price / existingProduct.quantity;
                    existingProduct.quantity -= 1;
                    existingProduct.price -= pricePerUnit;
                    state.totalPrice = state.cart.reduce((total, product) => total + product.price, 0);
                } else {
                    state.cart = state.cart.filter((product) => product.id !== action.payload.id);
                    state.totalPrice -= existingProduct.price;
                }
            }
        },
    }
})


export const { addToCart, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
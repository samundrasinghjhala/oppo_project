import { createSlice } from "@reduxjs/toolkit";
import * as ProductData from './ProductData'


const initialState = {
    cart: [],
    items: ProductData, //items me sara data aayega
    totalQuantity: 0,
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            if (find >= 0) {
                state.cart[find].quantity += 1;
                state.cart = [...state.cart]; // Create a new array to trigger a state update
            } else {
                state.cart = [...state.cart, action.payload];
            }
        },
        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },

        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },

        increaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                } else {
                    return item;
                }
            });
        },
        decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    const updatedQuantity = item.quantity - 1;
                    if (updatedQuantity <= 0) {
                        return null; // Return null to remove the item from the cart
                    } else {
                        return { ...item, quantity: updatedQuantity };
                    }
                }
                return item; // Return the item as is
            }).filter(Boolean); // Filter out null values (removed items)
        },
        clearCart: (state) => {
            state.cart = [];
            state.totalPrice = 0;
        }
    },
});

export const { addToCart, getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
import { ADD_TO_CART, REMOVE_TO_CART } from "../constants"


export const addToCart = (data) => {
    // console.warn("action", data)
    return {
        type: ADD_TO_CART,
        data: data   //is data me cart ki details aayega fir reducer me jayega
    }
}

export const removeToCart = () => {
    return {
        type: REMOVE_TO_CART,

    }
}
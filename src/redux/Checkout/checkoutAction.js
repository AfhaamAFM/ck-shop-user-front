import { PAYMENT_METHOD, STORE_ADDRESS, STORE_AMOUNT, STORE_CART_ITEMS } from './CheckoutType'
import {  GET_ADDRESS, GET_AMOUNT, GET_CART_ITEMS } from './CheckoutType'



// STORE PAYMENMT METHOD
export const storePaymentMethod = (pay) => {
    return {

        type: PAYMENT_METHOD,
        payload: pay
    }
}

export const storeAmount = (amount) => {
    localStorage.setItem("amount", amount)

    return {

        type: STORE_AMOUNT,
        payload: amount
    }
}
export const storeAddress = (address) => {
    localStorage.setItem("address", JSON.stringify(address))
    return {

        type: STORE_ADDRESS,
        payload: address
    }
}
export const storecartItems = (cart) => {
    localStorage.setItem("cartItems", JSON.stringify(cart))

    return {

        type: STORE_CART_ITEMS,
        payload: cart
    }
}



export const getAmount = (amount) => {
    

    return {

        type: GET_AMOUNT,
        payload: amount
    }
}

export const getAddress = (address) => {
    return {

        type: GET_ADDRESS,
        payload: address
    }
}
export const getcartItems = (cart) => {
    return {

        type: GET_CART_ITEMS,
        payload: cart
    }
}




// combined actin
export const fetchCheckout = () => {
    return (dispatch) => {


        const retrivedAmount=localStorage.getItem("amount")
        const retrivedAddress=localStorage.getItem("address")
        const retrievedCartItems=localStorage.getItem("cartItems")

    
        const address= JSON.parse(retrivedAddress)
        const cartItems= JSON.parse(retrievedCartItems)
        // dispatch
        dispatch(getAmount(retrivedAmount))
        dispatch(getAddress(address))
        dispatch(getcartItems(cartItems))




    }

}
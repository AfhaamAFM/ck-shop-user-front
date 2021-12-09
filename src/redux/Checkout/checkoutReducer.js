import { PAYMENT_METHOD, STORE_ADDRESS, STORE_AMOUNT, STORE_CART_ITEMS,GET_ADDRESS, GET_AMOUNT, GET_CART_ITEMS } from './CheckoutType'

const initial = {

        amount: 0,
        address: {},
        cartItems: [],
        paymentMethod: ''
}

const checkoutReducer = (state = initial, action) => {

        // localStorage.setItem("amount", totalAmount)
        // localStorage.setItem("address",JSON.stringify(showAddress))
        // localStorage.setItem("cartItems", JSON.stringify(cartItems))
        switch (action.type) {
                case STORE_AMOUNT:

                        return {
                                ...state,
                                amount: action.payload


                        }


                case STORE_ADDRESS:

                        return {
                                ...state,
                                address: action.payload

                        }

                case STORE_CART_ITEMS:

                        return {
                                ...state,
                                cartItems: action.payload

                        }


                case GET_AMOUNT:

                        return {
                                ...state,
                                amount: action.payload


                        }


                case GET_ADDRESS:

                        return {
                                ...state,
                                address: action.payload

                        }

                case GET_CART_ITEMS:

                        return {
                                ...state,
                                cartItems: action.payload

                        }
                case PAYMENT_METHOD:

                        return {
                                ...state,
                                paymentMethod: action.payload

                        }



                default:
                        return state
        }



}

export default checkoutReducer
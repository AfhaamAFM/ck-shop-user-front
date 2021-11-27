import { CART_ADD_SUCCESS, CART_FETCH_SUCCESS, CART_FETCH_ERROR, CART_FETCH_REQUEST } from './cartType'



const initial = {

    loading: false,
    cartItems: [],
    error: '',
    addResponse: null

}

const cartReducer = (state = initial, action) => {


    switch (action.type) {
        case CART_FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CART_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: action.payload,
                error: ''
            }
        case CART_ADD_SUCCESS:
            return {
                ...state,
                addResponse: action.payload,
                loading: false,
                error: ''
            }
            case CART_FETCH_ERROR:
                return {
                    ...state,
                loading: false,
                error:action.payload
            }

        default:
            return state









    }

}
    export default cartReducer
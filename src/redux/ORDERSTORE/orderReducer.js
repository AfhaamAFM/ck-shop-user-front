import { ORDER_ADD_SUCCESS, ORDER_FETCH_SUCCESS, ORDER_FETCH_ERROR, ORDER_FETCH_REQUEST } from './orderType'
import { ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS, ORDER_PAY_FAIL, ORDER_PAY_RESET,ORDER_PAY_RESET_ALL,ORDER_COD_SUCCESS } from './orderType'


const initial = {

    loading: false,
    orders: '',
    error: '',
    orderId: ''

}

export const orderReducer = (state = initial, action) => {


    switch (action.type) {
        case ORDER_FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ORDER_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload,
                error: ''
            }
        case ORDER_ADD_SUCCESS:
            return {
                ...state,
                orderId: action.payload,
                loading: false,
                error: ''
            }
        case ORDER_FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state


    }

}


export const orderPayReducer = (state = { success: false, loading: false, error: '', orderPlaced: false,paid:false }, action) => {


    switch (action.type) {
        case ORDER_PAY_REQUEST:
            return {
                loading: true
            }
        case ORDER_PAY_SUCCESS:
            return {
                orderPlaced: true,
                loading: false,
                success: true,
                paid:true
            }


            case ORDER_COD_SUCCESS:
            return {
                orderPlaced: true,
                loading: false,
                success: true,
                paid:false
            }
        case ORDER_PAY_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case ORDER_PAY_RESET:
            return {
                ...state,
                loading: false,
                success: false,
                error:''
            }

            case ORDER_PAY_RESET_ALL:
                return {}    

        default:
            return state


    }



}
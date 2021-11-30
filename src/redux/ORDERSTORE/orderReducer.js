import {ORDER_ADD_SUCCESS,ORDER_FETCH_SUCCESS,ORDER_FETCH_ERROR,ORDER_FETCH_REQUEST} from './orderType'



const initial = {

    loading: false,
    orders: '',
    error: '',
    addResponse:''
 
}

const orderReducer = (state = initial, action) => {


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
                addResponse: action.payload,
                loading: false,
                error: ''
            }
            case ORDER_FETCH_ERROR:
                return {
                    ...state,
                loading: false,
                error:action.payload
            }

        default:
            return state


    }

}
    export default orderReducer
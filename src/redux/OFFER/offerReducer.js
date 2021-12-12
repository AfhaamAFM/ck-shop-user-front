import { OFFER_ADD_SUCCESS, OFFER_FETCH_SUCCESS, OFFER_FETCH_ERROR, OFFER_FETCH_REQUEST } from './offerType'
import { COUPEN_ADD_SUCCESS, COUPEN_FETCH_SUCCESS, COUPEN_FETCH_ERROR, COUPEN_FETCH_REQUEST } from './offerType'



const initial = {

    loading: false,
    offers: [],
    error: '',
    addResponse:''
 
}

export const offerReducer = (state = initial, action) => {


    switch (action.type) {
        case OFFER_FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case OFFER_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                offers: action.payload,
                error: ''
            }
        case OFFER_ADD_SUCCESS:
            return {
                ...state,
                addResponse: action.payload,
                loading: false,
                error: ''
            }
            case OFFER_FETCH_ERROR:
                return {
                    ...state,
                loading: false,
                error:action.payload
            }

        default:
            return state


    }

}
 
// fetch coupen

const initialCoupen = {

    loading: false,
    coupen: [],
    error: '',
    addResponse:''
 
}
export const coupenReducer = (state = initialCoupen, action) => {


    switch (action.type) {
        case COUPEN_FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case COUPEN_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                coupen: action.payload,
                error: ''
            }
        case COUPEN_ADD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: ''
            }
            case COUPEN_FETCH_ERROR:
                return {
                    ...state,
                loading: false,
                error:action.payload
            }

        default:
            return state


    }

}
    
import { PRODUCT_FETCH_ERROR, PRODUCT_FETCH_REQUEST, PRODUCT_FETCH_SUCCESS} from './productType'


const productInitialState = {
    loading: true,
    product: [],
    error: ''
}
const productReducer = (state = productInitialState, action) => {

    switch (action.type) {

        case PRODUCT_FETCH_REQUEST:
            return {

                ...state,
                loading: true

            }
        case PRODUCT_FETCH_SUCCESS:
            return {

                ...state,
                loading: false,
                product: action.payload,
                error: ''

            }
        case PRODUCT_FETCH_ERROR:
            return {
            ...state,
                loading: false,
                product: [],
                error: action.payload,


            }
     
        default:
            return state

    }

}
export default productReducer
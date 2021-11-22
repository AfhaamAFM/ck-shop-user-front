import { FILTER_PRODUCT_FETCH_ERROR, FILTER_PRODUCT_FETCH_REQUEST, FILTER_PRODUCT_FETCH_SUCCESS} from './filterProductType'


const productInitialState = {
    loading: true,
    products: [],
    error: ''
}
const filterProductReducer = (state = productInitialState, action) => {

    switch (action.type) {

        case FILTER_PRODUCT_FETCH_REQUEST:
            return {

                ...state,
                loading: true

            }
        case FILTER_PRODUCT_FETCH_SUCCESS:
            return {

                ...state,
                loading: false,
                products: action.payload,
                error: ''

            }
        case FILTER_PRODUCT_FETCH_ERROR:
            return {
            ...state,
                loading: false,
                products: [],
                error: action.payload,


            }
     
        default:
            return state

    }

}
export default filterProductReducer
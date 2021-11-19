import { CATEGORY_FETCH_ERROR, CATEGORY_FETCH_REQUEST, CATEGORY_FETCH_SUCCESS} from './categoryType'


const catinitialState = {
    loading: true,
    category: [],
    error: ''
}
const categoryReducer = (state = catinitialState, action) => {

    switch (action.type) {

        case CATEGORY_FETCH_REQUEST:
            return {

                ...state,
                loading: true

            }
        case CATEGORY_FETCH_SUCCESS:
            return {

                ...state,
                loading: false,
                category: action.payload,
                error: ''

            }
        case CATEGORY_FETCH_ERROR:
            return {
            ...state,
                loading: false,
                category: [],
                error: action.payload,


            }
     
        default:
            return state

    }

}
export default categoryReducer
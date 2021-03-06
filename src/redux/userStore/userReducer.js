import { USER_FETCH_ERROR, USER_FETCH_REQUEST, USER_FETCH_SUCCESS, USER_FETCH_VERIFY } from "./userType"


const initialState = {
    loading: true,
    users: '',
    error: '',
    userActive: false
}
const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case USER_FETCH_REQUEST:
            return {

                ...state,
                loading: true

            }
        case USER_FETCH_SUCCESS:
            return {


                loading: false,
                users: action.payload,
                error: ''

            }
        case USER_FETCH_ERROR:
            return {

                loading: false,
                users: [],
                error: action.payload,


            }
        case USER_FETCH_VERIFY:
            return {

                ...state,
                loading: false,
                userActive: action.payload,
                error: ''

            }
        
        default:
            return state

    }

}
export default userReducer
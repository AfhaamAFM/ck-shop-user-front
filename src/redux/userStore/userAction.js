import { USER_FETCH_ERROR, USER_FETCH_REQUEST, USER_FETCH_SUCCESS, USER_FETCH_VERIFY } from "./userType"

const fetchUserRequest = () => {
    return {
        type: USER_FETCH_REQUEST
    }

}

const fetchUserSuccess = (users) => {
    return {
        type: USER_FETCH_SUCCESS,
        payload:users
    }

}

const fetchUserError = (error) => {
    return {
        type: USER_FETCH_ERROR,
        payload:error
    }

}
const userVerify = (response) => {
    return {
        type: USER_FETCH_VERIFY,
        payload:response
    }

}

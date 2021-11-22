import { USER_FETCH_ERROR, USER_FETCH_REQUEST, USER_FETCH_SUCCESS, USER_FETCH_VERIFY } from "./userType"
import axios from 'axios'



export const fetchUserRequest = () => {
    return {
        type: USER_FETCH_REQUEST
    }

}

export const fetchUserSuccess = (users) => {
    return {
        type: USER_FETCH_SUCCESS,
        payload:users
    }

}

export const fetchUserError = (error) => {
    return {
        type: USER_FETCH_ERROR,
        payload:error
    }

}
export const userVerify = (response) => {
    return {
        type: USER_FETCH_VERIFY,
        payload:response
    }

}


export const userlogged=()=>{
return (dispatch)=>{
     dispatch(fetchUserRequest())
    axios.get('/user/loggedIn').then(res=>{


        const {status,userDetails}=res.data
        dispatch(fetchUserSuccess(userDetails))
        dispatch(userVerify(status))


        }).catch(err=>{
        dispatch(fetchUserError)
        
        })
        
}


    
    



}
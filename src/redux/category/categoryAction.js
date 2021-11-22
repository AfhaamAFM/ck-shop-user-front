import { CATEGORY_FETCH_ERROR, CATEGORY_FETCH_REQUEST, CATEGORY_FETCH_SUCCESS } from "./categoryType"
import axios from 'axios'



export const fetchCategoryRequest = () => {
    return {
        type: CATEGORY_FETCH_REQUEST
    }

}

export const fetchCategorySuccess = (category) => {
    return {
        type: CATEGORY_FETCH_SUCCESS,
        payload: category
    }

}

export const fetchCategoryError = (error) => {
    return {
        type: CATEGORY_FETCH_ERROR,
        payload: error
    }

}



export const fetchCategory = () => {
    return (dispatch) => {
        dispatch(fetchCategoryRequest())
        axios.get('/admin/category').then(res => {



            dispatch(fetchCategorySuccess(res.data))

        }).catch(err => {
            dispatch(fetchCategoryError())

        })

    }





}


    
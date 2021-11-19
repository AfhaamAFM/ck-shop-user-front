import { PRODUCT_FETCH_ERROR, PRODUCT_FETCH_REQUEST,PRODUCT_FETCH_SUCCESS } from "./productType"
import axios from 'axios'



export const fetchProductRequest = () => {
    return {
        type: PRODUCT_FETCH_REQUEST
    }

}

export const fetchProductSuccess = (product) => {
    return {
        type: PRODUCT_FETCH_SUCCESS,
        payload: product
    }

}

export const fetchProductError = (error) => {
    return {
        type: PRODUCT_FETCH_ERROR,
        payload: error
    }

}



export const fetchProduct = () => {
    return (dispatch) => {
        dispatch(fetchProductRequest())
        axios.get('http://localhost:5000/admin/product/').then(res => {

            dispatch(fetchProductSuccess(res.data))

        }).catch(err => {
            dispatch(fetchProductError(err))

        })

    }





}


    
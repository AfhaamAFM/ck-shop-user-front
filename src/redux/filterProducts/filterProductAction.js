import { FILTER_PRODUCT_FETCH_ERROR, FILTER_PRODUCT_FETCH_REQUEST,FILTER_PRODUCT_FETCH_SUCCESS } from "./filterProductType"
import axios from 'axios'



export const fetchFilterProductRequest = () => {
    return {
        type: FILTER_PRODUCT_FETCH_REQUEST
    }

}

export const fetchFilterProductSuccess = (product) => {
    return {
        type: FILTER_PRODUCT_FETCH_SUCCESS,
        payload: product
    }

}

export const fetchFilterProductError = (error) => {
    return {
        type: FILTER_PRODUCT_FETCH_ERROR,
        payload: error
    }

}



export const filterProductBycategory = (category) => {
    return (dispatch) => {
        dispatch(fetchFilterProductRequest())
        axios.get(`/admin/product/filter/${category}`).then(res => {


            if(res.data.response){
                dispatch(fetchFilterProductError(res.data.response))


            }else {
            dispatch(fetchFilterProductSuccess(res.data))

            }
        }).catch(err => {
            dispatch(fetchFilterProductError(err))

        })

    }}


    export const filterProductBySubCategory = (category,subCat) => {
        return (dispatch) => {
            dispatch(fetchFilterProductRequest())
            axios.get(`/admin/product/subfilter/${category}/${subCat}`).then(res => {
    
    
                if(res.data.response){
                    dispatch(fetchFilterProductError(res.data.response))
    
    
                }else {
                dispatch(fetchFilterProductSuccess(res.data))
    
                }
            }).catch(err => {
                dispatch(fetchFilterProductError(err))
    
            })
    
        }


    }


    
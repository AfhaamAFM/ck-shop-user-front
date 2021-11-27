import {CART_ADD_SUCCESS,CART_FETCH_SUCCESS,CART_FETCH_ERROR,CART_FETCH_REQUEST} from './cartType'
import axios from 'axios'


export const fetchCartError=()=>{

return {

    type:CART_FETCH_REQUEST
}

}


export const addToCartSuccess=(response)=>{

return {


    type:CART_ADD_SUCCESS,
    playload:response
}
}


export const fetchCartSuccess=(cartItems)=>{

return {

    type:CART_FETCH_SUCCESS,
    playload:cartItems
}
}

export const fetchCartError=(err)=>{

return {
type:CART_FETCH_ERROR,
playload:err


}

}
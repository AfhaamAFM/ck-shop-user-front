import {CART_ADD_SUCCESS,CART_FETCH_SUCCESS,CART_FETCH_ERROR,CART_FETCH_REQUEST} from './cartType'
import axios from 'axios'
import Swal from 'sweetalert2'

export const fetchCartRequest=()=>{

return {

    type:CART_FETCH_REQUEST
}

}


export const addToCartSuccess=(response)=>{

    console.log(response)
return {

    type:CART_ADD_SUCCESS,
    payload:response
}
}


export const fetchCartSuccess=(cartItems)=>{

return {

    type:CART_FETCH_SUCCESS,
    payload:cartItems
}
}

export const fetchCartError=(err)=>{

return {
type:CART_FETCH_ERROR,
payload:err


}

}



export const addToCart= (cartItem)=>{

return(dispatch)=>{
dispatch(fetchCartRequest())

 axios.post('/user/cart/add',cartItem).then(res=>{
console.log(res.data);
Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: `${res.data.response}`,
    showConfirmButton: false,
    timer: 1500
  })

dispatch(addToCartSuccess(res.data.response))


}).catch(err=>{


    dispatch(fetchCartError(err))
})





}
}

export const fetchCart=()=>{

return (dispatch)=>{

    dispatch(fetchCartRequest())

    axios.get('/user/cart/').then(res=>{
    dispatch(fetchCartSuccess(res.data))
    
    
    }).catch(err=>{
    
    
        dispatch(fetchCartError(err))
    })
    
    

}


}
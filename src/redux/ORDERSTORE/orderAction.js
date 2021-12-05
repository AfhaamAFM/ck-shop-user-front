import { ORDER_ADD_SUCCESS, ORDER_FETCH_SUCCESS, ORDER_FETCH_ERROR, ORDER_FETCH_REQUEST, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS, ORDER_PAY_FAIL } from './orderType'
import axios from 'axios'
import Swal from 'sweetalert2'


export const fetchOrderRequest = () => {

    return {

        type: ORDER_FETCH_REQUEST
    }

}


export const addOrderSuccess = (response) => {

    console.log(response)
    return {

        type: ORDER_ADD_SUCCESS,
        payload: response
    }
}


export const fetchOrderSuccess = (orders) => {

    return {

        type: ORDER_FETCH_SUCCESS,
        payload: orders
    }
}

export const fetchOrderError = (err) => {

    return {
        type: ORDER_FETCH_ERROR,
        payload: err


    }

}



export const addOrder = (order) => {

    return (dispatch) => {
        dispatch(fetchOrderRequest())

        axios.post('/order/user/placeOrder',order).then(res => {
            console.log(res.data);
            dispatch(addOrderSuccess(res.data))


        }).catch(err => {


            dispatch(fetchOrderError(err))
        })
    }
}



export const fetchOrders=()=>{

return (dispatch)=>{

    dispatch(fetchOrderRequest())

    axios.get('/order').then(res=>{
    dispatch(fetchOrderSuccess(res.data))


    }).catch(err=>{


        dispatch(fetchOrderError(err))
    })



}}

export const payOrder=(paymentId,paymentMethod,orderId)=>{
return (dispatch)=>{

dispatch({type:ORDER_PAY_REQUEST})
axios.post(`order/${orderId}/pay-amount/`,{paymentId,paymentMethod}).then(res=>{

if(res.data){

    dispatch({type:ORDER_PAY_SUCCESS})
    dispatch(fetchOrders())
 return   Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Payment success',
        showConfirmButton: false,
        timer: 1500
      })
}


}).catch(err=>{

    dispatch({type:ORDER_PAY_FAIL})
})

}


}


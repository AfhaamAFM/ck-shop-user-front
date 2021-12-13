import { ORDER_ADD_SUCCESS,ORDER_FETCH_ALL_SUCCESS, ORDER_FETCH_SUCCESS, ORDER_FETCH_ERROR, ORDER_FETCH_REQUEST, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS, ORDER_PAY_FAIL,ORDER_COD_SUCCESS } from './orderType'
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

export const fetchOrderAllSuccess = (orders) => {

    return {

        type: ORDER_FETCH_ALL_SUCCESS,
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




// fetch all orders

// fetch actions
export const fetchOrdersAll=()=>{

    
    return (dispatch)=>{
        dispatch(fetchOrderRequest())
    
        axios.get('/order/all').then(res=>{
        dispatch(fetchOrderAllSuccess(res.data))
    
    
        }).catch(err=>{
    
    
            dispatch(fetchOrderError(err))
        })
    }

}

export const payOrder=async (paymentId,paymentMethod,orderId,orderStatus)=>{
return (dispatch)=>{

dispatch({type:ORDER_PAY_REQUEST})
axios.post(`order/${orderId}/pay-amount/`,{paymentId,paymentMethod,orderStatus}).then(res=>{

if(res.data){
    dispatch({type:ORDER_PAY_SUCCESS})
 dispatch(fetchOrders())
 Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Payment success',
        showConfirmButton: false,
        timer: 1500
      })
}


})

}


}
// place order wih cod

export const placeCOD=(paymentMethod,orderStatus,amount,address,cartItems)=>{
    return async (dispatch)=>{
    
    dispatch({type:ORDER_PAY_REQUEST})
  await axios.post('/order/placeOrder/cod',{paymentMethod,orderStatus,amount,address,cartItems}).then(res=>{
    console.log("ibdde tethinnn");
    if(res.data){
    
        dispatch({type:ORDER_COD_SUCCESS})
        dispatch(fetchOrders())
     return   Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Place Order Success',
            showConfirmButton: false,
            timer: 1500
          })
    }
    
    
    }).catch(err=>{
    
        dispatch({type:ORDER_PAY_FAIL})
    })
    
    }
    
    
    }


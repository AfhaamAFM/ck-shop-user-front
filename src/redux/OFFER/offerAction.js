import { OFFER_ADD_SUCCESS, OFFER_FETCH_SUCCESS, OFFER_FETCH_ERROR, OFFER_FETCH_REQUEST } from './offerType'
import { COUPEN_ADD_SUCCESS, COUPEN_FETCH_SUCCESS, COUPEN_FETCH_ERROR, COUPEN_FETCH_REQUEST } from './offerType'



import axios from 'axios'
import Swal from 'sweetalert2'


export const fetchOfferRequest = () => {

    return {

        type: OFFER_FETCH_REQUEST
    }

}


export const addOfferSuccess = (response) => {

    console.log(response)
    return {

        type: OFFER_ADD_SUCCESS,
        payload: response
    }
}


export const fetchOfferSuccess = (orders) => {

    return {

        type: OFFER_FETCH_SUCCESS,
        payload: orders
    }
}

export const fetchOfferError = (err) => {

    return {
        type: OFFER_FETCH_ERROR,
        payload: err


    }

}

export const addOffer=(offerName,expiryDate,percentage)=>{
return (dispatch)=>{

dispatch(fetchOfferRequest())

axios.post('/offer/addOffer',{offerName,expiryDate,percentage}).then((res)=>{



if(res.data.warning){
    dispatch(addOfferSuccess(res.data))
    return Swal.fire(res.data.warning)
}
if(res.data){
    dispatch(addOfferSuccess(res.data))
    dispatch(fetchOffers())
   return  Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Offer Added',
        showConfirmButton: false,
        timer: 1500
      })


     
}

}).catch(err=>{
dispatch(fetchOfferError(err))


})


}}






export const fetchOffers=()=>{

    
return (dispatch)=>{
    dispatch(fetchOfferRequest())

    axios.get('/offer').then(res=>{
    dispatch(fetchOfferSuccess(res.data))


    }).catch(err=>{


        dispatch(fetchOfferError(err))
    })



}}


// FETCH COUPEN


// type action


export const fetchCoupenSuccess = (coupen) => {

    return {

        type: COUPEN_FETCH_SUCCESS,
        payload: coupen
    }
}

export const fetchCoupenError = (err) => {

    return {
        type: COUPEN_FETCH_ERROR,
        payload: err


    }

}




export const fetchCoupen=()=>{

    
    return (dispatch)=>{
        dispatch({type:COUPEN_FETCH_REQUEST})
    
        axios.get('/offer/coupen/').then(res=>{
        dispatch(fetchCoupenSuccess(res.data))
    
    
        }).catch(err=>{
    
    
            dispatch(fetchCoupenError(err))
        })
    
    
    
    }}



export const addCoupen=(name,expiryDate,percentage,minAmount)=>{
    return (dispatch)=>{
    
        dispatch({type:COUPEN_FETCH_REQUEST})
    
    axios.post('/offer/addCoupen',{name,expiryDate,percentage,minAmount}).then((res)=>{
    
    
    
    if(res.data.warning){
        fetchCoupenError(res.data.warning)
        return Swal.fire(res.data.warning)
    }
    if(res.data){
        dispatch({type:COUPEN_ADD_SUCCESS})
        dispatch(fetchCoupen())
       return  Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Offer Added',
            showConfirmButton: false,
            timer: 1500
          })
    
    
         
    }
    
    }).catch(err=>{
    dispatch(fetchOfferError(err))
    
    
    })
    
    
    }}
    
    
    
import { PAYMENT_METHOD, STORE_ADDRESS, STORE_AMOUNT, STORE_CART_ITEMS } from './CheckoutType'



export const storeAmount =(amount)=>{

return {

    type:STORE_AMOUNT,
    payload:amount
}
}
export const storeAddress =(address)=>{

    return {
    
        type:STORE_ADDRESS,
        payload:address
    }
    }
export const storecartItems =(cart)=>{
        return {
        
            type:STORE_CART_ITEMS,
            payload:cart
        }
        }   


        export const storePaymentMethod =(pay)=>{
            return {
            
                type:PAYMENT_METHOD,
                payload:pay
            }
            } 
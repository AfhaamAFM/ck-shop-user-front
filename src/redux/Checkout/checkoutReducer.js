import { PAYMENT_METHOD, STORE_ADDRESS, STORE_AMOUNT, STORE_CART_ITEMS } from './CheckoutType'

const initial ={

    amount:0,
    address:{},
    cartItems:[],
    paymentMethod:''
}

const checkoutReducer=(state=initial,action)=>{


switch (action.type) {
    case STORE_AMOUNT:
        
        return {
...state,
amount:action.payload

        }


        case STORE_ADDRESS:
        
            return {
    ...state,
    address:action.payload
    
            }

            case STORE_CART_ITEMS:
        
                return {
        ...state,
        cartItems:action.payload
        
                }
                case PAYMENT_METHOD:
        
                return {
        ...state,
        paymentMethod:action.payload
        
                }
        
        

    default:
       return state
}



}

export default checkoutReducer
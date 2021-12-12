import { combineReducers } from "redux";
import userReducer from './userStore/userReducer'
import categoryReducer from "./category/categoryReducer";
import productReducer from "./PRODUCTS/productReducer";
import filterProductReducer from "./filterProducts/filterProductReducer";
import cartReducer from "./CARTSTORE/cartReducer";
import checkoutReducer from "./Checkout/checkoutReducer";
import {orderReducer,orderPayReducer} from "./ORDERSTORE/orderReducer";
import { coupenReducer } from "./OFFER/offerReducer";

const rootReducer = combineReducers({
  
    user: userReducer,
    category: categoryReducer,
    product: productReducer,
    filterProduct:filterProductReducer,
    cart:cartReducer,
    checkout:checkoutReducer,
    order:orderReducer,
    orderPay:orderPayReducer,
    coupen:coupenReducer
    

})
export default rootReducer


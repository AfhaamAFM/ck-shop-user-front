import { combineReducers } from "redux";
import userReducer from './userStore/userReducer'
import categoryReducer from "./category/categoryReducer";
import productReducer from "./PRODUCTS/productReducer";
import filterProductReducer from "./filterProducts/filterProductReducer";
import cartReducer from "./CARTSTORE/cartReducer";

const rootReducer = combineReducers({
  
    user: userReducer,
    category: categoryReducer,
    product: productReducer,
    filterProduct:filterProductReducer,
    cart:cartReducer
})
export default rootReducer


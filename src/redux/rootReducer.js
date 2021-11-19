import { combineReducers } from "redux";
import userReducer from './userStore/userReducer'
import categoryReducer from "./category/categoryReducer";
import productReducer from "./PRODUCTS/productReducer";


const rootReducer = combineReducers({
  
    user: userReducer,
    category: categoryReducer,
    product: productReducer
})
export default rootReducer


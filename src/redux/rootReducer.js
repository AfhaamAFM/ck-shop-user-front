import { combineReducers } from "redux";
import userReducer from './userStore/userReducer'
import categoryReducer from "./category/categoryReducer";
import productReducer from "./PRODUCTS/productReducer";
import filterProductReducer from "./filterProducts/filterProductReducer";


const rootReducer = combineReducers({
  
    user: userReducer,
    category: categoryReducer,
    product: productReducer,
    filterProduct:filterProductReducer
})
export default rootReducer


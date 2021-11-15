
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './userStore/userReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(userReducer,composeWithDevTools(applyMiddleware(thunk)) )

export default store
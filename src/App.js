import React from 'react';
import Router from './Router/RoutesHome';
import  store from './redux/store';
import { Provider } from 'react-redux';
import axios from 'axios'

const production=true

let url=production?'/api':'http://localhost:5000'
axios.defaults.baseURL=url
 axios.defaults.withCredentials=true


function App() {
  return (
    <>
    <Provider store={store}>
   <Router/>
      </Provider>
    </>
  );
}

export default App;

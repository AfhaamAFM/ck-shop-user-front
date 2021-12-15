import React from 'react';
import Router from './Router/RoutesHome';
import  store from './redux/store';
import { Provider } from 'react-redux';
import axios from 'axios'

axios.defaults.baseURL='https://server.afhaam.tech'
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

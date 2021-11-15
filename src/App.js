import React from 'react';
import Router from './Router/RoutesHome';
import  store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  console.log(store);
  return (
    <>
    <Provider store={store}>
   <Router/>
      </Provider>
    </>
  );
}

export default App;

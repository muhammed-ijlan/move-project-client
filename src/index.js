import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { store } from './redux/store';
import { persistStore } from "redux-persist"
import axios from 'axios';
import { logOut } from './redux/userSlice';

axios.defaults.withCredentials = true;

const { dispatch } = store;
console.log(dispatch);

axios.interceptors.response.use(res => res, error => {
  if (error.response.status === 401) {
    console.log("logout");
    dispatch(logOut())
  }
  return Promise.reject(error);
})

const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
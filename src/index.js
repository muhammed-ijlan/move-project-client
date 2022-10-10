import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { store } from './redux/store';
import { persistStore } from "redux-persist"
import axios from 'axios';


axios.interceptors.request.use(request => {
  request.headers.token = localStorage.getItem("token")
  return request;
})
axios.interceptors.response.use(response => {
  // console.log(response);
  return response;
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
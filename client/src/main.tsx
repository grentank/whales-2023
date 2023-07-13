import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { Provider } from 'react-redux';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { store } from './features/redux/store';

axios.defaults.baseURL = 'http://localhost:3000/api/v1';
axios.defaults.withCredentials = true;
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContextProvider from './contexts/user/UserContextProvider';
import Loader from './components/HOC/Loader';

axios.defaults.baseURL = 'http://localhost:3000/api/v1';
axios.defaults.withCredentials = true;
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <UserContextProvider>
      <Loader>
        <App />
      </Loader>
    </UserContextProvider>
  </BrowserRouter>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.baseURL = 'http://localhost:3000/api/v1';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);

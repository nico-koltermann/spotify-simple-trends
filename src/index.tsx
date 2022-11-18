import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Modules
import App from './app';
import { FavoritePage } from '../pages/favorite-page';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/spotify-colorcode.css';
import './css/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <FavoritePage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

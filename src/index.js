import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from "react-router-dom";
import store from "./states/store";
import { Provider } from "react-redux";

import "../node_modules/bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);


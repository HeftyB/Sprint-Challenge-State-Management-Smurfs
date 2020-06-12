import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { Provider } from "react-redux";
import thunk from "redux-thunk"
import reducers from "./reducer";
import "./index.css";
import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducers,
    applyMiddleware(thunk, logger))

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </Provider>,
    document.getElementById('root')
  );

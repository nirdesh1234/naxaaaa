import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createstore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import servicesReducer from "./servicesReducer";
import servicesSagas from "./servicesSagas";
import App from "./App";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(servicesReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(servicesSagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

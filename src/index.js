import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import projectReducer from "./store/reducers/project";
import testReducer from "./store/reducers/test";
import registerServiceWorker from "./registerServiceWorker";

const rootReducer = combineReducers({
  project: projectReducer,
  test: testReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();

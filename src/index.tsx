import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "reducers";
import thunk from "redux-thunk";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import 'antd/dist/antd.css';
import 'styles/main.scss';

import * as serviceWorker from './serviceWorker';

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

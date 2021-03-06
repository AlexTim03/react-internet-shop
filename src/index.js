import './main.css'

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'

import {BrowserRouter as Router} from 'react-router-dom'

import createRootReducer from 'reducers'
import routes from 'routes'


const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]
const store = createStore(
  createRootReducer(history),
  applyMiddleware(...middlewares)
)

ReactDOM.render(
  <Provider store={store}>
    {/* <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter> */}
    <Router>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);

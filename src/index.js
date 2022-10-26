import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import store from './redux/store';
import logger from 'redux-logger';
import App from './components/App/App';

// Reducers
const property = (state = '', action) => {
  if (action.type === 'SET_PROPERTY') {
      return action.payload;
  } else if (action.type === 'CLEAR_ALL') {
      return '';
  }
  return state;
}

// Redux store! Keeps track of all reducers
const storeInstance = createStore(
  combineReducers(
      {
          property,
          
      }
  ),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);

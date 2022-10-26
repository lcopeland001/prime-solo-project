import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import store from './redux/store';
import logger from 'redux-logger';
import App from './components/App/App';

// Reducers
const propety = (state = '', action) => {
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
          name,
          
      }
  ),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);

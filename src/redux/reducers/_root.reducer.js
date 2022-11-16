import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

const property = (state = [], action) => {
  switch (action.type) {
      case 'SET_PROPERTY':
          return action.payload;
      default:
          return state;
  }
}


const selectedProperty = (state = {}, action) => {
  switch (action.type) {
      case 'SET_PROPERTY_DETAILS':
          return action.payload;
      default:
          return state;
  }
}

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  property,
  selectedProperty,
});


export default rootReducer;

import { takeLatest } from "redux-saga/effects";
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

//rootSaga generator function

  function* propertySaga() {
    yield takeEvery('EDIT_MOVIE', editProperty);
    yield takeEvery('ADD_MOVIE', addProperty);
    yield takeEvery('FETCH_MOVIES', fetchAllProperty);
    yield takeEvery('FETCH_MOVIE_DETAILS', fetchPropertyDetails);
  }

  // All sagas will go here for this project
  function* editProperty(action) {
    try {
        yield axios.put(`/api/property/${action.payload.id}`, action.payload);
        if (action.history) {
            action.history.goBack();
        }
    } catch (e) {
        console.log(e);
    }
}

function* addProperty(action) {
    try {
        yield axios.post(`/api/property`, action.payload);
        if (action.history) {
            // Redirect back to the property list
            action.history.push('/');
        }
    } catch (e) {
        console.log(e);
    }
}

function* fetchPropertyDetails(action) {
    try {
        const property = yield axios.get(`/api/property/${action.payload}`);
        yield put({ type: 'SET_PROPERTY_DETAILS', payload: property.data });
    } catch (e) {
        console.log(e);
    }
}

function* fetchAllProperty() {
    try {
        const property = yield axios.get('/api/property');
        console.log('get all:', property.data);
        yield put({ type: 'SET_PROPERTY', payload: property.data });

    } catch {
        console.log('get all error');
    }
        
}

  export default propertySaga
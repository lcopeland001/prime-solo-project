import { takeLatest } from "redux-saga/effects";
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

//rootSaga generator function

  function* propertySaga() {
    yield takeEvery('EDIT_PROPERTY', editProperty);
    yield takeEvery('ADD_PROPERTY', addProperty);
    yield takeEvery('FETCH_PROPERTY', fetchAllProperty);
    yield takeEvery('FETCH_PROPERTY_DETAILS', fetchPropertyDetails);
    yield takeEvery('DELETE_PROPERTY', deleteProperty);
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
        yield put({ type: 'FETCH_PROPERTY' });
        if (action.history) {
            // Redirect back to the property list
            action.history.push('/');
        }
    }catch (e) {
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

function* deleteProperty(action) {
    try {
        yield axios.delete(`/api/property/${action.payload}`);
        // Dispatch an action to fetch elements
        yield put({ type: 'FETCH_PROPERTY' });
    } catch (error) {
        console.log('Error deleting Property', error);
        alert('Something went wrong.');
    }
}

  export default propertySaga
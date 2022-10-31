import { takeLatest } from "redux-saga/effects";

// All sagas will go here for this project
function* postProperty(action) {
    try {
        // axios.post(url, data);
        yield axios.post('/api/element', { name: action.payload });
        // At this point, our POST was a success
        action.clearForm();
        // After posting, dispatch action to fetch all elements
        yield put({ type: 'FETCH_ELEMENTS' });
    } catch (error) {
        console.log('Error posting element', error);
        alert('Something went wrong.');
    }
  }

  function* propertySaga() {
    yield takeLatest('ADD_PROPERTY', postProperty)
  }

  export default propertySaga
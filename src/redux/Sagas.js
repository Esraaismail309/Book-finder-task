import { call, put, takeLatest } from 'redux-saga/effects'
import getBooks from './book/ApiCall'
import { FETCH_BOOKS_REQUEST } from './book/BookTypes';
import { fetchSuccess } from './book/BookAction';

function* handleGetBooks({ payload }) {
    try {
        const response = yield call(getBooks, payload);
        const { data } = response
        yield put(fetchSuccess(data));
    } catch (error) {
        console.log(error);
    }
}
// listening for any redux action to dispatch 
function* mySaga() {
    yield takeLatest(FETCH_BOOKS_REQUEST, handleGetBooks);
}

export default mySaga
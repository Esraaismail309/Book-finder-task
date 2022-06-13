import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import GetBooks from './book/ApiCall'
import { FETCH_BOOKS_REQUEST } from './book/BookTypes';
import { fetchSuccess, fetchFail } from './book/BookAction';

function* handleGetBooks(userInputSearch) {
    try {
        const response = yield call(GetBooks(userInputSearch));
        const { data } = response
        if (data) {
            yield put(fetchSuccess(data));
        }

    } catch (error) {
        console.log(error);
    }
}
// listening for any redux action to dispatch 
function* mySaga() {
    yield takeEvery(FETCH_BOOKS_REQUEST, handleGetBooks);
}
export default mySaga
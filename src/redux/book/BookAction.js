import { FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from './BookTypes'


export const fetchRequest = () => {
    return {
        type: FETCH_BOOKS_REQUEST
    }
}
export const fetchSuccess = (books) => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: books
    }
}

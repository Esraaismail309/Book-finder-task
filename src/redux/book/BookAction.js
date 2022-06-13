import { FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from './BookTypes'


export const fetchRequest = (text) => {
    return {
        type: FETCH_BOOKS_REQUEST,
        payload: text
    }
}
export const fetchSuccess = (books) => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: books
    }
}

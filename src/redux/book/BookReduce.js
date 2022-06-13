import { FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from "./BookTypes";

const initialState = {
    books: [],
}
const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS_SUCCESS:
            return {
                books: action.payload,
            }
        default:
            return state;
    }
}
export default bookReducer
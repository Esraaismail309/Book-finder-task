import axios from 'axios'
import { fetchRequest, fetchSuccess } from './BookAction'

const GetBooks = (searchKey) => {
    return (dispatch) => {
        // dispatch(fetchRequest)
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchKey}`)
            .then((response) => {
                console.log(response);
                // dispatch(fetchSuccess(response))
                const books = response
                console.log(books);
            }).catch((error) => {
                const err = error
                console.log(err);
            })
    }
}
export default GetBooks
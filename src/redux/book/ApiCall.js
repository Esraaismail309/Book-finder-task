import axios from 'axios'

const getBooks = (searchKey) => {

    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchKey}`)
        .then((response) => {
            const books = response
            return books
        }).catch((error) => {
            const err = error
            console.log(err);
        })

}
export default getBooks
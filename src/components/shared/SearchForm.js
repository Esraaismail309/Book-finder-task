import { Button, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import GetBooks from '../../redux/book/ApiCall';
import { fetchRequest } from '../../redux/book/BookAction';
// import GetBooks from '../../redux/book/BookAction';


function SearchForm() {
    const [userInputSearch, setUserInputSearch] = useState('')
    const dispatch = useDispatch()

    // useEffect(() => {
    // }, [])


    const onClickHandler = (e) => {
        e.preventDefault()
        // console.log(userInputSearch);
        dispatch(fetchRequest(userInputSearch))
    }

    return (
        <div >
            <form onSubmit={onClickHandler}>
                <TextField
                    id="outlined-basic"
                    value={userInputSearch}
                    onChange={(e) => { setUserInputSearch(e.target.value) }}
                    size='small'
                    label="Enter search keyword"
                    variant="outlined" />
                <Button type='submit' size='medium' variant="outlined" endIcon={<SearchIcon />}>
                    Search
                </Button>
            </form>
        </div >
    )
}

export default SearchForm
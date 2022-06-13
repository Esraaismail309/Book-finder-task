import { Button, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchRequest } from '../../redux/book/BookAction';


function SearchForm() {
    const [userInputSearch, setUserInputSearch] = useState('')
    const dispatch = useDispatch()

    const onClickHandler = (e) => {
        e.preventDefault()
        dispatch(fetchRequest(userInputSearch))
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <form onSubmit={onClickHandler}>
                <TextField
                    id="outlined-basic"
                    value={userInputSearch}
                    onChange={(e) => { setUserInputSearch(e.target.value) }}
                    label="Enter search keyword"
                    variant="outlined" />
                <Button type='submit' style={{ marginTop: '0.6rem' }} endIcon={<SearchIcon />}>
                    Search
                </Button>
            </form>
        </div >
    )
}

export default SearchForm
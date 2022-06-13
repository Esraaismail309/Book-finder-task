import React from 'react'
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
function BooksList() {
    const books = useSelector((data) => { return data.books.items })
    return books ? (
        <div style={{ marginTop: '3rem' }}>
            <Grid container spacing={3}>
                {
                    books?.map((book) =>
                        <Grid item md={2}>
                            <Card style={{ height: '400px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={book?.volumeInfo?.imageLinks.thumbnail}
                                        alt={book.volumeInfo.title}
                                        style={{ width: '100%', height: '250px' }}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {book.volumeInfo.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card >
                        </Grid>
                    )
                }
            </Grid>


        </div>
    ) : <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <SentimentDissatisfiedIcon sx={{ fontSize: 40 }} />
        <h3>
            Please Enter search keyword...
        </h3>
    </div>







}

export default BooksList
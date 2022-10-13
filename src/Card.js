import { Button, Card, CardActions, CardContent, CardMedia, Grid, Pagination, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./App.css"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieFailure, fetchMovieStart, fetchMovieSuccess } from "./redux/movieSlice"
import { Link } from "react-router-dom"
import { Stack } from '@mui/system';


function MovieCard() {
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(null);
    const [limit, setLimit] = useState(8)

    const dispatch = useDispatch();
    const { movies } = useSelector((state) => state.movie)

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                dispatch(fetchMovieStart())
                const res = await axios.get(`http://localhost:4000/movie/?limit=${limit}&page=${page}`)
                dispatch(fetchMovieSuccess(res.data.movie))
                setLimit(res.data.limit)
                setCount(Math.round(res.data.total / limit))
            } catch (e) {
                console.log(e);
                dispatch(fetchMovieFailure())
            }
        }
        fetchMovies();
    }, [limit, page, dispatch])
    return (
        <Stack display="flex" direction="column" alignItems="center" spacing={4}>

            <Grid container spacing={2}>

                {Array.isArray(movies) &&
                    movies?.map((movie) => (
                        <Grid item xs={12} sm={3} md={3} >

                            <Link to={`movie/${movie._id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                <Card sx={{ maxWidth: 345, minHeight: 380 }}>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={movie.image}
                                        alt="green iguana"
                                    />

                                    <CardContent>

                                        <Typography gutterBottom variant="h5" component="div">
                                            {movie.movieName}
                                        </Typography>

                                        <CardActions>
                                            <Button size="medium" fullWidth variant='outlined' color='success'>
                                                View Movie
                                            </Button>
                                        </CardActions>

                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
            <Pagination onChange={(e, value) => setPage(value)} count={count} page={page} variant="outlined" size='large' />
        </Stack>
    )
}

export default MovieCard
import { Pagination, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./App.css"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieFailure, fetchMovieStart, fetchMovieSuccess } from "./redux/movieSlice"
import { Link } from "react-router-dom"


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
                console.log(res.data);
                setLimit(res.data.limit)
                setCount(Math.round(res.data.total / limit))


            } catch (e) {
                console.log(e);
                dispatch(fetchMovieFailure())
            }
        }
        fetchMovies();
    }, [limit, page])
    return (
        <div className=''>

            <div className='card_wrapper'>
                {
                    movies?.map((movie) => (
                        <Link to={`movie/${movie._id}`} style={{ textDecoration: "none", color: "inherit" }}>
                            <div className='card'>
                                <div className='card_body'>
                                    <img className='card_img' alt='movieImage' src={movie.image} />
                                    <Typography py={1} px={2} variant='h5'>{movie.movieName}</Typography>
                                </div>
                                <button className='card_btn'>View Movie</button>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <div style={{ padding: "100px" }}>

                <Pagination sx={{ marginLeft: '400px' }} onChange={(e, value) => setPage(value)} count={count} page={page} variant="outlined" size='large' />
            </div>

        </div>
    )
}

export default MovieCard
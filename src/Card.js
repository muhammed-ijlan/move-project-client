import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import "./App.css"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieFailure, fetchMovieStart, fetchMovieSuccess } from "./redux/movieSlice"
import { Link } from "react-router-dom"


function MovieCard() {

    const dispatch = useDispatch();
    const { movies } = useSelector((state) => state.movie)


    useEffect(() => {
        const fetchMovies = async () => {
            try {
                dispatch(fetchMovieStart())
                const res = await axios.get("http://localhost:4000/movie")
                dispatch(fetchMovieSuccess(res.data.movie))
            } catch (e) {
                console.log(e);
                dispatch(fetchMovieFailure())
            }
        }
        fetchMovies();
    }, [])
    return (
        <>
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
        </>
    )
}

export default MovieCard
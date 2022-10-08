import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import "./App.css"
import axios from "axios"


function MovieCard() {

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await axios.get("http://localhost:4000/movie")
            console.log(res.data);
        }
        fetchMovies();

    }, [])

    return (
        <div className='card'>
            <div className='card_body'>
                <img className='card_img' src='https://img.fruugo.com/product/9/75/101193759_max.jpg' />
                <Typography py={1} px={2} variant='h5'>Joker</Typography>
            </div>
            <button className='card_btn'>View Movie</button>
        </div>
    )
}

export default MovieCard
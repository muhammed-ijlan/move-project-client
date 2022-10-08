import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"


function Movie() {

    const { id } = useParams()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        const fetchMovie = async () => {
            const res = await axios.get(`http://localhost:4000/movie/${id}`)
            setMovie(res.data)
        }
        fetchMovie()

    }, [id])

    console.log(movie);
    return (
        <Card sx={{ display: 'flex' }}>
            {/* <div> */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h2">
                        {movie.movieName}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {movie.desc}
                    </Typography>
                    <Button variant='contained' sx={{ mt: "100px" }}>Add to my list</Button>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 301 }}
                image={movie.image}
                alt="Live from space album cover"
            />
            {/* </div> */}
        </Card>
    )
}

export default Movie
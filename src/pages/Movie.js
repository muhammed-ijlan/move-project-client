import { Box, Button, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { addToList } from '../redux/userSlice'
import { FavoriteBorder, FavoriteRounded } from '@mui/icons-material'


function Movie() {

    const { id } = useParams()
    const [movie, setMovie] = useState({})

    const { currentUser } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchMovie = async () => {
            const res = await axios.get(`http://localhost:4000/movie/${id}`)
            setMovie(res.data)
        }
        fetchMovie()

    }, [id, dispatch,])


    const addToListHandler = async () => {
        currentUser.movieList.includes(id) ?
            await axios.put(`http://localhost:4000/movie/dislike/${id}`)
            :
            await axios.put(`http://localhost:4000/movie/like/${id}`)
        dispatch(addToList(id))
    }

    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 301, display: { xs: "block", sm: "none" } }}
                        image={movie !== null && movie.image}
                        alt="Live from space album cover"
                    />
                    <Typography component="div" variant="h2">
                        {movie !== null && movie.movieName}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {movie !== null && movie.desc}
                    </Typography>

                    <Button onClick={addToListHandler} variant='contained' color='warning' sx={{ mt: "100px" }}>{currentUser.movieList?.includes(id) ? "Remove From List" : "Add to List"}</Button>
                </CardContent>

            </Box>
            <CardMedia
                component="img"
                sx={{ width: 301, display: { xs: "none", sm: "block" } }}
                image={movie !== null && movie.image}
                alt="Live from space album cover"
            />
        </Card>
    )
}

export default Movie
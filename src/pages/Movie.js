import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { addToList } from '../redux/userSlice'
import { FadeLoader } from "react-spinners";


function Movie() {

    const { id } = useParams()
    const [movie, setMovie] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const { currentUser } = useSelector((state) => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        setIsLoading(true)
        try {
            const fetchMovie = async () => {

                const res = await axios.get(`http://localhost:4000/movie/${id}`)
                setIsLoading(false)
                setMovie(res.data)
            }
            fetchMovie()
        } catch (e) {
            setIsLoading(false)
            console.log(e)
        }

    }, [id, dispatch,])
    console.log(movie);
    console.log(isLoading);
    const addToListHandler = async () => {
        currentUser.movieList.includes(id) ?
            await axios.put(`http://localhost:4000/movie/dislike/${id}`)
            :
            await axios.put(`http://localhost:4000/movie/like/${id}`)
        dispatch(addToList(id))
    }

    return (
        <Card sx={{ display: 'flex' }}>

            {!isLoading ? <>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>

                        <CardMedia
                            component="img"
                            sx={{ width: 301, display: { xs: "block", sm: "none" } }}
                            image={movie.image}
                            alt="MovieImage"
                        />
                        <Typography component="div" variant="h2">
                            {movie.movieName}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {movie.desc}
                        </Typography>

                        <Button onClick={addToListHandler} variant='contained' color='warning' sx={{ mt: "100px" }}>{currentUser.movieList?.includes(id) ? "Remove From List" : "Add to List"}</Button>
                    </CardContent>

                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 301, display: { xs: "none", sm: "block" } }}
                    image={movie !== null && `http://localhost:4000/${movie.image}`}
                    alt="Live from space album cover"
                />
            </> : <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                <FadeLoader loading color="hsla(209, 45%, 40%, 1)" />
            </div>
            }
        </Card >
    )
}

export default Movie
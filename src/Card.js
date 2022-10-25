import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Modal, Pagination, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
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

    const [movie, setMovie] = useState("")
    const [desc, setDesc] = useState("")
    const [fileInput, setFileInput] = useState("")


    const formData = new FormData();

    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user)
    const { movies } = useSelector((state) => state.movie)

    const fetchMovies = async () => {
        try {
            dispatch(fetchMovieStart())
            const res = await axios.get(`http://localhost:4000/movie/?limit=${limit}&page=${page}`, { withCredentials: true })
            dispatch(fetchMovieSuccess(res.data.movie))
            setLimit(res.data.limit)
            setCount(Math.ceil(res.data.total / limit))
        } catch (e) {
            console.log(e);
            dispatch(fetchMovieFailure())
        }
    }
    useEffect(() => {
        fetchMovies();
    }, [limit, page, dispatch])

    const exportClickHandler = async () => {
        window.open("http://localhost:4000/export")
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    formData.append("movie", fileInput)
    formData.append("movieName", movie)
    formData.append("desc", desc)
    const inputRef = useRef();


    const createMovie = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:4000/movie/create", formData)
            fetchMovies();
            setMovie("")
            setDesc("")
            inputRef.current.value = null

            setOpen(false)
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            {
                currentUser.isAdmin &&
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Button onClick={exportClickHandler} variant='contained' sx={{ alignItems: "end" }}>📁Export as excel file</Button>
                    <Button variant='contained' onClick={handleOpen}>➕Create New</Button>
                </div>
            }
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style} >
                    <form onSubmit={createMovie} style={{ padding: "5px", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                        <TextField value={movie} onChange={(e) => setMovie(e.target.value)} required id="fullwidth" label="Movie Name" fullWidth variant="outlined" name='movieName' />
                        <input ref={inputRef} onChange={(e) => setFileInput(e.target.files[0])} style={{ margin: "10px" }} type="file" required />
                        <TextField value={desc} onChange={(e) => setDesc(e.target.value)} name='desc'
                            id="standard-multiline-flexible"
                            label="Description"
                            multiline
                            rows={4}
                            fullWidth
                        />
                        <Button type='submit' sx={{ mt: "10px" }} variant='outlined'>Create</Button>
                    </form>
                </Box>
            </Modal>

            <Stack display="flex" direction="column" alignItems="center" sx={{ marginTop: "50px" }} spacing={4}>

                <Grid container spacing={2}>

                    {Array.isArray(movies) &&
                        movies?.map((movie) => (
                            <Grid item xs={12} sm={3} md={3} key={movie._id}>

                                <Link to={`movie/${movie._id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                    <Card sx={{ maxWidth: 345, minHeight: 380 }}>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            image={`http://localhost:4000/${movie.image}`}
                                            alt="movieImage"
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
        </>
    )
}

export default MovieCard
import { Stack, Paper, Avatar, Typography, Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Card, CardActionArea, CardMedia, CardContent, Grid, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios"
import { PulseLoader, MoonLoader } from "react-spinners"

function Profile() {
    const { id } = useParams()
    const [userdata, setUserdata] = useState({})
    const [movieList, setMovieList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        try {
            const fetchUser = async () => {
                const res = await axios.get(`http://localhost:4000/user/${id}`)
                const movielistRes = await axios.get("http://localhost:4000/user/movies/list")
                setIsLoading(false)
                setUserdata(res.data);
                setMovieList(movielistRes.data)
            }
            fetchUser();
        } catch (e) {
            setIsLoading(false)
            console.log(e);
        }
    }, [id])
    return (
        <Container sx={{ mt: 4 }}>

            <Stack>

                <Stack>
                    <Typography color="white" textAlign="center" marginBottom={3} variant='h4'>Profile</Typography>
                    <TableContainer component={Paper} elevation={10} >
                        {!isLoading ?
                            <Table sx={{ minWidth: { sx: 650, sm: 1000 }, }} aria-label="simple table" >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Avatar</TableCell>
                                        <TableCell></TableCell>
                                        <TableCell align="center">FullName</TableCell>
                                        <TableCell align="right">Email address</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            <Avatar>{userdata.fullname}</Avatar>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                        </TableCell>
                                        <TableCell align="center">{userdata.fullname}</TableCell>
                                        <TableCell align="right">{userdata.email}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table> :
                            <Paper sx={{ display: "flex", justifyContent: "center", padding: "50px" }}>

                                <PulseLoader
                                    color="black"
                                    loading
                                    speedMultiplier={2}
                                />
                            </Paper>
                        }
                    </TableContainer>
                </Stack>
                <Typography color="white" margin={3} textAlign="center" variant='h5'>Your Movie List</Typography>

                {!isLoading ?
                    <Grid spacing={2} container alignItems="center">
                        {Array.isArray(movieList) &&
                            movieList.map((movie) => (
                                <Grid item sm={3} xs={12}>
                                    <Link to={`/movie/${movie._id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                        <Card sx={{ minWidth: 250, minHeight: 300 }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="240"
                                                    image={`http://localhost:4000/${movie.image}`}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {movie.movieName}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Link>
                                </Grid>
                            ))
                        }

                    </Grid> :
                    <Grid sx={{ display: "flex", justifyContent: "center", padding: "50px" }}>

                        <MoonLoader
                            color="white"
                            loading
                            speedMultiplier={1}
                        />
                    </Grid>
                }
            </Stack>
        </Container>
    )
}

export default Profile
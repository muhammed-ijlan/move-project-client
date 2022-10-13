import { Stack, Paper, Avatar, Typography, Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Card, CardActionArea, CardMedia, CardContent, Grid, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios"

function Profile() {
    const { id } = useParams()
    const [userdata, setUserdata] = useState({})
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`http://localhost:4000/user/${id}`, {
                withCredentials: true
            })

            const movielistRes = await axios.get("http://localhost:4000/user/movies/list", {
                withCredentials: true
            })
            setUserdata(res.data);
            setMovieList(movielistRes.data)
        }
        fetchUser();
    }, [id])
    return (
        <Stack>

            <Stack>
                <Typography textAlign="center" marginBottom={3} variant='h4'>Profile</Typography>
                <TableContainer component={Paper} elevation={10} >
                    <Table sx={{ minWidth: { sx: 650, sm: 1000 }, }} aria-label="simple table" >
                        <TableHead>
                            <TableRow>
                                <TableCell>Avatar</TableCell>
                                <TableCell align="right">FullName</TableCell>
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
                                <TableCell align="right">{userdata.fullname}</TableCell>
                                <TableCell align="right">{userdata.email}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
            <Typography margin={3} textAlign="center" variant='h5'>Your Movie List</Typography>

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
                                            image={movie.image}
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

            </Grid>
        </Stack>
    )
}

export default Profile
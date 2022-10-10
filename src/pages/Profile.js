import { Stack, Paper, Avatar, Typography, Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Card, CardActionArea, CardMedia, CardContent } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import axios from "axios"

function Profile() {
    const { id } = useParams()
    const [userdata, setUserdata] = useState({})
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`http://localhost:4000/user/${id}`)
            const movielistRes = await axios.get("http://localhost:4000/user/movies/list")

            setUserdata(res.data);
            setUserdata(movielistRes.data)
            console.log(movielistRes);
        }
        fetchUser();
    }, [id])

    return (
        <Stack>

            <Stack>
                <Typography textAlign="center" marginBottom={3} variant='h4'>Hai {userdata.fullname}</Typography>
                <TableContainer component={Paper} elevation={10}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
            <Typography margin={3} textAlign="center" variant='h5'>My Movie List</Typography>
            {/* CARD */}
            <Stack spacing={2} display="flex" direction="row">

                <Stack>
                    {
                        movieList.map((movie) => (
                            <Card sx={{ maxWidth: 200 }}>
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
                        ))
                    }
                </Stack>

            </Stack>
        </Stack >
    )
}

export default Profile
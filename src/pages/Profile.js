import { Stack, Paper, Avatar, Typography, Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Card, CardActionArea, CardMedia, CardContent } from '@mui/material'
import { display } from '@mui/system'
import React from 'react'

function Profile() {
    return (
        <Stack>

            <Stack>
                <Typography textAlign="center" marginBottom={3} variant='h4'>Hai John Doe</Typography>
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
                                    <Avatar />
                                </TableCell>
                                <TableCell align="right">Johd Doe</TableCell>
                                <TableCell align="right">johndoe@email.com</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
            <Typography margin={3} textAlign="center" variant='h5'>My Movie List</Typography>
            {/* CARD */}
            <Stack spacing={2} display="flex" direction="row">

                <Stack>
                    <Card sx={{ maxWidth: 200 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="240"
                                image="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1662739107/amc-cdn/production/2/movies/68200/68219/PosterDynamic/142758.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Woman King
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Stack>

                {/*  */}
                <Stack>
                    <Card sx={{ maxWidth: 200 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="240"
                                image="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1662739107/amc-cdn/production/2/movies/68200/68219/PosterDynamic/142758.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Woman King
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Stack>

            </Stack>

        </Stack >
    )
}

export default Profile
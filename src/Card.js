import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function MovieCard() {
    return (
        <Card sx={{ width: 300, height: 360 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image="https://lumiere-a.akamaihd.net/v1/images/poster-thor-_viet_a5abf634.jpeg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default MovieCard
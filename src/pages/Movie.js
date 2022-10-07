import { PlayArrow, SkipNext, SkipPrevious } from '@mui/icons-material'
import { Box, Button, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'

function Movie() {
    return (

        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h2">
                        Live From Space
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Knives Out, Black Panther and Avatar: It's a big year for sequels and blockbusters like Black Adam, even though Madame Web, Mario, and The Flash are delayed again.
                        Knives Out, Black Panther and Avatar: It's a big year for sequels and blockbusters like Black Adam, even though Madame Web, Mario, and The Flash are delayed again.
                        Knives Out, Black Panther and Avatar: It's a big year for sequels and blockbusters like Black Adam, even though Madame Web, Mario, and The Flash are delayed again.
                        Knives Out, Black Panther and Avatar: It's a big year for sequels and blockbusters like Black Adam, even though Madame Web, Mario, and The Flash are delayed again.
                    </Typography>
                    <Button variant='contained' sx={{ mt: "100px" }}>Add to my list</Button>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 301 }}
                image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
                alt="Live from space album cover"
            />

        </Card>
    )
}

export default Movie
import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import MovieCard from './Card'

function Main() {
    return (

        <Grid spacing={2}
            container justifyContent='center'>

            <Grid item xs={10} sm={4} md={4}><MovieCard /></Grid>
            <Grid item xs={10} sm={4} md={4}><MovieCard /></Grid>
            <Grid item xs={10} sm={4} md={4}><MovieCard /></Grid>
            <Grid item xs={10} sm={4} md={4}><MovieCard /></Grid>
            <Grid item xs={10} sm={4} md={4}><MovieCard /></Grid>
        </Grid >

    )
}

export default Main
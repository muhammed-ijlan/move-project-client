import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import MovieCard from './Card'
import { Link } from "react-router-dom"

function Main() {
    return (

        <Grid spacing={2}
            container justifyContent='center'>
            <Link to="/movie">

                <Grid item xs={10} sm={4} md={4}><MovieCard /></Grid>
            </Link>
            <Grid item xs={10} sm={4} md={4}><MovieCard /></Grid>
            <Grid item xs={10} sm={4} md={4}><MovieCard /></Grid>
            <Grid item xs={10} sm={4} md={4}><MovieCard /></Grid>
            <Grid item xs={10} sm={4} md={4}><MovieCard /></Grid>
        </Grid >

    )
}

export default Main
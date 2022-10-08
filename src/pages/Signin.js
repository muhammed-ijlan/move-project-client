import { Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom"

function Signin() {
    return (
        <Grid container>
            <Paper elevation={10} sx={{ padding: "20px", height: "45vh", width: "300px", margin: "auto", borderRadius: "10px" }}>
                <Stack display='flex' alignItems="center">
                    <Typography variant='h5'>SignIn</Typography>
                </Stack>
                <Stack spacing={4} sx={{ mt: "20px" }} color="white">
                    <TextField fullWidth color='info' type="email" label="Email" id="fullWidth" />
                    <TextField fullWidth color='info' type="password" label="Password" id="fullWidth" />
                    <Button variant='contained' color='success' fullWidth>SignUp</Button>
                </Stack>
                <Typography variant='body2' marginTop={1}>Dont Have an Account? <Link to="/signup">SignUp</Link></Typography>
            </Paper>
        </Grid>
    )
}

export default Signin
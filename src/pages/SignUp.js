import { Grid, Paper, Stack, TextField, Typography, Button } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom"

function SignUp() {
    return (
        <Grid container>
            <Paper elevation={10} sx={{ padding: "20px", height: "55vh", width: "300px", margin: "auto", borderRadius: "10px" }}>
                <Stack display='flex' alignItems="center">
                    <Typography variant='h5'>SignUp</Typography>
                </Stack>
                <Stack spacing={4} sx={{ mt: "20px" }} color="white">
                    <TextField fullWidth color='info' type="text" label="Full Name" id="fullWidth" />
                    <TextField fullWidth color='info' type="email" label="Email" id="fullWidth" />
                    <TextField fullWidth color='info' type="password" label="Password" id="fullWidth" />
                    <Button variant='contained' color='success' fullWidth>SignIn</Button>
                </Stack>
                <Typography variant='body2' marginTop={1}>Already Have an Account? <Link to="/signin">SignIn</Link></Typography>
            </Paper>
        </Grid>
    )
}

export default SignUp
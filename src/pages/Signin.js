import { Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from "react-router-dom"


function Signin() {
    g

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUser = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:4000/auth/signin", { email, password })
            console.log(res.data);

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Grid container>
            <Paper elevation={10} sx={{ padding: "20px", height: "45vh", width: "300px", margin: "auto", borderRadius: "10px" }}>
                <Stack display='flex' alignItems="center">
                    <Typography variant='h5'>SignIn</Typography>
                </Stack>
                <form onSubmit={signUser}>
                    <Stack spacing={4} sx={{ mt: "20px" }} color="white">

                        <TextField onChange={(e) => setEmail(e.target.value)} fullWidth color='info' name='email' type="email" label="Email" id="fullWidth" />
                        <TextField onChange={(e) => setPassword(e.target.value)} fullWidth color='info' name='password' type="password" label="Password" id="fullWidth" />
                        <Button type='submit' variant='contained' color='success' fullWidth>SignIn</Button>
                    </Stack>
                </form>
                <Typography variant='body2' marginTop={1}>Dont Have an Account? <Link to="/signup">SignUp</Link></Typography>
            </Paper>
        </Grid >
    )
}

export default Signin
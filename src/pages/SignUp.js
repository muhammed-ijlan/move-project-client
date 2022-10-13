import { Grid, Paper, Stack, TextField, Typography, Button, FormHelperText } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


function SignUp() {

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errMsg, setErrMsg] = useState("")


    const navigate = useNavigate()

    const signUpHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:4000/auth/register", { fullname, email, password })

            navigate("/signin")
        } catch (e) {
            // if (e.status === 403) {
            console.log(e.response.data);
            setErrMsg(e.response.data)
            // }
        }
    }

    console.log(errMsg);

    return (

        <Grid container>
            <Paper elevation={10} sx={{ padding: "20px", height: "60vh", width: "300px", margin: "auto", borderRadius: "10px" }}>
                <Stack display='flex' alignItems="center">
                    <Typography variant='h5'>SignUp</Typography>
                </Stack>
                <form onSubmit={signUpHandler}>


                    <Stack spacing={4} sx={{ mt: "20px" }} color="white">
                        <TextField onChange={(e) => setFullname(e.target.value)} name="fullname" fullWidth color='info' type="text" label="Full Name" id="fullWidth" />
                        <TextField
                            onChange={(e) => setEmail(e.target.value)} name="email" fullWidth color='info' type="email" label="Email" id="fullWidth" />
                        <TextField
                            onChange={(e) => setPassword(e.target.value)} name="password" fullWidth color='info' type="password" label="Password" id="fullWidth" />
                        <Typography component="p" variant='pre' color="error">{errMsg}</Typography>
                        <Button type='submit' variant='contained' color='success' fullWidth>SignUp</Button>
                    </Stack>
                </form>
                <Typography variant='body2' marginTop={1}>Already Have an Account? <Link to="/signin">SignIn</Link></Typography>
            </Paper>
        </Grid>
    )
}

export default SignUp
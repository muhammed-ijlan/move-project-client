import { Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, } from "react-redux"
import { loginFailure, loginStart, loginSuccess, } from '../redux/userSlice'

function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const signUser = async (e) => {
        e.preventDefault();
        try {
            dispatch(loginStart())
            const res = await axios.post("http://localhost:4000/auth/signin", { email, password }
            )
            dispatch(loginSuccess(res.data.user))
            navigate("/")

        } catch (e) {
            console.log(e);
            setErrMsg(e.response.data.message)
            dispatch(loginFailure())
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
                        <TextField helperText="" onChange={(e) => setPassword(e.target.value)} fullWidth color='info' name='password' type="password" label="Password" id="fullWidth" />
                        <Typography color="error" variant='p'>{errMsg}</Typography>
                        <Button type='submit' variant='contained' color='success' fullWidth>Login</Button>
                    </Stack>
                </form>
                <Typography variant='body2' marginTop={1}>Dont Have an Account? <Link to="/signup">SignUp</Link></Typography>
            </Paper>
        </Grid >
    )
}

export default Signin
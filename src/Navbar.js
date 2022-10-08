import { Movie } from '@mui/icons-material'
import { AppBar, Container, Toolbar, styled, Typography, Box, InputBase, Button, IconButton, Avatar, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from './redux/userSlice';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "5px",
    width: "40%",
    border: "1px solid black"

}))
const Icons = styled(Box)({

    borderRadius: "5px",
    display: "flex",
    alignItems: "center"
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px"
})

function Navbar() {
    const { currentUser } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = () => {
        dispatch(logOut())
        navigate("/signin")
    }
    return (
        <AppBar sx={{ background: "#06283D" }} position="sticky">
            <Container>

                <StyledToolbar>
                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                        <Typography variant='h6' sx={{ display: { xs: "none", sm: "flex", alignItems: "center" } }}>
                            <Movie />  movieDB
                        </Typography>
                    </Link>
                    <Movie sx={{ display: { xs: "block", sm: "none" } }} />
                    <Search>
                        <InputBase placeholder='search...' />
                    </Search>
                    {currentUser ?
                        <>
                            <Icons sx={{ display: { xs: "none", sm: "flex" } }}>
                                <IconButton>
                                    <Link to="/signin" style={{ textDecoration: "none", color: "inherit" }}>
                                        <Button onClick={logoutHandler} variant="contained" color='error'>Logout</Button>
                                    </Link>
                                </IconButton>

                            </Icons>
                            <Link to="/profile" style={{ textDecoration: "none", color: "inherit" }}>
                                <UserBox sx={{ display: { xs: "none", sm: "flex" } }}>
                                    <Avatar />
                                    <Typography variant='span'>{currentUser?.fullname}</Typography>
                                </UserBox>
                            </Link>
                        </>
                        :
                        <Icons sx={{ display: { xs: "none", sm: "flex" } }}>
                            <IconButton>
                                <Link to="/signin" style={{ textDecoration: "none", color: "inherit" }}>
                                    <Button variant="contained" color='success'>SignIn</Button>
                                </Link>
                            </IconButton>
                            <IconButton>
                                <Link to="/signup" style={{ textDecoration: "none", color: "inherit" }}>
                                    <Button variant="contained" color='warning'>SignUp</Button>
                                </Link>
                            </IconButton>

                        </Icons>
                    }
                    <UserBox sx={{ display: { sm: "none", xs: "flex" } }}>
                        <Avatar />
                        <Typography variant='span'>{currentUser?.fullname}</Typography>
                    </UserBox>
                </StyledToolbar>


            </Container>
        </AppBar>
    )
}

export default Navbar
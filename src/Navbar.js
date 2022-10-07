import { Movie } from '@mui/icons-material'
import { AppBar, Container, Toolbar, styled, Typography, Box, InputBase, Button, IconButton, Avatar, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'

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
    // padding: "5px"
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px"
})

function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <AppBar sx={{ background: "#06283D" }} position="sticky">
            <Container>

                <StyledToolbar>
                    <Typography variant='h6' sx={{ display: { xs: "none", sm: "flex", alignItems: "center" } }}>
                        <Movie />  movieDB
                    </Typography>
                    <Movie sx={{ display: { xs: "block", sm: "none" } }} />
                    <Search>
                        <InputBase placeholder='search...' />
                    </Search>
                    <Icons sx={{ display: { xs: "none", sm: "flex" } }}>
                        <IconButton>
                            <Button variant="contained" color='success'>SignIn</Button>
                        </IconButton>
                        <IconButton>
                            <Button variant="contained" color='warning'>SignUp</Button>
                        </IconButton>
                    </Icons>
                    <UserBox sx={{ display: { xs: "flex", sm: "none" } }}>
                        <Avatar onClick={(e) => setOpen(true)} />
                        <Typography variant='span'>John</Typography>
                    </UserBox>
                </StyledToolbar>

                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open={open}
                    onClose={(e) => setOpen(false)}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >My List</MenuItem>
                    <MenuItem >Logout</MenuItem>
                </Menu>
            </Container>
        </AppBar>
    )
}

export default Navbar
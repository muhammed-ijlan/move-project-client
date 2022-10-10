import { Box, Container, } from "@mui/material";
import Main from "./Main";
import Navbar from "./Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Profile from "./pages/Profile";
import SignIn from "./pages/Signin"
import SignUp from "./pages/SignUp"
import Movie from "./pages/Movie";
import { useSelector } from "react-redux"

function App() {
  const { currentUser } = useSelector((state) => state.user)
  return (
    <BrowserRouter>
      <Box >
        <Navbar />
        <Container sx={{ mt: 5 }}>
          <Routes>

            <Route path="/">
              <Route index element={<Main />} />
              <Route path="user/:id" element={<Profile />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="movie/:id" element={currentUser ? <Movie /> : <SignIn />} />
            </Route>

          </Routes>
        </Container>
      </Box>
    </BrowserRouter>
  );
}

export default App;

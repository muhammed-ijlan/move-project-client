import { Box, Container, } from "@mui/material";
import Main from "./Main";
import Navbar from "./Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Profile from "./pages/Profile";
import SignIn from "./pages/Signin"
import SignUp from "./pages/SignUp"
import Movie from "./pages/Movie";

function App() {
  return (
    <BrowserRouter>
      <Box >
        <Navbar />
        <Container sx={{ mt: 5 }}>
          <Routes>
            <Route path="/">
              <Route index element={<Main />} />
              <Route path="profile" element={<Profile />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="movie" element={<Movie />} />
            </Route>

          </Routes>
        </Container>

      </Box>
    </BrowserRouter>
  );
}

export default App;

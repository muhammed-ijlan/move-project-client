import { Box, Container, } from "@mui/material";
import Main from "./Main";
import Navbar from "./Navbar";

function App() {
  return (
    <Box >
      <Navbar />
      <Container sx={{ mt: 5 }}>
        <Main />
      </Container>
    </Box>
  );
}

export default App;

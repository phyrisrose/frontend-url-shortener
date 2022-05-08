import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Layout from "./Layout";
import UrlShortener from "./components/UrlShortener";

function App() {
  return (
    <Layout>
      <Container maxWidth="sm">
        <Box>
          <UrlShortener />
        </Box>
      </Container>
    </Layout>
  );
}

export default App;

import Container from "@mui/material/Container";

import Layout from "./Layout";
import UrlShortener from "./components/UrlShortener";

function App() {
  return (
    <Layout>
      <Container maxWidth="sm">
        <UrlShortener />
      </Container>
    </Layout>
  );
}

export default App;

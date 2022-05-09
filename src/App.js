import Container from "@mui/material/Container";

import Layout from "./Layout";
import { UrlShortener } from "./features/url-shortener";

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

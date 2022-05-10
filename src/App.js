import Container from "@mui/material/Container";

import Layout from "./Layout";
import { UrlShortener } from "./features/url-shortener";
import { UrlHistory } from "./features/url-history";

function App() {
  return (
    <Layout>
      <Container maxWidth="sm">
        <UrlShortener />
        <UrlHistory />
      </Container>
    </Layout>
  );
}

export default App;

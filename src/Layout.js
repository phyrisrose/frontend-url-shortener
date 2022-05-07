import React from "react";
import styled from "@emotion/styled";
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import { brown } from "@mui/material/colors";

// import theme from "./theme";

const Background = styled.div`
  background: ${brown[50]};
  height: 100vh;
`;

const MainLayout = styled.main`
  margin: 0 auto;
  max-width: 650px;
  padding: 0 1rem;
  background: white;
`;

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Layout = ({ children }) => {
  <div>
    is it the theme provider
    {/* <ThemeProvider theme={theme}>
      Anything?
       <CssBaseline /> 
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            URL Shortener
          </Typography>
        </Toolbar>
      </AppBar>
      <Offset />
      <Background>
        <MainLayout>{children}</MainLayout>
      </Background>
    </ThemeProvider> */}
  </div>;
};

export default Layout;

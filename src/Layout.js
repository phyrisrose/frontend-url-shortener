import React from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { brown } from "@mui/material/colors";

import theme from "./theme";

const Background = styled.main`
  background: ${brown[50]};
  height: 100vh;
  padding-top: 1rem;
`;

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

/**
 *
 * @todo I wonder if ThemeProvider shoudld live in index.js...
 */
const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          URL Shortener
        </Typography>
      </Toolbar>
    </AppBar>
    <Offset />
    <Background>{children}</Background>
  </ThemeProvider>
);

export default Layout;

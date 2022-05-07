import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

import { Color } from "./constants";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: Color.PRIMARY,
    secondary: Color.SECONDARY,
    error: {
      main: red.A400,
    },
  },
});

export default theme;

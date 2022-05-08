import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const UrlShortener = () => {
  return (
    <Box>
      <TextField id="long-url" label="Url to shorten" variant="outlined" />
    </Box>
  );
};

export default UrlShortener;

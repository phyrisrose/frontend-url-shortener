import * as React from "react";
import TextField from "@mui/material/TextField";

const UrlShortener = () => {
  return (
    <div>
      <TextField id="long-url" label="Url to shorten" variant="outlined" />
    </div>
  );
};

export default UrlShortener;

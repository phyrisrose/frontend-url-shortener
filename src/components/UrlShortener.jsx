import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

/** @todo move to actions */
import { postData } from "../actions/ajax";

const UrlShortener = () => {
  const [longUrl, setLongUrl] = useState("");

  const handleLongUrlChange = (e) => {
    setLongUrl(e.target.value);
  };

  /** @todo break out api base url */
  const handleShorten = async () => {
    console.log("handling shorten");
    const shortUrl = await postData("https://api.bely.me/", { url: longUrl });
    console.log(shortUrl);
  };

  return (
    <Box>
      <TextField
        id="long-url"
        label="Url to shorten"
        variant="outlined"
        value={longUrl}
        onChange={handleLongUrlChange}
      />
      <Button variant="contained" onClick={handleShorten}>
        Shorten
      </Button>
    </Box>
  );
};

export default UrlShortener;

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

/** @todo move to actions */
import { postData } from "../actions/ajax";
import { API } from "../constants";

const UrlShortener = () => {
  const [longUrl, setLongUrl] = useState("");

  const handleLongUrlChange = (e) => {
    setLongUrl(e.target.value);
  };

  const handleShorten = async () => {
    const shortUrl = await postData(`${API.BASE}/links`, {
      url: longUrl,
    });
    console.log(shortUrl);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
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
      </CardContent>
    </Card>
  );
};

export default UrlShortener;

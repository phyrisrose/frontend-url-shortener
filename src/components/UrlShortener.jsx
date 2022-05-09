import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

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
        <Grid container spacing={2} style={{ alignItems: "center" }}>
          <Grid item xs={8}>
            <TextField
              id="long-url"
              label="Url to shorten"
              variant="outlined"
              value={longUrl}
              onChange={handleLongUrlChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" onClick={handleShorten}>
              Shorten
            </Button>{" "}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UrlShortener;

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

/** @todo move to actions */
import { postData } from "../actions/ajax";
import { API } from "../constants";

const UrlShortener = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleLongUrlChange = (e) => {
    setLongUrl(e.target.value);
  };

  const handleShorten = async () => {
    const response = await postData(`${API.BASE}/links`, {
      url: longUrl,
    });

    setShortUrl(response.short_url);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container spacing={2} style={{ alignItems: "center" }}>
          <Grid item xs={9}>
            <TextField
              id="long-url"
              label="Enter long url"
              variant="outlined"
              value={longUrl}
              onChange={handleLongUrlChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={handleShorten}>
              Shorten
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body" component="div">
              {shortUrl}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UrlShortener;

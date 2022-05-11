import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { shortenAsync, clearShortUrl } from "./shortnenerSlice";
import { getHistoryAsync } from "../url-history";

/**
 * @todo the shortened url can be displayed a bit more prominently,
 * than it is right now
 * */
const UrlShortener = () => {
  const dispatch = useDispatch();
  const [longUrl, setLongUrl] = useState("");
  const { shortUrl, loading } = useSelector((state) => state.shortener);

  const handleLongUrlChange = (e) => {
    setLongUrl(e.target.value);
    dispatch(clearShortUrl());
  };

  const handleShorten = () =>
    dispatch(shortenAsync(longUrl)).then(() => dispatch(getHistoryAsync()));

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
            <Button
              variant="contained"
              onClick={handleShorten}
              disabled={loading}
            >
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

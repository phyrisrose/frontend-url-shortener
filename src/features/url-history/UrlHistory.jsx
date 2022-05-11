import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import LinkIcon from "@mui/icons-material/Link";
import DeleteIcon from "@mui/icons-material/Delete";

import { getHistoryAsync, expireUrlAsync } from "./historySlice";

/**
 * @todo could actually make the displayed urls
 * clickable links
 */
const UrlHistory = () => {
  const dispatch = useDispatch();
  const { urls } = useSelector((state) => state.history);

  useEffect(() => {
    dispatch(getHistoryAsync());
    /**
     * @todo figure out his dependency warning; the effect needs
     * to run once, on load */
  }, []);

  const handleExpire = (slug) => {
    dispatch(expireUrlAsync(slug)).then(() => dispatch(getHistoryAsync()));
  };

  return (
    <Card sx={{ minWidth: 275, marginTop: "1rem" }}>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          Url History
        </Typography>
        <List>
          {urls.map((url) => (
            <ListItem
              key={url.slug}
              secondaryAction={
                <IconButton edge="end" onClick={() => handleExpire(url.slug)}>
                  <DeleteIcon color="primary" />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <LinkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primaryTypographyProps={{
                  style: { textOverflow: "ellipsis", overflow: "hidden" },
                }}
                primary={url.url}
                secondary={`short url: ${url.short_url}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default UrlHistory;

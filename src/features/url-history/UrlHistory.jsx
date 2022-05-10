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
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";

import { getHistoryAsync } from "./historySlice";

const UrlHistory = () => {
  const dispatch = useDispatch();
  const { urls } = useSelector((state) => state.history);

  useEffect(() => {
    dispatch(getHistoryAsync());
    /**
     * @todo figure out his dependency warning; the effect needs
     * to run once, on load */
  }, []);

  console.log("urls", urls);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          Url History
        </Typography>
        <List>
          {urls.map((url) => (
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Single-line item"
                secondary="Secondary text"
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default UrlHistory;

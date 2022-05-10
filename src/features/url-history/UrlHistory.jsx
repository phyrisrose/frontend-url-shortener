import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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
      </CardContent>
    </Card>
  );
};

export default UrlHistory;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { getHistoryAsync } from "./historySlice";

const UrlHistory = () => {
  const dispatch = useDispatch();
  const { urls } = useSelector((state) => state.history);

  useEffect(() => {
    dispatch(getHistoryAsync());
  }, []);

  console.log("urls", urls);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>Url history placeholder</CardContent>
    </Card>
  );
};

export default UrlHistory;

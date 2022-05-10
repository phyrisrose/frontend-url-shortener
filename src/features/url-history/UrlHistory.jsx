import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { getHistory } from "./historyAPI";

const UrlHistory = () => {
  useEffect(() => {
    async function fetchData() {
      const result = await getHistory();
      console.log(result);
    }
    fetchData();
  }, []);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>Url history placeholder</CardContent>
    </Card>
  );
};

export default UrlHistory;

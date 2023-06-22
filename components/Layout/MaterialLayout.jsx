import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Header from "../Header";
import Footer from "../Footer";
import { height } from "@mui/system";

export default function MaterialLayout(props) {
  const { children } = props;

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "60px",
          "& > :not(style)": {
            m: 1,
            width: 800,
            height: 1300,
          },
        }}
      >
        <Paper variant="outlined" elevation={24}>
          {children}
        </Paper>
      </Box>
      <Footer />
    </>
  );
}

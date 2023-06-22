import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <Box
      sx={{
        // display: "flex",
        // flexDirection: "column",
        // bottom: 0,
        position:'fixed', 
        width:'100%',
        bottom:-10, 

      }}
    >
      <CssBaseline />
      <Box
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "#3C3C3C",
          color: "white",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">Atencion al cliente 2223-2323</Typography>
        </Container>
      </Box>
    </Box>
  );
}

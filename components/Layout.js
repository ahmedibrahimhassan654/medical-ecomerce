import React, { Children } from "react";
import Head from "next/head";
import classes from "../utils/classes";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
  Box,
  Paper,
  Button,
  CssBaseline,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import NextLink from "next/link";
import { ThemeProvider } from "styled-components";

const Layout = ({ title, children, description }) => {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "16rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      body1: {
        fontWeight: "normal",
      },
    },
    palette: {
      type: "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });
  return (
    <div>
      <Head>
        <title>{title ? `${title}- American Drugs` : "American Drugs"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={classes.appbar}>
            <Toolbar>
              <NextLink href="/" passHref>
                <Link underline="none">
                  <Typography
                    sx={classes.brand}
                    variant="h6"
                    color="inherit"
                    component="div"
                  >
                    American Drugs
                  </Typography>
                </Link>
              </NextLink>
              <NextLink href="login" passHref>
                <Link underline="none">
                  <Button color="inherit" sx={{ marginLeft: 150 }}>
                    Login
                  </Button>
                </Link>
              </NextLink>
              <NextLink href="cart" passHref>
                <Link underline="none">
                  <Button color="primary" sx={{ marginLeft: 10 }}>
                    cart
                  </Button>
                </Link>
              </NextLink>
            </Toolbar>
            {/* <Toolbar>
          <NextLink href="/" passHref>
            <Link underline="none">
              <Typography
                sx={classes.brand}
                variant="h6"
                color="inherit"
                component="div"
              >
                WEB Site Name
              </Typography>
            </Link>
          </NextLink>
         
        </Toolbar> */}
          </AppBar>
        </Box>

        <Container sx={classes.main}>{children}</Container>
        <footer sx={classes.footer}>
          <Typography align="center">
            All rights reserved. Next Amazona.
          </Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
};

export default Layout;

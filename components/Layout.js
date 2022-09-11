import React, { useContext } from "react";
import Head from "next/head";
import classes from "../utils/classes";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// import { styled } from "@mui/material/styles";
import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
  Box,
  Button,
  CssBaseline,
  Switch,
  // FormControlLabel,
  // ThemeProvider,
  Stack,
  Grid,
  Badge,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import NextLink from "next/link";
import { ThemeProvider } from "@mui/system";
import { Store } from "../utils/store";
import Cookies from "js-cookie";
import NavBar from "./navbar/NavBar";
const Layout = ({ title, children, description }) => {
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart } = state;
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
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });

  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
    //   localStorage.setItem("darkMode", newDarkMode ? "ON" : "OFF");
  };

  return (
    <div>
      <Head>
        <title>
          {title
            ? `${title}- American Drugs`
            : "American Affordable Drugs Pharmacy"}
        </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          <NavBar></NavBar>
          {/* <AppBar position="static" sx={classes.appbar}>
            <Toolbar>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                  <Grid item xs="auto">
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
                    </NextLink>{" "}
                  </Grid>
                  <Grid item xs={6}>
                    <Box>app tabs</Box>
                  </Grid>
                  <Grid item xs>
                    <Stack direction="row" spacing={2}>
                      <NextLink href="/login" passHref>
                        <Link underline="none">
                          <Button color="inherit">Login</Button>
                        </Link>
                      </NextLink>
                      <NextLink href="cart" passHref>
                        <Link underline="none">
                          <Typography component="span">
                            {cart.cartItems.length > 0 ? (
                              <Badge
                                color="secondary"
                                badgeContent={cart.cartItems.length}
                              >
                                <ShoppingCartIcon />
                              </Badge>
                            ) : (
                              "Cart"
                            )}
                          </Typography>
                        </Link>
                      </NextLink>
                      <Switch
                        checked={darkMode}
                        onChange={darkModeChangeHandler}
                      ></Switch>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Toolbar>
          </AppBar> */}
        </Box>
        <Grid md={12}>{children}</Grid>
        {/* <Container sx={classes.main}>{children}</Container> */}
        <footer className={classes.footer}>
          <Typography align="center">
            All rights reserved. Next Amazona.
          </Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
};

export default Layout;

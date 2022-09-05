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
  Tabs,
  Tab,
  Box,
  Paper,
  Grid,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NextLink from "next/link";
const navItems = ["cart", "login"];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Layout = ({ children }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Head>
        <title>web site name</title>
      </Head>
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
                  WEB Site Name
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
                <Button color="inherit" sx={{ marginLeft: 10 }}>
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
    </div>
  );
};

export default Layout;

import React, { Children } from "react";
import Head from "next/head";
import classes from "../utils/classes";

import { AppBar, Container, Toolbar, Typography } from "@mui/material";
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>web site name</title>
      </Head>
      <AppBar position="fixed" sx={classes.appbar}>
        <Toolbar>
          <Typography>WEB Site Name</Typography>
        </Toolbar>
      </AppBar>
      <Container sx>{children}</Container>
      <footer>All rights reserved</footer>
    </div>
  );
};

export default Layout;

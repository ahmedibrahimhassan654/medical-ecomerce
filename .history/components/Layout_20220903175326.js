import React, { Children } from "react";
import Head from "next/head";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
const Layout = () => {
  return (
    <div>
      <Head>
        <title>web site name</title>
      </Head>
      <AppBar position="fixed">
        <Toolbar>
          <Typography>WEB Site NAmne</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        {Children}
      </Container>
    </div>
  );
};

export default Layout;

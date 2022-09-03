import React, { Children } from "react";
import Head from "next/head";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
const Layout = ({ children }) => {
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
      <Container>{children}</Container>
      <footer>
        
      </footer>
    </div>
  );
};

export default Layout;

import { Box, Grid, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";

const Blogs = () => {
  return (
    <>
      {/* <Head>
        <title>Blogs American Affordable Drugs Pharmacy </title>
        <meta name="description"></meta> //i will send blogs body in the meta tag 
      </Head> */}
      <Layout title={"Blogs American Affordable Drugs Pharmacy "}>
        <Box sx={{ marginBottom: 5, marginTop: 20 }}>
          <Typography
            variant="h3"
            color="secondary"
            sx={{ marginTop: 5, marginBottom: 3 }}
          >
            Blogs
          </Typography>
          <Grid container spacing={3}></Grid>
        </Box>
      </Layout>
    </>
  );
};

export default Blogs;

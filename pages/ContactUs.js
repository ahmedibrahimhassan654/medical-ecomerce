import { Box, Grid, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";

const ContactUs = () => {
  return (
    <>
      {/* <Head>
        <title>American Affordable Drugs Pharmacy </title>
        <meta name="description"></meta>
      </Head> */}
      <Layout title={"Contact Us American Affordable Drugs Pharmacy "}>
        <Box sx={{ marginBottom: 5, marginTop: 20 }}>
          <Typography
            variant="h3"
            color="secondary"
            sx={{ marginTop: 5, marginBottom: 3 }}
          >
            Contact Us
          </Typography>
          <Grid container spacing={3}></Grid>
        </Box>
      </Layout>
    </>
  );
};

export default ContactUs;

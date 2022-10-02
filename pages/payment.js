import { Container } from "@mui/material";
import React from "react";
import Layout from "../components/Layout";

const payment = () => {
  return (
    <Layout title={"payment"}>
      <Container
        sx={{
          marginTop: 5,
        }}
      >
        payment page
      </Container>
    </Layout>
  );
};

export default payment;

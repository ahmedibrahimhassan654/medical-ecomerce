
import { Container } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import Layout from "../components/Layout";

const payment = () => {
//   useEffect(() => {
//     if(!shippingAddress.address){
//         router.push("/shipping");
//     }else{
//         setPayment
//     }

//   }, []);
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

import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/store";

const Shipping = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  const { redirect } = router.query;
  if (!userInfo) {
    router.push("/login?redirect=/shipping");
  }

  return (
    <>
      <Layout title="shiping ">
        <Typography>shiping page</Typography>
      </Layout>
    </>
  );
};

export default Shipping;

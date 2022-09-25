import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Store } from "../utils/store";

const Shipping = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  const { redirect } = router.query;
  if (!userInfo) {
    router.push("/login?redirect=/shipping");
  }

  return <div>Shipping</div>;
};

export default Shipping;

import { useRouter } from "next/router";
import React from "react";

const Shipping = () => {
  const router = useRouter();
  router.push("/login");
  return <div>Shipping</div>;
};

export default Shipping;

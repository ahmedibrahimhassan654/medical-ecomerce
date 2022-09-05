// import Head from 'next/head'
import { Grid } from "@mui/material";
import Layout from "../components/Layout";

import ProductCard from "../components/product/ProductCard";

import data from "../utils/data";

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>products</h1>
        <Grid container spacing={4}>
          {data.products.map((product) => (
            <ProductCard product={product} />
          ))}
        </Grid>
      </div>
    </Layout>
  );
}

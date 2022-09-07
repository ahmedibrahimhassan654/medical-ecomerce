// import Head from 'next/head'

import { Box, Grid, Typography } from "@mui/material";
import Layout from "../components/Layout";
import db from "../utils/db";
import ProductCard from "../components/product/ProductCard";

import data from "../utils/data";
import Product from "../models/Product";

export default function Home(props) {
  const { products } = props;
  return (
    <Layout>
      <Box sx={{ marginBottom: 5 }}>
        <Typography
          variant="h3"
          color="secondary"
          sx={{ marginTop: 5, marginBottom: 3 }}
        >
          products
        </Typography>
        <Grid container spacing={3}>
          {/* {products.map((product) => (
            <ProductCard product={product} key={product.name} />
          ))} */}
          {products.map((product) => (
            <ProductCard product={product} key={product.slug} />
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();

  await db.disconnect();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      // products: data,
    },
  };
}

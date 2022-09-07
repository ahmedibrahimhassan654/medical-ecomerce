// import Head from 'next/head'

import { Box, Grid, Typography } from "@mui/material";
import Layout from "../components/Layout";
import db from "../utils/db";
import ProductCard from "../components/product/ProductCard";

import data from "../utils/data";
import Product from "../models/Product";

export default function Home() {
  // const { products } = props;
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
          {data.products.map((product) => (
            <ProductCard product={product} key={product.name} />
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).populate("size").lean();
  console.log(products);
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
      // products: data,
    },
  };
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:3000/api/products`);
//   const data = await res.json();

//   // data.map((prod) => {
//   //   console.log("product size", prod.size);
//   // });

//   // // Pass data to the page via props
//   return { props: { data } };
// }

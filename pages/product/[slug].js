import { useRouter } from "next/router";
import React from "react";
import data from "../../utils/data";
import Layout from "../../components/Layout";
import NextLink from "next/link";
import Image from "next/image";
import {
  Link,
  Typography,
  Grid,
  List,
  ListItem,
  Card,
  Button,
  TextField,
  CircularProgress,
  Box,
  Rating,
} from "@mui/material";
const ProductScreen = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return (
      <>
        <h1>Product Not Found</h1>
      </>
    );
  }
  return (
    <Layout title={product.name} description={product.description}>
      <div>
        <NextLink href="/" passHref>
          <Link underline="none">
            <Typography
              variant="h5"
              color="inherit"
              component="div"
              sx={{ marginTop: 5, marginBottom: 5 }}
            >
              back to home page
            </Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Typography component="h1" variant="h3">
                  {product.name}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>Category: {product.category}</Typography>
              </ListItem>
              <ListItem>
                <Typography>Brand: {product.brand}</Typography>
              </ListItem>
              <ListItem>
                <Rating value={product.rating} readOnly></Rating>
                <Link href="#reviews">
                  <Typography>({product.numReviews} reviews)</Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Typography> Description: {product.description}</Typography>
              </ListItem>
            </List>
          </Card>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>${product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.countInStock > 0 ? "In stock" : "Unavailable"}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  //   onClick={addToCartHandler}
                >
                  Add to cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ProductScreen;

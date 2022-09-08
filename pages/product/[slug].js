import { useRouter } from "next/router";
import React, { useState } from "react";
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
  Rating,
  Box,
  IconButton,
} from "@mui/material";
import Product from "../../models/Product";
import db from "../../utils/db";
const ProductScreen = (props) => {
  const [price, setPrice] = useState("please chose pakage size");
  const [stock, setStock] = useState(0);

  const { product } = props;

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
            <List>
              <ListItem>
                <Box
                  sx={{
                    width: "100%",

                    // paddingLeft: 3,
                    alignItems: "center",
                    transition: "0.3s",
                    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
                    "&:hover": {
                      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
                    },
                  }}
                >
                  <Box>
                    {product.size.map((size) => (
                      <Grid
                        container
                        xs={12}
                        sx={{
                          marginBottom: 2,
                          alignItems: "center",
                          transition: "0.6s",
                          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
                          "&:hover": {
                            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
                          },
                        }}
                      >
                        <Button
                          key={size._id}
                          fullWidth
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            setPrice(size.price);
                            setStock(size.numberonStock);
                          }}
                        >
                          <Grid item xs={12}>
                            <Typography>size</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography>
                              {size.count}
                              {size.unit}
                            </Typography>
                          </Grid>
                        </Button>
                      </Grid>
                    ))}
                  </Box>
                </Box>
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
                    <Typography>${price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>stock</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>{`${stock} In stock`}</Typography>
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
                      {stock > 0 ? "In stock" : "Unavailable"}
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

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  await db.connect();
  const product = await Product.findOne({ slug }).lean();

  await db.disconnect();
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      // products: data,
    },
  };
}

export default ProductScreen;

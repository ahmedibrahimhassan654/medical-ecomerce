import * as React from "react";
import NextLink from "next/link";
// //import { Box, Card, Typography, AspectRatio } from "@mui/joy";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import {
  Grid,
  Rating,
  // Button,
  IconButton,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <>
      <Grid
        item
        md={3}
        xs={12}
        key={product.key}
        sx={{
          marginBottom: 5,
        }}
      >
        {/* <NextLink href={`/products`} passHref>
          <Typography>Back To All Products pages</Typography>
        </NextLink> */}
        <Card
          sx={{
            maxWidth: 900,

            margin: "auto",
            transition: "0.3s",
            boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
            "&:hover": {
              boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
            },
          }}
        >
          <NextLink href={`/product/${product.slug}`} passHref>
            <CardActionArea>
              <CardMedia
                component="img"
                image={product.image}
                title={product.name}
                sx={{ paddingTop: "5%", maxHeight: 100, minHeight: 250 }}
              />
              <CardContent
                sx={{ paddingTop: "5%", maxHeight: 100, minHeight: 150 }}
              >
                <Typography>{product.name}</Typography>
                <Rating value={product.rating} readOnly></Rating>
                <Typography>{product.description}</Typography>
              </CardContent>
            </CardActionArea>
          </NextLink>
          <CardActions>
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
              <IconButton
                color="primary"
                aria-label="add to shopping cart"
                sx={{ marginLeft: 3 }}
              >
                <AddShoppingCartIcon />
              </IconButton>
            </Box>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default ProductCard;

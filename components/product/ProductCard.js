import * as React from "react";
import NextLink from "next/link";
//import { Box, Card, Typography, AspectRatio } from "@mui/joy";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import {
  Grid,
  Rating,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Grid item md={4} xs={12} key={product.name}>
      <NextLink href={`/product/${product.slug}`} passHref>
        <Card
          sx={{
            border: "AppWorkspace",
          }}
        >
          <NextLink href={`/product/${product.slug}`} passHref>
            <CardActionArea>
              <CardMedia
                component="img"
                image={product.image}
                title={product.name}
              ></CardMedia>
              <CardContent>
                <Typography>{product.name}</Typography>
                <Rating value={product.rating} readOnly></Rating>
                <Typography>{product.description}</Typography>
                <Typography>${product.price}</Typography>
              </CardContent>
            </CardActionArea>
          </NextLink>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => addToCartHandler(product)}
            >
              Add to cart
            </Button>
          </CardActions>
        </Card>
      </NextLink>
    </Grid>
  );
};

export default ProductCard;

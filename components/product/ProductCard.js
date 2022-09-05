import * as React from "react";
import NextLink from "next/link";
import { Box, Card, Typography, AspectRatio } from "@mui/joy";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { Grid, Rating, Button, CardActions } from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Grid item md={4} xs={12} key={product.name}>
      <NextLink href={`/product/${product.slug}`} passHref>
        <Card
          variant="outlined"
          sx={{
            minWidth: "320px",
            borderStyle: "solid",
            borderColor: "#203040",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Typography
              level="h2"
              fontSize="lg"
              fontWeight="lg"
              sx={{ alignSelf: "flex-start", color: "black" }}
            >
              {product.name}
            </Typography>
            <Typography
              sx={{ alignSelf: "flex-start", color: "blue" }}
              level="body2"
            >
              {product.category}
            </Typography>
            <Rating name="read-only" value={product.rating} readOnly />
          </Box>

          <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
            <img src={product.image} alt="" />
          </AspectRatio>
          <Box sx={{ display: "flex", gap: 1 }}>
            <div>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  level="body2"
                  sx={{
                    alignSelf: "flex-start",
                  }}
                >
                  {product.description}
                </Typography>
              </Box>

              <Typography
                variant="h1"
                component="h2"
                sx={{ alignSelf: "flex-start", color: "green" }}
              >
                Total price:
              </Typography>
              <Typography fontSize="lg" fontWeight="lg">
                ${product.price}
              </Typography>
            </div>
          </Box>

          <CardActions>
            <Button
              variant="contained"
              size="small"
              color="primary"
              startIcon={<AddShoppingCartIcon />}
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

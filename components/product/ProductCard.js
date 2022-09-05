import * as React from "react";

import { Box, Card, IconButton, Typography, AspectRatio } from "@mui/joy";
import { styled } from "@mui/material/styles";
import { InfoOutlined, FavoriteBorder } from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { Grid, Rating, Button, CardActions, Stack } from "@mui/material";
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const ProductCard = ({ product }) => {
  return (
    <Grid item md={4} key={product.name}>
      <Card
        variant="outlined"
        sx={{ minWidth: "320px", borderStyle: "solid", borderColor: "#203040" }}
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
        {/* <IconButton
          variant="outlined"
          size="sm"
          sx={{
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
            color: "green",
          }}
        >
          <FavoriteBorder />
        </IconButton> */}

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
    </Grid>
  );
};

export default ProductCard;

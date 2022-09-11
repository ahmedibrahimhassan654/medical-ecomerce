import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ImageCarousel from "./imagecarose";
const HeaderComp = () => {
  return (
    <>
      <Grid md={12}>
        <Grid item md={12}>
          <ImageCarousel />
        </Grid>
      </Grid>
    </>
  );
};

export default HeaderComp;

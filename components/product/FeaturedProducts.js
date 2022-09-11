import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../styles/colors";
import "@fontsource/montez";
import "@fontsource/roboto";

const FeaturedProducts = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: Colors.secondary,
          mt: -30,
          mr: 10,
          ml: 10,
          minHeight: "100vh",
          boxShadow: "2px 20px 20px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Grid sx={{ mb: 4 }} md={12} container space={2}>
          <Grid md={12} container>
            <Grid md={6} item>
              <Box
                component="img"
                src="/images/hed1.jpg"
                sx={{
                  ml: 5,
                  width: "70%",
                  mt: "-10vh",
                  boxShadow: "2px 20px 20px 10px rgba(0, 0, 0, 0.2)",
                }}
              />{" "}
            </Grid>

            <Grid md={6} item>
              <Box
                sx={{
                  ml: 5,
                  width: "90%",
                  mt: 5,
                  boxShadow: "2px 20px 20px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                {/* <Typography
                  sx={{ fontSize: "2em", fontFamily: '"Montez", "cursive"' }}
                  variant="h3"
                  color={Colors.primary}
                  component="h3"
                >
                  Hearder 1
                </Typography> */}
                <Typography
                  sx={{
                    fontSize: "2em",
                    fontFamily: '"roboto", "cursive"',
                    p: 5,
                  }}
                  variant="h5"
                  color={Colors.primary}
                  component="h5"
                >
                  ipsum dolor sit amet consectetur adipisicing elit. Maxime
                  mollitia, molestiae quas vel sint commodi repudiandae
                </Typography>
              </Box>
            </Grid>
          </Grid>
          {/* <Grid md={12} item>
            <Box component="img" src="/images/prod1.jpg" />
          </Grid> */}
        </Grid>
      </Box>
    </>
  );
};

export default FeaturedProducts;

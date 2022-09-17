import { Box, Container, Grid, Link } from "@mui/material";
import React from "react";
import NextLink from "next/link";
import { Colors } from "../../styles/colors";
const Footer = () => {
  return (
    <>
      <footer>
        <Box
          //   bgcolor={Colors.secondary}
          color="secondary"
          px={{ xs: 3, sm: 10 }}
          py={{ xs: 5, sm: 10 }}
          sx={{
            backgroundColor: "#208080",
            mt: 30,
            minHeight: "30vh",
            boxShadow: "40px 20px 40px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1} color="#f0c000">
                  Help
                </Box>
                <Box>
                  <NextLink href="/ContactUs" passHref>
                    <Link underline="none">Contact Us</Link>
                  </NextLink>
                </Box>
                <Box>
                  <NextLink href="/ContactUs" passHref>
                    <Link underline="none">our privacy polycies</Link>
                  </NextLink>
                </Box>
              </Grid>

              {/* links */}
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1} color="#f0c000">
                  Acount
                </Box>
                <Box color={"white"}>
                  <NextLink href="/ContactUs" passHref>
                    <Link underline="none">Register</Link>
                  </NextLink>
                </Box>
                <Box>
                  <NextLink href="/ContactUs" passHref>
                    <Link underline="none">Login</Link>
                  </NextLink>
                </Box>
              </Grid>
              {/* Doctors */}
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1} color="#f0c000">
                  Doctors
                </Box>
                <Box>
                  <NextLink href="/ContactUs" passHref>
                    <Link underline="none">Ask For Prescription</Link>
                  </NextLink>
                </Box>
                <Box>
                  <NextLink href="/ContactUs" passHref>
                    <Link underline="none">Profile</Link>
                  </NextLink>
                </Box>
              </Grid>
            </Grid>
            <Box
              color="#f0c000"
              textAlign="center"
              pt={{ xs: 5, sm: 10 }}
              pb={{ xs: 5, sm: 0 }}
            >
              American Affordable Drugs Pharmacy &reg;{" "}
              {new Date().getFullYear()}
            </Box>
          </Container>
        </Box>
      </footer>
    </>
  );
};

export default Footer;

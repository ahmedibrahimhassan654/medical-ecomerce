import VaccinesIcon from "@mui/icons-material/Vaccines";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import NextLink from "next/link";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Link,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";

import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import AppbarMobile from "./AppbarMobile";
import AppBarDesktop from "./AppBarDesktop";
import Image from "next/image";
const NavBar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    // <>
    //   {matches ? (
    //     <AppbarMobile matches={matches} />
    //   ) : (
    //     <AppBarDesktop matches={matches} />
    //   )}
    // </>

    <AppBar elevation={2} color="secondary">
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            padding: "10px 0px",
          }}
          component="div"
        >
          {/* logo Box*/}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            component="div"
          >
            <IconButton>
              <VaccinesIcon
                color="primary"
                sx={{
                  marginRight: "20px",
                  cursor: "pointer",
                  fontWeight: 500,
                  fontSize: "10 rem",
                  //   color: "#33FF57",
                  //   backgroundColor: "white",
                  //   color: "Highlight",
                }}
              />
            </IconButton>
            {/* <Image
              src={"/images/logo.jpeg"}
              width={60}
              height={50}
              alt="amirican affordable drugs pfarmacy"
            /> */}
          </Box>
          {/* App Links  */}
          <Box
            sx={{
              display: "flex",
              marginTop: 1.5,
            }}
          >
            <NextLink href="/" passHref>
              <Link underline="none">
                <Typography
                  color="primary"
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    fontWeight: 400,
                  }}
                >
                  <HomeIcon
                    sx={{
                      marginRight: "5px",
                      cursor: "pointer",
                      fontWeight: 400,
                      marginTop: "1px",
                    }}
                  />{" "}
                  Home
                </Typography>
              </Link>
            </NextLink>

            {/* porducts Link */}
            <NextLink href="/products" passHref>
              <Link underline="none">
                <Typography
                  color="primary"
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    fontWeight: 400,
                  }}
                >
                  <ContactsIcon
                    sx={{
                      marginRight: "5px",
                      cursor: "pointer",
                      fontWeight: 400,
                      marginTop: "1px",
                    }}
                  />{" "}
                  Products
                </Typography>
              </Link>
            </NextLink>

            <NextLink href="/Blogs" passHref>
              <Link underline="none">
                <Typography
                  color="primary"
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    fontWeight: 400,
                  }}
                >
                  <ViewCarouselIcon
                    sx={{
                      marginRight: "5px",
                      cursor: "pointer",
                      fontWeight: 400,
                      marginTop: "1px",
                    }}
                  />{" "}
                  Blogs
                </Typography>
              </Link>
            </NextLink>
            <NextLink href="/ContactUs" passHref>
              <Link underline="none">
                <Typography
                  color="primary"
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    fontWeight: 400,
                  }}
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={() => {}}
                >
                  <ContactPhoneIcon
                    sx={{
                      marginRight: "5px",
                      cursor: "pointer",
                      fontWeight: 400,
                      marginTop: "1px",
                    }}
                  />{" "}
                  Contact Us
                </Typography>
                {/* <Menu id="basic-menu" anchorEl open="false" onClose={() => {}}>
                  <MenuItem>Men1 </MenuItem>
                  <MenuItem>Men2 </MenuItem>
                  <MenuItem>Men3 </MenuItem>
                </Menu> */}
              </Link>
            </NextLink>
          </Box>
          {/* user info  */}
          <Box
            sx={{
              display: "flex",
              marginTop: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton color="primary" aria-label="add to shopping cart">
              {/*  */}
              <Badge badgeContent={4} color="primary">
                <AddShoppingCartIcon color="action " />
              </Badge>
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
              <HowToRegIcon />
              <Typography
                color="primary"
                sx={{
                  marginRight: "20px",
                  cursor: "pointer",
                  fontWeight: 400,
                }}
              >
                Register
              </Typography>
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

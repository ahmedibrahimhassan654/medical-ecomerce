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

import React from "react";

const NavBar = () => {
  return (
    <AppBar elevation={4} color="secondary">
      <Toolbar>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* logo Box*/}
          <Box>
            <IconButton>
              <VaccinesIcon color="primary" />
            </IconButton>
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
                  <HomeIcon /> Home
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
                  <ContactsIcon /> Products
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
                  <ViewCarouselIcon /> Blogs
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
                  <ContactPhoneIcon /> Contact Us
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

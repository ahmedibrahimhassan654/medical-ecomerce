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
  Drawer,
  List,
  ListItem,
  Divider,
  ListItemText,
  InputBase,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { DrawerComp } from "./DrawerComp";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import { useSnackbar } from "notistack";
import axios from "axios";
import classes from "../../utils/classes";
import { Router, Search } from "@mui/icons-material";
import { useRouter } from "next/router";
const NavBar = () => {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [sidbarVisible, setSidebarVisible] = useState(false);
  //const { enqueueSnackbar } = useSnackbar();
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`/api/products/categories`);
      console.log("categories=", data);
      setCategories(data);
    } catch (err) {
      console.log(err);
      // enqueueSnackbar(getError(err), { variant: "error" });
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  const sidebarOpenHandler = () => {
    setSidebarVisible(true);
  };
  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };
  const [query, setQuery] = useState("");
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <>
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
                  onClick={sidebarOpenHandler}
                />
              </IconButton>

              <Box
                component="img"
                sx={{
                  height: 50,
                  display: "block",
                  alignItems: "center",
                  maxWidth: "100%",
                  overflow: "hidden",
                  width: 50,
                }}
                src={"/images/logo_size.jpg"}
                alt="American Affordable Drugs Pharmacy "
              />
            </Box>
            <Drawer
              anchor="left"
              open={sidbarVisible}
              onClose={sidebarCloseHandler}
            >
              <List>
                <ListItem>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography color="secondary">
                      Shopping by category
                    </Typography>
                    <IconButton
                      aria-label="close"
                      onClick={sidebarCloseHandler}
                    >
                      <LocalPharmacyIcon color="primary" />
                    </IconButton>
                  </Box>
                </ListItem>
                <Divider light />
                {categories.map((category) => (
                  <NextLink
                    key={category}
                    href={`/search?category=${category}`}
                    passHref
                  >
                    <ListItem
                      button
                      component="a"
                      onClick={sidebarCloseHandler}
                    >
                      <ListItemText
                        sx={{
                          marginRight: "5px",
                          cursor: "pointer",
                          fontWeight: 400,
                          marginTop: "1px",
                        }}
                        primary={category}
                      ></ListItemText>
                    </ListItem>
                  </NextLink>
                ))}
              </List>
            </Drawer>
            {/* App Links  */}

            {matches ? (
              <>
                <DrawerComp
                  openDrawer={openDrawer}
                  setOpenDrawer={setOpenDrawer}
                />
              </>
            ) : (
              <>
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
                <Box sx={isDesktop ? classes.visible : classes.hidden}>
                  <form onSubmit={submitHandler}>
                    <Box sx={classes.searchForm}>
                      <InputBase
                        name="query"
                        sx={classes.searchInput}
                        placeholder="Search products"
                        onChange={queryChangeHandler}
                      />
                      <IconButton
                        type="submit"
                        sx={classes.searchButton}
                        aria-label="search"
                      >
                        <Search />
                      </IconButton>
                    </Box>
                  </form>
                </Box>
              </>
            )}
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
              {matches ? (
                <>
                  <IconButton color="primary" aria-label="add to shopping cart">
                    <AddToPhotosIcon onClick={() => setOpenDrawer(true)} />
                  </IconButton>
                </>
              ) : null}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;

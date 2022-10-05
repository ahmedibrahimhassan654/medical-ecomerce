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
  ListItemButton,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";

import React, { useContext, useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { DrawerComp } from "./DrawerComp";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import { useSnackbar } from "notistack";
import axios from "axios";
import classes from "../../utils/classes";
import { CardTravel, Search } from "@mui/icons-material";
import { useRouter } from "next/router";
import { Store } from "../../utils/store";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
const NavBar = () => {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [sidbarVisible, setSidebarVisible] = useState(false);
  const { state, dispatch } = useContext(Store);

  const { cart, userInfo } = state;
  //const { enqueueSnackbar } = useSnackbar();
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`/api/products/categories`);
      // console.log("categories=", data);
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logOutHandler = () => {
    setAnchorEl(null);
    dispatch({ type: "USER_LOGOUT" });
    Cookies.remove("userInfo");
    Cookies.remove("cartItems");
    toast.success("Loged Out  successfuly");
    router.push("/");
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <>
      <AppBar
        elevation={2}
        color="secondary"
        position="static"
        sx={classes.appbar}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
              // padding: "10px 0px",
            }}
            // component="div"
          >
            {/* logo Box*/}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
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
                    <ListItemButton
                      button
                      component="a"
                      onClick={sidebarCloseHandler}
                    >
                      <ListItemText primary={category}>{category}</ListItemText>
                    </ListItemButton>
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
                    <Link underline="none" sx={{}}>
                      <Box
                        sx={{
                          display: "flex",
                          marginTop: 1.5,
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",

                          height: "20px",
                        }}
                      >
                        <HomeIcon
                          color="primary"
                          sx={{
                            // marginRight: "5px",
                            cursor: "pointer",
                            fontWeight: 400,
                            //marginTop: "1px",
                          }}
                        />
                        <Typography
                          color="primary"
                          sx={{
                            marginRight: "20px",
                            cursor: "pointer",
                            fontWeight: 400,
                            marginTop: "2px",

                            // backgroundColor: "red",
                          }}
                        >
                          Home
                        </Typography>
                      </Box>
                    </Link>
                  </NextLink>
                  {/* porducts Link */}
                  <NextLink href="/search" passHref>
                    <Link underline="none">
                      <Box
                        sx={{
                          display: "flex",
                          marginTop: 1.5,
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",

                          height: "20px",
                        }}
                      >
                        <ContactsIcon
                          color="primary"
                          sx={{
                            cursor: "pointer",
                            fontWeight: 400,
                          }}
                        />{" "}
                        <Typography
                          //onClick={() => router.push("/search")}
                          color="primary"
                          sx={{
                            marginRight: "20px",
                            cursor: "pointer",
                            fontWeight: 400,
                            marginTop: "2px",
                          }}
                        >
                          Products
                        </Typography>
                      </Box>
                    </Link>
                  </NextLink>
                  <NextLink href="/Blogs" passHref>
                    <Link underline="none">
                      <Box
                        sx={{
                          display: "flex",
                          marginTop: 1.5,
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",

                          height: "20px",
                        }}
                      >
                        <ViewCarouselIcon
                          color="primary"
                          sx={{
                            marginRight: "5px",
                            cursor: "pointer",
                            fontWeight: 400,
                            marginTop: "1px",
                          }}
                        />
                        <Typography
                          color="primary"
                          sx={{
                            marginRight: "20px",
                            cursor: "pointer",
                            fontWeight: 400,
                          }}
                        >
                          Blogs
                        </Typography>
                      </Box>
                    </Link>
                  </NextLink>
                  <NextLink href="/ContactUs" passHref>
                    <Link underline="none">
                      <Box
                        sx={{
                          display: "flex",
                          marginTop: 1.5,
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",

                          height: "20px",
                        }}
                      >
                        <ContactPhoneIcon
                          color="primary"
                          sx={{
                            marginRight: "5px",
                            cursor: "pointer",
                            fontWeight: 400,
                            marginTop: "1px",
                          }}
                        />
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
                          Contact Us
                        </Typography>
                      </Box>
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
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <NextLink href="/cart" passHref>
                {cart.cartItems.length > 0 ? (
                  <IconButton color="primary" aria-label="add to shopping cart">
                    {/*  */}
                    <Badge badgeContent={cart.cartItems.length} color="primary">
                      <AddShoppingCartIcon color="primary" />
                    </Badge>
                  </IconButton>
                ) : (
                  <IconButton color="primary" aria-label="add to shopping cart">
                    {/*  */}
                    <Badge color="primary">
                      <AddShoppingCartIcon color="action " />
                    </Badge>
                  </IconButton>
                )}
              </NextLink>

              {userInfo ? (
                <>
                  <Button
                    sx={{
                      textTransform: "initial",
                    }}
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : "aria-labelledby"}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : "aria-labelledby"}
                    onClick={handleClick}
                  >
                    {userInfo.name}
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={logOutHandler}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  <NextLink href="/login" passHref>
                    <IconButton color="primary" aria-label="Login">
                      <HowToRegIcon color="primary" />
                      <Typography
                        color="primary"
                        sx={{
                          marginRight: "20px",
                          cursor: "pointer",
                          fontWeight: 400,
                        }}
                      >
                        Login
                      </Typography>
                    </IconButton>
                  </NextLink>
                </>
              )}

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

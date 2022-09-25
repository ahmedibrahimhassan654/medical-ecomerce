import React, { useContext } from "react";

import {
  Box,
  Button,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import CancelIcon from "@mui/icons-material/Cancel";
import NextLink from "next/link";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { Store } from "../../utils/store";
export const DrawerComp = ({ openDrawer, setOpenDrawer }) => {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  return (
    <Drawer anchor={"right"} open={openDrawer}>
      <Box sx={{ width: "150px", m: "15px" }}>
        <Box>
          <CancelIcon onClick={() => setOpenDrawer(false)} />
        </Box>
        <List>
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
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
                      />
                      Home
                    </Typography>
                  </Link>
                </NextLink>
              </ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
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
              </ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                {" "}
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
              </ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                {" "}
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
              </ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem>
            {userInfo ? (
              <>
                <Button
                  sx={{
                    cursor: "pointer",
                    fontWeight: 400,
                    marginTop: 30,
                    textTransform: "initial",
                  }}
                >
                  {userInfo.name}
                </Button>
              </>
            ) : (
              <>
                <NextLink href="/login" passHref>
                  <IconButton
                    color="primary"
                    aria-label="login"
                    sx={{
                      cursor: "pointer",
                      fontWeight: 400,
                      marginTop: 30,
                    }}
                  >
                    <HowToRegIcon color="primary" />
                    <Typography
                      color="primary"
                      sx={{
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
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

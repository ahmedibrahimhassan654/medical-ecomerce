import React from "react";

import {
  Box,
  Drawer,
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
export const DrawerComp = ({ openDrawer, setOpenDrawer }) => {
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
                      />{" "}
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
        </List>
      </Box>
    </Drawer>
  );
};

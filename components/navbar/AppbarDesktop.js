import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import {
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/theme/appBar";
import { ListItemText } from "@mui/material";
// const AppbarContainer = styled(Box)(() => ({
//   display: "flex",
//   marginTop: 4,
//   justifyContent: "center",
//   alignItems: "center",
//   padding: "2px 8px",
// }));

const AppBarDesktop = () => {
  return (
    <>
      <AppbarContainer>
        <AppbarHeader variant="h4">My Bags</AppbarHeader>
        <MyList type="row">
          <ListItemText primary="Home" />
          <ListItemText primary="Categories" />
          <ListItemText primary="Products" />
          <ListItemText primary="About us" />
          <ListItemText primary="Contact us" />
        </MyList>
      </AppbarContainer>
    </>
  );
};

export default AppBarDesktop;

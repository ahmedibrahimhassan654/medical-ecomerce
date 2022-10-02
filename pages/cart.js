import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/store";
import NextLink from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import axios from "axios";
import { useRouter } from "next/router";

const CartScreen = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);

  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (size, quantity, item) => {

    // // const { data } = await axios.get(`/api/products/${item._id}`);
    if (size.numberonStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    // if (item.size._id === size._id) {
    //   dispatch({
    //     type: "UPDATE_QUANTITY SIZE",
    //     payload: { ...item, quantity },
    //   });
    // }
    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };
  const removeItemHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item.size });
  };
  const checkoutHandler = () => {
    router.push("shipping");
  };
  return (
    <Layout title="shoping cart" height="100%">
      <Container>
        <Typography
          variant="h5"
          color="secondary"
          component="div"
          sx={{ marginTop: 10, marginBottom: 5 }}
        >
          Shopping Cart
        </Typography>

        {cartItems.length === 0 ? (
          <Box sx={{ display: "flex", marginTop: 5 }}>
            <NextLink href="/search" passHref>
              <Link>
                <Typography
                  variant="h5"
                  color="secondary"
                  component="div"
                  sx={{ marginTop: 10, marginBottom: 5 }}
                >
                  Cart Is Empty
                </Typography>
              </Link>
            </NextLink>
          </Box>
        ) : (
          <Grid container spacing={1} ml="10px" pl="10px" mr="10px" pr="10px">
            <Grid item md={9}>
              <NextLink href="/search" passHref>
                <Link>
                  <Typography variant="h5" color="secondary" component="div">
                    Continiou Shoping
                  </Typography>
                </Link>
              </NextLink>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Image</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Size</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="center">
                        Required Prescription
                      </TableCell>
                      <TableCell align="right">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cartItems.map((item) => (
                      <>
                        <TableRow key={item._id}>
                          {/* image cell */}
                          <TableCell>
                            <NextLink href={`/product/${item.slug}`} passHref>
                              <Link>
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  width={50}
                                  height={50}
                                ></Image>
                              </Link>
                            </NextLink>
                          </TableCell>
                          {/* Name cell */}
                          <TableCell>
                            <NextLink href={`/product/${item.slug}`} passHref>
                              <Link>
                                <Typography color="secondary">
                                  {item.name}
                                </Typography>
                              </Link>
                            </NextLink>
                          </TableCell>
                          {/* Size  */}
                          {item.size ? (
                            <>
                              <TableCell>
                                <Typography>{`${item.size.count} ${item.size.unit}`}</Typography>
                              </TableCell>{" "}
                              {/* size quantity */}
                              <TableCell align="right">
                                <Select
                                  value={item.quantity}
                                  onChange={(e) =>
                                    updateCartHandler(
                                      item.size,
                                      e.target.value,
                                      item
                                    )
                                  }
                                >
                                  {[
                                    ...Array(item.size.numberonStock).keys(),
                                  ].map((x) => (
                                    <MenuItem key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </TableCell>
                              {/* size price */}
                              <TableCell align="right">
                                ${item.size.price}
                              </TableCell>
                            </>
                          ) : (
                            <>
                              <p>Not found</p>
                            </>
                          )}

                          <TableCell align="center">
                            {/* {JSON.stringify(item.requiredPrescription)} */}
                            {item.requiredPrescription &&
                            item.requiredPrescription === true ? (
                              <Typography>Required</Typography>
                            ) : (
                              <Typography>Not Required</Typography>
                            )}
                          </TableCell>
                          <TableCell align="right">
                            <Button
                              variant="contained"
                              color="secondary"
                              onClick={() => removeItemHandler(item)}
                            >
                              x
                            </Button>
                          </TableCell>
                        </TableRow>
                      </>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item md={3}>
              <Card>
                <List>
                  <ListItem>
                    <Typography variant="h2">
                      Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                      items) : $
                      {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Button
                      onClick={checkoutHandler}
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Check Out
                    </Button>
                  </ListItem>
                </List>
              </Card>
            </Grid>
          </Grid>
        )}
      </Container>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });

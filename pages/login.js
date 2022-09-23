import {
  Box,
  Button,
  FilledInput,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  OutlinedInput,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Layout from "../components/Layout";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import NextLink from "next/link";
const Login = () => {
  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Layout title={"login"}>
      <Container
        sx={{
          marginTop: 5,
        }}
      >
        <form>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              marginTop: 5,
            }}
            textAlign="center"
          >
            Login
          </Typography>
          <List>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email"
                inputProps={{ type: "email" }}
                sx={{
                  marginTop: 5,
                }}
              ></TextField>
            </ListItem>

            <ListItem>
              <FormControl
                variant="outlined"
                fullWidth
                sx={{
                  marginTop: 5,
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </ListItem>

            <ListItem>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  marginTop: 3,
                }}
              >
                Login
              </Button>
            </ListItem>
            <ListItem>
              <Typography>
                <div
                  dangerouslySetInnerHTML={{
                    __html: " Don't have an account ? &nbsp;",
                  }}
                />
                <NextLink href="/register" passHref>
                  <Link>Register</Link>
                </NextLink>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <div
                  dangerouslySetInnerHTML={{
                    __html: " Forget Your apssword ? &nbsp",
                  }}
                />
                <NextLink href="/forgetPassword" passHref>
                  <Link>Reset Password</Link>
                </NextLink>
              </Typography>
            </ListItem>
          </List>
        </form>
      </Container>
    </Layout>
  );
};

export default Login;

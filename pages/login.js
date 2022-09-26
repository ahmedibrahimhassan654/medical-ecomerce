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
import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import NextLink from "next/link";
import axios from "axios";
import { Store } from "../utils/store";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

import { Controller, useForm } from "react-hook-form";

const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const router = useRouter();
  const { redirect } = router.query;
  useEffect(() => {
    if (userInfo) {
      router.push("/search");
    }
  }, [userInfo]);

  const [values, setValues] = useState({
    showPassword: false,
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

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
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });

      toast.success("login success");
      dispatch({ type: "USER_LOGIN", payload: data });
      Cookies.set("userInfo", JSON.stringify(data));
      router.push(redirect || "/");
      setLoading(false);
    } catch (err) {
      // console.log(err);

      toast.error(err.response.data ? err.response.data.message : err.message);
      setLoading(false);
    }
  };
  return (
    <Layout title={"login"}>
      <Container
        sx={{
          marginTop: 5,
        }}
      >
        <form onSubmit={submitHandler}>
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
                onChange={(e) => setEmail(e.target.value)}
                // {...field}
              ></TextField>
              {/* <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="email"
                      label="Email"
                      inputProps={{ type: "email" }}
                      sx={{
                        marginTop: 5,
                      }}
                      //onChange={(e) => setEmail(e.target.value)}
                      {...field}
                    ></TextField>
                  </>
                )}
              ></Controller> */}
            </ListItem>

            <ListItem>
              {/* <TextField
                variant="outlined"
                fullWidth
                id="password"
                label="Password"
                inputProps={{ type: "password" }}
                onChange={(e) => setPassword(e.target.value)}
              ></TextField> */}
              <FormControl
                variant="outlined"
                fullWidth
                sx={{
                  marginTop: 5,
                }}
                onChange={(e) => setPassword(e.target.value)}
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
                disabled={!email || !password || loading}
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
                <NextLink
                  href={`/register?redirect=${redirect || "/"}`}
                  passHref
                >
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

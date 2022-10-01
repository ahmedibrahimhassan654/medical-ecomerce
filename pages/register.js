import {
  Button,
  List,
  ListItem,
  TextField,
  Typography,
  Link,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";

import NextLink from "next/link";
import axios from "axios";
import { Store } from "../utils/store";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { Controller, useForm } from "react-hook-form";
const Register = () => {
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
      router.push("/");
    }
  }, []);

  const [checked, setChecked] = useState(true);
  const [role, setRole] = useState("user");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    handleChange(event);
  }, [checked]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log("checked =", checked);
    if (checked) {
      setRole("doctor");
    } else {
      setRole("user");
    }
  };

  const submitHandler = async ({ name, email, password, confirmPassword }) => {
    setLoading(true);
    if (password !== confirmPassword) {
      // alert("passwords don't match");
      toast.error("passwords don't match");

      return;
    }

    try {
      const { data } = await axios.post("/api/users/register", {
        name,
        email,
        password,
        role,
      });

      dispatch({ type: "USER_LOGIN", payload: data });
      Cookies.set("userInfo", data);
      toast.success("register success");
      router.push(redirect || "/");
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.warning(
        err.response.data ? err.response.data.message : err.message
      );

      // alert(err.response.data ? err.response.data.message : err.message);
      setLoading(false);
    }
  };
  return (
    <Layout title={"register"}>
      <Container
        sx={{
          marginTop: 5,
        }}
      >
        <form onSubmit={handleSubmit(submitHandler)}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              marginTop: 5,
            }}
            textAlign="center"
          >
            Register
          </Typography>
          <List>
            <ListItem>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 2,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="name"
                    label="Name"
                    inputProps={{ type: "name" }}
                    error={Boolean(errors.name)}
                    helperText={
                      errors.name
                        ? errors.name.type === "minLength"
                          ? "Name length is more than 1"
                          : "Name is required"
                        : ""
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="email"
                    label="Email"
                    inputProps={{ type: "email" }}
                    error={Boolean(errors.email)}
                    helperText={
                      errors.email
                        ? errors.email.type === "pattern"
                          ? "Email is not valid"
                          : "Email is required"
                        : ""
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>

            <ListItem>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 6,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="password"
                    label="Password"
                    inputProps={{ type: "password" }}
                    error={Boolean(errors.password)}
                    helperText={
                      errors.password
                        ? errors.password.type === "minLength"
                          ? "Password length is more than 5"
                          : "Password is required"
                        : ""
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="confirmPassword"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 6,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="confirmPassword"
                    label="Confirm Password"
                    inputProps={{ type: "password" }}
                    error={Boolean(errors.confirmPassword)}
                    helperText={
                      errors.confirmPassword
                        ? errors.confirmPassword.type === "minLength"
                          ? "Confirm Password length is more than 5"
                          : "Confirm  Password is required"
                        : ""
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleChange} />}
                label="Are You Doctor? "
              />
              {/* {JSON.stringify(checked)}
              {JSON.stringify(role)} */}
              {checked ? "yes" : "No"}
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
                // disabled={!email || !password || !name || !confirmPassword}
              >
                Register
              </Button>
            </ListItem>
            <ListItem>
              <Typography>
                <div
                  dangerouslySetInnerHTML={{
                    __html: " you have an account ? &nbsp;",
                  }}
                />
                <NextLink href={`/login?redirect=${redirect || "/"}`} passHref>
                  <Link>Login</Link>
                </NextLink>
              </Typography>
            </ListItem>
          </List>
        </form>
      </Container>
    </Layout>
  );
};

export default Register;

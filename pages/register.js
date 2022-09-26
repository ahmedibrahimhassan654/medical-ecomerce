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
  FormControlLabel,
  Checkbox,
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

const Register = () => {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const router = useRouter();
  const { redirect } = router.query;
  useEffect(() => {
    if (userInfo) {
      router.push("/search");
    }
  }, []);

  const [values, setValues] = useState({
    showPassword: false,
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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

  const submitHandler = async (e) => {
    e.preventDefault();
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
        <form onSubmit={submitHandler}>
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
              <TextField
                variant="outlined"
                fullWidth
                id="name"
                label="Name"
                inputProps={{ type: "text" }}
                sx={{
                  marginTop: 5,
                }}
                onChange={(e) => setName(e.target.value)}
              ></TextField>
            </ListItem>
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
              ></TextField>
            </ListItem>

            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="password"
                label="Password"
                sx={{
                  marginTop: 5,
                }}
                inputProps={{ type: "password" }}
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                sx={{
                  marginTop: 5,
                }}
                fullWidth
                id="confirmPassword"
                label="confirmPassword"
                inputProps={{ type: "password" }}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></TextField>
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
                disabled={!email || !password || !name || !confirmPassword}
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

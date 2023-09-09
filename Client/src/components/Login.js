// eslint-disable-next-line

import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Footer from "./Footer";

const Login = ({ addParticipantsProp }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  // const addParticipant = (_) => {
  //   addParticipantsProp({
  //     id: new Date().getTime(),
  //     email: email,
  //     password: password,
  //   });
  // };

  return (
    <div className="w-full flex flex-col items-center bg-webgrey">
      <div className="w-5/6 flex flex-col">
        <div className="py-2">
          <h1 className="text-5xl font-inter font-black text-webred">
            Doc<span className="text-webnavyblue">Spot</span>
          </h1>
        </div>
        <div className="flex flex-col items-center pt-6">
          <p className="font-IBM text-2xl">
            Your Health, Your Time, Your Doctor
          </p>
          <p className="font-IBM text-2xl font-medium italic">
            ~Seamlessly Connected
          </p>
        </div>
        <div className="flex flex-col self-center justify-center items-center bg-white shadow-lg w-1/3 py-8 mt-6 mb-8 rounded-lg text-webgrey">
          <form className="flex flex-col w-5/6 gap-6">
            <TextField
              id="email"
              type="email"
              label="Email"
              variant="outlined"
              required
              value={data.email}
              onChange={handleOnChange}
            />
            <TextField
              type="password"
              id="password"
              placeholder="Password"
              label="Password"
              variant="outlined"
              required
              value={data.password}
              onChange={handleOnChange}
            />
            <LoginButton variant="contained">Log in</LoginButton>
            <Link
              href="#"
              underline="none"
              className="self-center text-webgrey"
              color="inherit"
            >
              Forgot password?
            </Link>
            <Divider>OR</Divider>
            <CreateAccountButton variant="contained" className="self-center">
              Create Account
            </CreateAccountButton>
          </form>
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

const LoginButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#2B2D42",
  "&:hover": {
    backgroundColor: "#8D99AE",
  },
  "&:active": {
    backgroundColor: "#8D99AE",
  },
  textTransform: "none",
  fontFamily: "IBM Plex Sans",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  fontSize: "1rem",
}));

const CreateAccountButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#D90429",
  "&:hover": {
    backgroundColor: "#EF233C",
  },
  "&:active": {
    backgroundColor: "#EF233C",
  },
  textTransform: "none",
  fontFamily: "IBM Plex Sans",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  fontSize: "1rem",
  width: "50%"
}));

export default Login;

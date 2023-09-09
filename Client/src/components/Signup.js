// eslint-disable-next-line

import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Footer from "./Footer";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  return (
    <div className="w-full flex flex-col items-center bg-webgrey">
      <div className="w-5/6 flex flex-col">
        <div className="py-2">
          <h1 className="text-5xl font-inter font-black text-webred">
            Doc<span className="text-webnavyblue">Spot</span>
          </h1>
        </div>
        <div className="flex flex-col items-center pt-3">
          <h2 className="font-IBM text-3xl font-medium">Create Account</h2>
          <p className="font-IBM text-lg">
            Join us in taking control of your healthcare journey.
          </p>
        </div>
        <div className="flex flex-col self-center justify-center items-center bg-white shadow-lg w-1/3 py-8 mt-6 mb-8 rounded-lg text-webgrey">
          <form className="flex flex-col w-5/6 gap-6">
            <TextField
              id="name"
              type="text"
              label="Name"
              variant="outlined"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="email"
              type="email"
              label="Email"
              variant="outlined"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="password"
              id="password"
              placeholder="Password"
              label="Password"
              variant="outlined"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <FormControl>
              <div className="flex flex-row items-center justify-center gap-5">
                <div>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Register as:
                  </FormLabel>
                </div>
                <div>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="doctor"
                      control={<Radio />}
                      label="Doctor"
                    />
                    <FormControlLabel
                      value="patient"
                      control={<Radio />}
                      label="Patient"
                    />
                  </RadioGroup>
                </div>
              </div>
            </FormControl>

            <SignupButton variant="contained">Sign Up</SignupButton>
            <div className="flex flex-row gap-1 text-center justify-center">
              <div> Already have an account? </div>
              <div className="text-black">
                <Link
                  href="/login"
                  className="self-center text-webgrey"
                  color="inherit"
                >
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const SignupButton = styled(Button)(({ theme }) => ({
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
}));

export default Signup;

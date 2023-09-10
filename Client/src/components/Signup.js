// eslint-disable-next-line

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Linke from "@mui/material/Link";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    } else if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Sign up the user and get the user _id
      const userResponse = await fetch(
        "http://localhost:9000/api/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, role }),
        }
      );

      if (userResponse.ok) {
        const { user } = await userResponse.json();

        // Step 2: Store additional data in the appropriate collection based on the role
        if (role === "doctor") {
          const doctorResponse = await fetch(
            "http://localhost:9000/api/doctors",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ _id: user._id, name, email }),
            }
          );

          if (doctorResponse.ok) {
            // Handle successful doctor registration
            console.log("Doctor registered successfully");
            navigate("/login");
          } else {
            // Handle error response
            console.error("Failed to register doctor");
          }
        } else if (role === "patient") {
          const patientResponse = await fetch(
            "http://localhost:9000/api/patients",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ _id: user._id, name, email }),
            }
          );

          if (patientResponse.ok) {
            // Handle successful patient registration
            console.log("Patient registered successfully");
            navigate("/login");
          } else {
            // Handle error response
            console.error("Failed to register patient");
          }
        }
      } else {
        // Handle error response
        console.error("Failed to sign up user");
      }
    } catch (error) {
      // Handle network or server error
      console.error("Server error:", error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center bg-webgrey">
      <div className="w-5/6 flex flex-col">
        <div className="py-2">
          <Link to="/">
            <h1 className="text-5xl font-inter font-black text-webred">
              Doc<span className="text-webnavyblue">Spot</span>
            </h1>
          </Link>
        </div>
        <div className="flex flex-col items-center pt-3">
          <h2 className="font-IBM text-3xl font-medium">Create Account</h2>
          <p className="font-IBM text-lg">
            Join us in taking control of your healthcare journey.
          </p>
        </div>
        <div className="flex flex-col self-center justify-center items-center bg-white shadow-lg w-1/3 py-8 mt-6 mb-8 rounded-lg text-webgrey">
          <form className="flex flex-col w-5/6 gap-6" onSubmit={handleSubmit}>
            <TextField
              id="name"
              type="text"
              label="Name"
              variant="outlined"
              required
              value={name}
              onChange={handleInputChange}
            />
            <TextField
              id="email"
              type="email"
              label="Email"
              variant="outlined"
              required
              value={email}
              onChange={handleInputChange}
            />
            <TextField
              type="password"
              id="password"
              placeholder="Password"
              label="Password"
              variant="outlined"
              required
              value={password}
              onChange={handleInputChange}
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
                    onChange={(e) => {
                      setRole(e.target.value);
                    }}
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

            <SignupButton variant="contained" type="submit">
              Sign Up
            </SignupButton>
            <div className="flex flex-row gap-1 text-center justify-center">
              <div> Already have an account? </div>
              <div className="text-black">
                <Linke
                  href="/login"
                  className="self-center text-webgrey"
                  color="inherit"
                >
                  Login
                </Linke>
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

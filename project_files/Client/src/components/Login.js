import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Linke from "@mui/material/Link";
import Footer from "./Footer";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ Handle admin credentials
      if (email === "adminlogin@gmail.com" && password === "admin123") {
  navigate("/admin-dashboard", { state: { isAdmin: true } });
  return;
}

      const response = await fetch("http://localhost:9000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const userData = await response.json();

      // ✅ Save user info
      localStorage.setItem("id", userData.id);
      localStorage.setItem("role", userData.role);
      localStorage.setItem("token", userData.token);
      localStorage.removeItem("admin"); // Just in case a non-admin logs in later

      // ✅ Update doctor availability
      if (userData.role === "doctor") {
        try {
          await fetch(`http://localhost:9000/api/doctors/${userData.id}/`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ isAvailable: true }),
          });
        } catch (error) {
          console.error("Error updating availability:", error);
        }

        navigate(`/viewdoctor/${userData.id}`);
      } else if (userData.role === "patient") {
        navigate(`/viewpatient/${userData.id}`);
      } else {
        navigate("/home");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid email or password");
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
          <p className="font-IBM text-2xl">
            Your Health, Your Time, Your Doctor
          </p>
          <p className="font-IBM text-2xl font-medium italic">
            ~Seamlessly Connected
          </p>
        </div>

        <div className="flex flex-col self-center justify-center items-center bg-white shadow-lg w-1/3 py-8 mt-6 mb-8 rounded-lg text-webgrey">
          <form className="flex flex-col w-5/6 gap-6" onSubmit={handleSubmit}>
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <TextField
              id="email"
              type="email"
              label="Email"
              variant="outlined"
              required
              value={email}
              onChange={handleChange}
            />
            <TextField
              type="password"
              id="password"
              label="Password"
              variant="outlined"
              required
              value={password}
              onChange={handleChange}
            />

            <LoginButton type="submit" variant="contained">
              Log in
            </LoginButton>

            <Linke
              href="#"
              underline="none"
              className="self-center text-webgrey"
              color="inherit"
            >
              Forgot password?
            </Linke>

            <Divider>OR</Divider>

            <CreateAccountButton variant="contained" className="self-center">
              <Link
                to="/signup"
                className="text-white w-full h-full flex items-center justify-center no-underline"
              >
                Create Account
              </Link>
            </CreateAccountButton>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const LoginButton = styled(Button)(() => ({
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

const CreateAccountButton = styled(Button)(() => ({
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
  width: "50%",
}));

export default Login;

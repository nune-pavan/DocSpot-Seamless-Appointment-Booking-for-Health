import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import toast from "react-hot-toast";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("isAdmin", "true");
    toast.success("Welcome Admin!");
    navigate("/admin-dashboard");
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-webgrey">
      <form
        className="bg-white shadow-lg p-10 rounded-lg w-1/3 flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-center text-webred">
          Admin Login
        </h2>

        <TextField
          label="Admin Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <LoginButton type="submit" variant="contained">
          Login as Admin
        </LoginButton>
      </form>
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

export default AdminLogin;

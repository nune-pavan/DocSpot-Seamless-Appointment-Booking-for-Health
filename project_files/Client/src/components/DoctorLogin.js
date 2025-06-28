import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const DoctorLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Accept any credentials
    navigate("/doctor-dashboard");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        className="bg-white p-8 rounded shadow-md w-96"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-webred">Doctor Login</h2>
        <TextField
          label="Email"
          type="email"
          fullWidth
          required
          className="mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          required
          className="mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: '#2B2D42' }}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default DoctorLogin;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") setName(value);
    if (id === "email") setEmail(value);
    if (id === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Register user
      const userRes = await fetch("http://localhost:9000/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role: "patient" }),
      });

      if (!userRes.ok) {
        console.error("❌ Failed to register user");
        return;
      }

      const { user } = await userRes.json();
      localStorage.setItem("user", JSON.stringify(user));

      // Step 2: Create patient profile
      const patientRes = await fetch("http://localhost:9000/api/patients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: user._id, name, email }),
      });

      if (patientRes.ok) {
        // ✅ Redirect using the correct route pattern
        navigate(`/viewpatient/${user._id}`);
      } else {
        console.error("❌ Failed to create patient");
      }
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="w-full flex flex-col items-center bg-webgrey min-h-screen">
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
          <p className="font-IBM text-lg">Join us in your healthcare journey.</p>
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
              label="Password"
              variant="outlined"
              required
              value={password}
              onChange={handleInputChange}
            />
            <SignupButton type="submit">Sign Up</SignupButton>
            <p className="text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-webnavyblue underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const SignupButton = styled(Button)({
  backgroundColor: "#D90429",
  "&:hover": { backgroundColor: "#EF233C" },
  "&:active": { backgroundColor: "#EF233C" },
  textTransform: "none",
  fontFamily: "IBM Plex Sans",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  fontSize: "1rem",
});

export default Signup;

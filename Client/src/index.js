import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// // Import your route components here
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ViewDoctor from "./components/viewDoctor";
import ViewPatient from "./components/viewPatient";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/viewdoctor/:id" exact element={<ViewDoctor />} />
        <Route path="/viewpatient/:id" exact element={<ViewPatient />} />
      </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

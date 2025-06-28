import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 🩺 Page + Component Routes
import LandingPage from "./pages/LandingPage";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ViewDoctor from "./components/ViewDoctor";
import ViewPatient from "./components/viewPatient";
import BookAppointment from "./pages/BookAppointment"; // 💡 Booking Page
import RegisterDoctor from "./components/RegisterDoctor";
import AdminDashboard from "./pages/AdminDashboard"; // Adjust path accordingly
import AdminLogin from "./components/AdminLogin"; // ✅ add this
import AboutUs from "./pages/AboutUs"; // or wherever it's located
import DoctorLogin from "./components/DoctorLogin";
import DoctorDashboard from "./pages/DoctorDashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          {/* 🌐 Default Landing Page */}
          <Route index element={<LandingPage />} />
          
          {/* 👤 Auth Pages */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          {/* 🏥 Main App Routes */}
          <Route path="home" element={<Home />} />
          <Route path="viewdoctor/:id" element={<ViewDoctor />} />
          <Route path="viewpatient/:id" element={<ViewPatient />} />
          
          {/* 📅 Book Appointment Page */}
          <Route path="book-appointment/:id" element={<BookAppointment />} />
          <Route path="register-doctor" element={<RegisterDoctor />} />
          <Route path="admin-dashboard" element={<AdminDashboard />} />
          <Route path="admin-login" element={<AdminLogin />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="doctor-login" element={<DoctorLogin />} />
          <Route path="doctor-dashboard" element={<DoctorDashboard />} />


        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// Performance Reporting
reportWebVitals();

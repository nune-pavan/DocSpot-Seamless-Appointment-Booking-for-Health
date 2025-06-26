import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const dummyDoctors = [
  {
    id: 1011,
    name: "Aryan Mehta",
    email: "aryan@mail.com",
    phone: "9876543210",
    specialization: "Cardiologist",
    address: "Delhi",
    fees: 500,
    approved: false,
  },
  {
    id: 1012,
    name: "Priya Rao",
    email: "priya@mail.com",
    phone: "8976543211",
    specialization: "Dermatologist",
    address: "Mumbai",
    fees: 500,
    approved: false,
  },
  {
    id: 1013,
    name: "Rahul Jain",
    email: "rahul@mail.com",
    phone: "9871234567",
    specialization: "Neurologist",
    address: "Hyderabad",
    fees: 500,
    approved: true,
  },
  {
    id: 1014,
    name: "Sneha Iyer",
    email: "sneha@mail.com",
    phone: "7654321980",
    specialization: "Pediatrician",
    address: "Chennai",
    fees: 500,
    approved: false,
  },
  {
    id: 1015,
    name: "Vikram Shah",
    email: "vikram@mail.com",
    phone: "9564781234",
    specialization: "Orthopedic",
    address: "Bangalore",
    fees: 500,
    approved: true,
  },
  {
    id: 1016,
    name: "Alok Reddy",
    email: "alok@mail.com",
    phone: "9012345678",
    specialization: "General Physician",
    address: "Kolkata",
    fees: 500,
    approved: false,
  },
];

const AdminDashboard = () => {
  const [doctors, setDoctors] = useState(dummyDoctors);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.isAdmin) {
      navigate("/login");
    }
  }, [location.state, navigate]);

  const handleApprovalChange = (id, status) => {
    setDoctors((prev) =>
      prev.map((doc) => (doc.id === id ? { ...doc, approved: status } : doc))
    );
    toast.success("Successfully updated approval status!");
  };

  return (
    <div style={{ padding: "20px", background: "#f5f5f5", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2rem", color: "#D90429", textAlign: "center" }}>
        Admin Dashboard
      </h1>
      <p style={{ textAlign: "center", color: "green", marginBottom: "1rem" }}>
        ✅ Admin Dashboard is active and loaded
      </p>
      <div style={{ background: "#fff", padding: "20px", borderRadius: "8px" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Doctor Applications</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ backgroundColor: "#2B2D42", color: "white" }}>
            <tr>
              <th style={{ padding: "8px", textAlign: "left" }}>ID</th>
              <th style={{ padding: "8px", textAlign: "left" }}>Name</th>
              <th style={{ padding: "8px", textAlign: "left" }}>Email</th>
              <th style={{ padding: "8px", textAlign: "left" }}>Phone</th>
              <th style={{ padding: "8px", textAlign: "left" }}>Specialization</th>
              <th style={{ padding: "8px", textAlign: "left" }}>Address</th>
              <th style={{ padding: "8px", textAlign: "left" }}>Fees (₹)</th>
              <th style={{ padding: "8px", textAlign: "left" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doc) => (
              <tr key={doc.id} style={{ borderTop: "1px solid #ddd" }}>
                <td style={{ padding: "8px" }}>{doc.id}</td>
                <td style={{ padding: "8px" }}>{doc.name}</td>
                <td style={{ padding: "8px" }}>{doc.email}</td>
                <td style={{ padding: "8px" }}>{doc.phone}</td>
                <td style={{ padding: "8px" }}>{doc.specialization}</td>
                <td style={{ padding: "8px" }}>{doc.address}</td>
                <td style={{ padding: "8px" }}>{doc.fees}</td>
                <td style={{ padding: "8px" }}>
                  <select
                    value={doc.approved ? "Approved" : "Rejected"}
                    onChange={(e) =>
                      handleApprovalChange(doc.id, e.target.value === "Approved")
                    }
                    style={{ padding: "4px 8px", borderRadius: "4px" }}
                  >
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;

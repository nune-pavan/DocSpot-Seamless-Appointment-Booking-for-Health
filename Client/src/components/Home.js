import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DoctorCard from "./DoctorCard";

import { Button, TextField } from "@mui/material";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";

function Home() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("http://localhost:9000/api/doctors");
        const data = await response.json();
        setDoctors(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };
    fetchDoctors();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full flex justify-center bg-webgrey pt-16">
        <div className="w-2/3 pb-10 pt-10">
          <div className="flex gap-2 justify-center items-center">
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              className="w-1/2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <RedButton>
              <SearchIcon />
            </RedButton>
          </div>
          <h1 className="font-IBM text-3xl font-medium pt-12 pb-4">
            Doctors near you
          </h1>
          <div className="w-full flex flex-wrap gap-6">
            {doctors
              .filter((doctor) =>
                doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((doctor) => (
                <DoctorCard
                  key={doctor._id}
                  id={doctor._id}
                  name={doctor.name}
                  specialization={doctor.specialization}
                  rating={doctor.rating.$numberDecimal}
                  availableHours={doctor.availableHours}
                  profilePicture={doctor.profilePicture}
                />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const RedButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#D90429",
  "&:hover": {
    backgroundColor: "#EF233C",
  },
  "&:active": {
    backgroundColor: "#EF233C",
  },
  textTransform: "none",
  fontFamily: "IBM Plex Sans",
  fontSize: "1rem",
  color: "white",
  height: "48px",
}));

export default Home;

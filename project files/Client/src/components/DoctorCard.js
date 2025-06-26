// src/components/DoctorCard.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import DocPic from "../assets/user-dummy.jpg";
import { Button, Rating, ToggleButton, ToggleButtonGroup } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import styled from "@emotion/styled";
import "./DoctorCard.css"; // ← NEW CSS

function DoctorCard({
  id,
  name,
  specialization,
  rating,
  availableHours,
  profilePicture,
}) {
  const [alignment, setAlignment] = useState("10:00AM - 1:00PM");

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <div className="doctor-card">
      <Link to={`/viewdoctor/${id}`}>
        <img
          src={profilePicture || DocPic}
          alt={name}
          className="doctor-image"
        />
      </Link>

      <div className="doctor-info">
        <div className="doctor-header">
          <div>
            <h2>{name}</h2>
            <p className="specialization">{specialization[0]}</p>
            <div className="rating">
              <p>{rating?.$numberDecimal}</p>
              <Rating
    name={`rating-${id}`}
    value={parseFloat(rating)}
    precision={0.5}
    readOnly
    size="medium"
    sx={{
      color: "#FFD700",       // Gold stars
      fontSize: "1.3rem",     // Slightly larger
    }}
  />
            </div>
          </div>
          <Link to={`/viewdoctor/${id}`}>
            <RedButton><CalendarMonthIcon /></RedButton>
          </Link>
        </div>

        <div className="available-hours">
          <p>Available Hours:</p>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value="10:00AM - 1:00PM">10AM - 1PM</ToggleButton>
            <ToggleButton value="5:00PM - 10:00PM">5PM - 10PM</ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
    </div>
  );
}

const RedButton = styled(Button)({
  backgroundColor: "#D90429",
  color: "white",
  "&:hover": {
    backgroundColor: "#EF233C",
  },
  textTransform: "none",
});

export default DoctorCard;

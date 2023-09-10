import React, { useState } from "react";
import { Link } from "react-router-dom";
import DocPic from "../assets/user-dummy.jpg";
import { Button, Rating, ToggleButton, ToggleButtonGroup } from "@mui/material";
import styled from "@emotion/styled";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function DoctorCard({
  id,
  name,
  specialization,
  rating,
  availableHours,
  profilePicture,
}) {
  const [alignment, setAlignment] = useState("10:00 AM - 1:00 PM");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 relative my-3 rounded-lg cursor-pointer flex-card bg-white p-4">
      <Link to={`/viewdoctor/${id}`}>
        <img
          src={profilePicture || DocPic}
          alt="{name}"
          className="w-full rounded-lg "
        />
      </Link>
      <div className="flex flex-col py-4">
        <div className="flex justify-between">
          <div>
            <h1 className="font-inter text-lg font-black">{name}</h1>
            <p className="font-IBM text-md text-webslate font-medium">
              {specialization[0]}
            </p>
            <div className="flex items-center gap-1">
              <p className="self-center">{rating.$numberDecimal}</p>
              <Rating
                name="doctor-rating"
                value={rating}
                precision={0.1} // Allows half-star ratings
                readOnly // To make it read-only
                size="small" // You can adjust the size
              />
            </div>
          </div>
          <div className="text-white">
            <Link to={`/viewdoctor/${id}`}>
              <RedButton>
                <CalendarMonthIcon />
              </RedButton>
            </Link>
          </div>
        </div>

        <div className="flex items-center">
          <p className="font-IBM text-sm text-webslate">
            {"Available Hours -"}
          </p>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Slot"
          >
            <ToggleButton value="10:00AM - 1:00PM">
              10:00AM - 1:00PM
            </ToggleButton>
            <ToggleButton value="5:00PM - 10:00PM">
              5:00PM - 10:00PM
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
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
}));

export default DoctorCard;

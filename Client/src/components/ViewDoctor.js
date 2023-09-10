import React, { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Navbar from "./Navbar";
import DocPic from "../assets/Docpic.jpg";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import Rating from "@mui/material/Rating";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Footer from "./Footer";

const ViewDoctor = () => {
  const [alignment, setAlignment] = useState("10:00 AM - 1:00 PM");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const ratingValue = 4.4; // Replace with the actual rating value
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full flex flex-col items-center bg-webgrey pt-28 pb-16">
        <div className="w-2/3 flex justify-center p-10 bg-white rounded-lg gap-8 shadow-lg">
          <div className="w-1/3 flex flex-col">
            <img src={DocPic} alt="Dr. Name" className="w-full rounded-lg" />
            <div className="pt-8 text-webred2 text-md">
              <div className="flex items-center gap-4 my-2">
                <LanguageIcon />
                <p className="text-webslate">www.drtanishqgupta.com</p>
              </div>
              <div className="flex items-center gap-4 my-2">
                <EmailIcon />
                <p className="text-webslate">drtanishqgupta@gmail.com</p>
              </div>
              <div className="flex items-center gap-4 my-2">
                <CallIcon />
                <p className="text-webslate">+91 76897 56789</p>
              </div>
              <div className="flex items-center gap-4 my-2">
                <LocationOnIcon />
                <p className="text-webslate">
                  HP world Showroom, Jaipur, Rajasthan,302002
                </p>
              </div>
              <div className="flex items-center gap-4 my-2">
                <SchoolIcon />
                <p className="text-webslate">MBBS, AIIMS Delhi</p>
              </div>
            </div>
          </div>

          <div className="w-2/3">
            <div className="mb-2">
              <p className="text-webred font-regular font-IBM text-lg">
                Currently Available
              </p>
              <h1 className="text-5xl font-inter font-black">
                Dr. Tanishq Gupta
              </h1>
            </div>
            <div className="my-4">
              <p className="font-semibold text-webslate font-IBM text-lg">
                Heart Specialist
              </p>
              <div className="flex items-center gap-2">
                <p className="self-center">{ratingValue}</p>
                <Rating
                  name="doctor-rating"
                  value={ratingValue}
                  precision={0.1} // Allows half-star ratings
                  readOnly // To make it read-only
                  size="small" // You can adjust the size
                />
              </div>
            </div>
            <div className="my-2">
              <p className="font-semibold text-webslate font-IBM text-lg">
                Available Hours -
              </p>
              <ul className="text-webslate font-IBM text-md list-disc">
                <li className="ml-5">10:00 AM - 1:00 PM</li>
                <li className="ml-5">5:00 PM - 10:00 PM</li>
              </ul>
            </div>
            <div className="my-2">
              <p className="font-semibold text-webslate font-IBM text-lg">
                Fees -
              </p>
              <p className="text-webslate font-IBM text-lg">₹ 700</p>
            </div>
            <div className="my-2">
              <p className="text-webred font-regular font-IBM text-lg">
                Choose Slot-
              </p>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-webslate font-IBM text-lg">
                  Date -
                </p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
                </LocalizationProvider>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-webslate font-IBM text-lg">
                  Time -
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

              <BookButton variant="contained">Book Appointment</BookButton>
            </div>
            <div className="mt-4 mb-2">
              <p className="font-semibold text-webslate font-IBM text-lg">
                About -
              </p>
              <p className="text-webslate font-IBM py-2 text-justify">
                Dr. Tanishq Gupta is a highly esteemed heart specialist with
                over two decades of dedicated service in the field of
                cardiology. His unwavering commitment to cardiovascular health
                has earned him a reputation as a leading expert in the diagnosis
                and treatment of heart-related conditions. Dr. Gupta is known
                for his compassionate patient care, utilizing cutting-edge
                technologies and personalized treatment plans to ensure the best
                possible outcomes. His vast experience and profound dedication
                make him a trusted ally in the pursuit of cardiac wellness.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const BookButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#D90429",
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

export default ViewDoctor;

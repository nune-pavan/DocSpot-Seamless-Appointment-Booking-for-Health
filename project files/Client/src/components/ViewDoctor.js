import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; // ✅ Include Link here
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Navbar from "./Navbar";
import DocPic from "../assets/user-dummy.jpg";
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
  const [doctorData, setDoctorData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await fetch(`http://localhost:9000/api/doctors/${id}`);
        const data = await response.json();
        setDoctorData(data);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };

    fetchDoctorData();
  }, [id]);

  const [alignment, setAlignment] = useState("10:00 AM - 1:00 PM");

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  if (!doctorData) return <div>Loading...</div>;

  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full flex flex-col items-center bg-webgrey pt-28 pb-16">
        <div className="w-2/3 flex justify-center p-10 bg-white rounded-lg gap-8 shadow-lg">
          {/* LEFT SIDE */}
          <div className="w-1/3 flex flex-col">
            <img
              src={doctorData.profilePicture || DocPic}
              alt="Dr. Name"
              className="w-full rounded-lg"
            />
            <div className="pt-8 text-webred2 text-md">
              <div className="flex items-center gap-4 my-2">
                <SchoolIcon />
                <p className="text-webslate">{doctorData.registrationNumber}</p>
              </div>
              <div className="flex items-center gap-4 my-2">
                <EmailIcon />
                <p className="text-webslate">{doctorData.email}</p>
              </div>
              <div className="flex items-center gap-4 my-2">
                <CallIcon />
                <p className="text-webslate">{doctorData.phoneNo}</p>
              </div>
              <div className="flex items-center gap-4 my-2">
                <LocationOnIcon />
                <p className="text-webslate">{doctorData.address}</p>
              </div>
              <div className="flex gap-4 my-2">
                <SchoolIcon />
                <div className="flex flex-col">
                  {doctorData.education.map((edu, index) => (
                    <p className="text-webslate mb-2" key={index}>{edu}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-2/3">
            <div className="mb-2">
              <p className="text-webred font-regular font-IBM text-lg">
                {doctorData.isAvailable}
              </p>
              <h1 className="text-5xl font-inter font-black">
                {doctorData.name}
              </h1>
            </div>

            <div className="my-4">
              <div className="flex flex-wrap gap-2">
                {doctorData.specialization.map((spcl, index) => (
                  <p key={index} className="font-semibold text-webslate font-IBM text-lg">
                    {spcl}
                  </p>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <p>{doctorData.rating.$numberDecimal}</p>
                <Rating
                  name="doctor-rating"
                  value={parseFloat(doctorData.rating.$numberDecimal)}
                  precision={0.1}
                  readOnly
                  size="small"
                />
              </div>
            </div>

            <div className="my-2">
              <p className="font-semibold text-webslate font-IBM text-lg">Available Hours -</p>
              <ul className="text-webslate font-IBM text-md list-disc ml-6">
                {doctorData.availableHours.map((hours, index) => (
                  <li key={index}>{hours}</li>
                ))}
              </ul>
            </div>

            <div className="my-2">
              <p className="font-semibold text-webslate font-IBM text-lg">Fees</p>
              <p className="text-webslate font-IBM text-lg">
                ₹ {doctorData.fees.$numberDecimal}
              </p>
            </div>

            <div className="my-2">
              <p className="text-webred font-regular font-IBM text-lg">Choose Slot -</p>
              <div className="flex items-center gap-2 my-3">
                <p className="font-semibold text-webslate font-IBM text-lg">Date -</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
                </LocalizationProvider>
              </div>
              <div className="flex items-center gap-2 my-3">
                <p className="font-semibold text-webslate font-IBM text-lg">Time -</p>
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

              {/* ✅ Link to booking page */}
              <Link to={`/book-appointment/${doctorData._id}`}>
                <BookButton variant="contained">Book Appointment</BookButton>
              </Link>
            </div>

            <div className="mt-4 mb-2">
              <p className="font-semibold text-webslate font-IBM text-lg">About -</p>
              <p className="text-webslate font-IBM py-2 text-justify">
                {doctorData.about}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const BookButton = styled(Button)({
  backgroundColor: "#D90429",
  borderRadius: "15px",
  "&:hover": {
    backgroundColor: "#8D99AE",
  },
  "&:active": {
    backgroundColor: "#8D99AE",
  },
  textTransform: "none",
  fontFamily: "IBM Plex Sans",
  padding: "10px 22px",
  fontSize: "1rem",
});

export default ViewDoctor;

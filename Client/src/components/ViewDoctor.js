import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";

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

  console.log(doctorData);

  const [alignment, setAlignment] = useState("10:00 AM - 1:00 PM");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  if (!doctorData) {
    return <div>Loading...</div>; // You can show a loading state while fetching data
  }
 
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full flex flex-col items-center bg-webgrey pt-28 pb-16">
        <div className="w-2/3 flex justify-center p-10 bg-white rounded-lg gap-8 shadow-lg">
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
                    <p className="text-webslate mb-2" key={index}>
                      {edu}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

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
              <div className="flex">
                {doctorData.specialization.map((spcl, index) => (
                  <p
                    key={index}
                    className="font-semibold text-webslate font-IBM text-lg mr-2"
                  >
                    {spcl}
                  </p>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <p className="self-center">
                  {doctorData.rating.$numberDecimal}
                </p>
                <Rating
                  name="doctor-rating"
                  value={doctorData.rating.$numberDecimal}
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
              <div>
              </div>
              <ul className="text-webslate font-IBM text-md list-disc">
                <li className="ml-5">
                {doctorData.availableHours.slice(0, 1).map((hours, index) => (
                  <p key={index} className="font-semibold text-webslate font-IBM text-lg">
                    {hours}
                  </p>
                ))}
                </li>
                <li className="ml-5">
                {doctorData.availableHours.slice(1, 2).map((hours, index) => (
                  <p key={index} className="font-semibold text-webslate font-IBM text-lg">
                    {hours}
                  </p>
                ))}
                </li>
              </ul>
            </div>
            <div className="my-2">
              <p className="font-semibold text-webslate font-IBM text-lg">
                Fees
              </p>
              <p className="text-webslate font-IBM text-lg">
                ₹ {doctorData.fees.$numberDecimal}
              </p>
            </div>
            <div className="my-2">
              <p className="text-webred font-regular font-IBM text-lg">
                Choose Slot-
              </p>
              <div className="flex items-center gap-2 my-3">
                <p className="font-semibold text-webslate font-IBM text-lg">
                  Date -
                </p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
                </LocalizationProvider>
              </div>
              <div className="flex items-center gap-2 my-3">
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

const BookButton = styled(Button)(({ theme }) => ({
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
  paddingTop: "9.5px",
  paddingBottom: "9.5px",
  paddingLeft: "1.4rem",
  paddingRight: "1.4rem",
  fontSize: "1rem",
}));

export default ViewDoctor;

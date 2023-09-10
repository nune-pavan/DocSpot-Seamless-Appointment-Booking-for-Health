import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DocPic from "../assets/user-dummy.jpg";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";

const ViewPatient = () => {
  const [patientData, setPatientData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await fetch(
          `http://localhost:9000/api/patients/${id}`
        );
        const data = await response.json();
        setPatientData(data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchPatientData();
  }, [id]);

  if (!patientData) {
    return <div>Loading...</div>; // You can show a loading state while fetching data
  }

  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full flex flex-col items-center bg-webgrey pt-28 pb-16">
        <div className="w-2/3 flex justify-center p-10 bg-white rounded-lg gap-8 shadow-lg">
          <div className="w-1/3 flex flex-col">
            <img
              src={patientData.profilePicture || DocPic}
              alt="Dr. Name"
              className="w-full rounded-lg"
            />
            <div className="pt-8 text-webblue text-md">
              <div className="flex items-center gap-4 my-2">
                <EmailIcon />
                <p className="text-webslate">{patientData.email}</p>
              </div>
              <div className="flex items-center gap-4 my-2">
                <CallIcon />
                <p className="text-webslate">{patientData.phoneNo}</p>
              </div>
              <div className="flex items-center gap-4 my-2">
                <LocationOnIcon />
                <p className="text-webslate">{patientData.location}</p>
              </div>
              <div className="flex items-center gap-4 my-2">
                <SchoolIcon />
                <p className="text-webslate">B.Tech, IIIT Kota</p>
              </div>
            </div>
          </div>
          <div className="w-2/3">
            <div className="mb-2">
              <p className="text-webblue font-regular font-IBM text-lg">
                Patient
              </p>
              <h1 className="text-5xl font-inter font-black">
                {patientData.name}
              </h1>
            </div>
            <div className="my-4">
              <p className="font-semibold text-webslate font-IBM text-lg mb-2">
                Asthama, Lung Cancer
              </p>
              <ViewButton variant="contained">View Prescription</ViewButton>
            </div>
            <div className="text-white bg-webnavyblue rounded-lg p-5 my-10">
              <p className="mb-1 font-semibold text-xl">
                Upcoming Appointments
              </p>
              <hr />
              <div className="flex flex-row justify-between ">
                <div className="flex flex-col">
                  <h1 className="text-3xl mt-4 font-inter font-bold">
                    {patientData.name}
                  </h1>
                  <p className="text-white font-IBM text-lg">
                    Heart Specialist
                  </p>
                  <p className="text-white font-IBM mb-2 text-md">
                    {patientData.phoneNo}
                  </p>
                </div>
                <div className="pt-4">
                  <div className="flex items-center gap-2">
                    <p className="text-xl">Token No.</p>
                    <p className="text-4xl font-semibold">23</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row justify-between items-end mt-4">
                <div className="text-md flex flex-col">
                  <p>Date - 18/09/23</p>
                  <p>Time - 10:00AM to 1:00PM</p>
                </div>
                <div>
                  <CancelButton variant="contained">Cancel</CancelButton>
                </div>
              </div>
            </div>
            <div className="mt-4 mb-2">
              <p className="font-semibold text-webslate font-IBM text-lg">
                About -
              </p>
              <p className="text-webslate font-IBM py-2 text-justify">
                {patientData.about}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const CancelButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#8D99AE",
  "&:hover": {
    backgroundColor: "#C3C9D5",
  },
  "&:active": {
    backgroundColor: "#C3C9D5",
  },
  textTransform: "none",
  fontFamily: "IBM Plex Sans",
  padding: "0.5rem 2.5rem",
  fontSize: "1rem",
  borderRadius: "10px",
}));
const ViewButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  color: "gray",
  border: "1px solid gray",
  "&:hover": {
    backgroundColor: "webnavyblue",
    color: "white",
  },
  "&:active": {
    backgroundColor: "black",
  },
  textTransform: "none",
  fontFamily: "IBM Plex Sans",
  paddingTop: ".5rem",
  paddingBottom: ".51rem",
  fontSize: "1rem",
}));
export default ViewPatient;

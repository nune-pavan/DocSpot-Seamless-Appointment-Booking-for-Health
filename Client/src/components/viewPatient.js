import React from 'react'
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Navbar from './Navbar';

const ViewPatient = () => {
  return (
    <>
    <Navbar/>
    <div className="w-full flex flex-col items-center bg-webgrey">
    <div className="w-5/6 flex flex-col">
    <div className='flex flex-row p-5 bg-white my-10'>
    <div>
        <img src=''/>
        <ul>
            <li>www.manishpaul.com</li>
            <li>manishpaul@gmail.com</li>
            <li>+91 76897 56789</li>
            <li>IIIT Kota, RIICO Industrial area, Kota, Rajasthan305202</li>
            <li>B.Tech, IIIT Kota </li>
        </ul>
    </div>
    <div >
    <p className='text-gray-500 text-2xl'>Patient</p>
    <h1 className='text-6xl font-bold my-3'>Manish Paul</h1>
    <p className='text-3xl text-gray-500 font-medium'>Asthama, Lung Cancer</p>
    <ViewButton variant="contained">View Prescription</ViewButton>
    <div className='text-white bg-black rounded-md p-5 my-10 mr-10 text-2xl'>
        <p>Upcoming Appointments</p>
        <hr/>
        <div className='flex flex-row justify-between'>
        <div>
        <h1 className='text-6xl font-semibold'>Dr. Tanishq Gupta</h1>
        <p>Heart Specialist</p>
        <p>+91 76897 56789 </p>
        </div>
        <div>Token No. <span className='text-5xl font-semibold'>23</span></div>
        </div>
        <br/>
        <br/>
        <div className='flex flex-row justify-between items-end'>
            <div>
                <p>Date - 18/09/23</p>
                <p>Time - 10:00AM to 1:00PM</p>
            </div>
            <div>
                <CancelButton variant="contained">Cancel</CancelButton>
            </div>
        </div>

    </div>
    <h3 className='text-2xl my-1'>About</h3>
    <p className='text-justify'>
    As a college student battling both asthma and lung cancer, my journey has been marked by resilience and determination. While asthma introduced me to the world of respiratory challenges at a young age, my recent diagnosis of lung cancer has added an unexpected twist to my life. Through it all, I'm fueled by a relentless drive to overcome these obstacles, pursue my education, and inspire others facing similar health battles. My goal is not just survival, but to thrive and continue my academic pursuits while raising awareness about lung health and cancer prevention.
    </p>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

const CancelButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#2B2D42",
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
  const ViewButton = styled(Button)(({ theme }) => ({
    backgroundColor: "transparent",
    color:"gray",
    border:"1px solid gray",
    "&:hover": {
      backgroundColor:"webnavyblue",
      color:"white",
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
export default ViewPatient
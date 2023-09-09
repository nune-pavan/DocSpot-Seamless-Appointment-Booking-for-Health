import React from 'react'
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Navbar from './Navbar';
const ViewDoctor = () => {
  return (
    <>
    <Navbar/>
    <div className="w-full flex flex-col items-center bg-webgrey">
    <div className="w-5/6 flex flex-col">
    <div className='flex flex-row'>
    <div>
        <img src=''/>
        <ul>
            <li>www.drtanishqgupta.com</li>
            <li>drtanishqgupta@gmail.com</li>
            <li>+91 76897 56789</li>
            <li>HP world Showroom,Jaipur, Rajasthan,302002</li>
            <li>MBBS, AIIMS Delhi </li>
        </ul>
    </div>
    <div className='left'>
    <p className='text-red-600'>Currently Available</p>
    <h1 className='text-6xl font-bold'>Dr. Tanishq Gupta</h1>
    <p className='text-3xl text-gray-500 font-medium'>Heart Specialist</p>
    <p className='text-3xl text-gray-500 font-medium'>Available Hours-</p>
    <ul className='text-2xl text-gray-500 font-normal'>
        <li>10:00 AM - 1:00 PM</li>
        <li>5:00 PM - 10:00 PM</li>
    </ul>
    <p className='text-2xl text-red-600'>Choose Slot-</p>
    <p>Date:18/09/23</p>
    <p>Time:</p>
    <BookButton variant="contained">Book Appointment</BookButton>
    <h3>About</h3>
    <p>
    Dr. Tanishq Gupta is a highly esteemed heart specialist with over two decades of dedicated service in the field of cardiology. His unwavering commitment to cardiovascular health has earned him a reputation as a leading expert in the diagnosis and treatment of heart-related conditions. Dr. Gupta is known for his compassionate patient care, utilizing cutting-edge technologies and personalized treatment plans to ensure the best possible outcomes. His vast experience and profound dedication make him a trusted ally in the pursuit of cardiac wellness.
    </p>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

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

export default ViewDoctor
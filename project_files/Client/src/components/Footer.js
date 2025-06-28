import React from 'react'
import Link from "@mui/material/Link";

function Footer() {
  return (
    <div className='w-full h-10 bg-white'>
      <div>
        <ul className='flex flex-row gap-40 justify-between items-center text-center pt-5 text-webgrey mx-40'>
          <div>
          <li className=''>DocSpot <span className=''>@ 2023</span></li>
          </div>
          <div className='flex gap-10'>
          <Link
                href="/about"
                underline="none"
                className="self-center text-webgrey"
                color="inherit"
              >
                <li>About Us</li>
              </Link>
          <Link
                href="/login"
                underline="none"
                className="self-center text-webgrey"
                color="inherit"
              >
                <li>Log in</li>
              </Link>
          <Link
                href="/signup"
                underline="none"
                className="self-center text-webgrey"
                color="inherit"
              >
                <li>Sign up</li>
              </Link>
          <Link
                href="/"
                underline="none"
                className="self-center text-webgrey"
                color="inherit"
              >
                <li>Home</li>
              </Link>
          </div>
          
        </ul>
      </div>
    </div>
  )
}

export default Footer
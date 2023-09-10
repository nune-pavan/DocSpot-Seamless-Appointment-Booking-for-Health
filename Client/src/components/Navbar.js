import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import styled from "@emotion/styled";
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  return (
    <header className="fixed w-full h-16 bg-white z-50">
      <div className="h-full flex justify-center items-center">
        <div className="w-2/3 flex justify-between">
          <Link to="/">
            <h1 className="text-4xl font-inter font-black text-webred">
              Doc<span className="text-webnavyblue">Spot</span>
            </h1>
          </Link>
          <div className="flex gap-2 items-center">
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
            />
            <RedButton>
              <SearchIcon />
            </RedButton>
          </div>
          <AccountBoxIcon style={{ fontSize: "4rem", color: "#2B2D42" }} />
        </div>
      </div>
    </header>
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
  height: "48px"
}));

export default Navbar;

import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link } from "react-router-dom";

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

          <AccountBoxIcon fontSize="large" style={{ color: "#2B2D42" }} />
        </div>
      </div>
    </header>
  );
}

export default Navbar;

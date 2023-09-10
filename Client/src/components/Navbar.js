import React, { useState } from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };

  const handleLogout = () => {
    localStorage.clear();
    toast("Logged out Successfully!");
    navigate("/");
  };
  return (
    <header className="fixed w-full h-16 bg-white z-50">
      <div className="h-full flex justify-center items-center">
        <div className="w-2/3 flex justify-between">
          <Link to="/">
            <h1 className="text-4xl font-inter font-black text-webred">
              Doc<span className="text-webnavyblue">Spot</span>
            </h1>
          </Link>

          <div onClick={handleShowMenu}>
            <AccountBoxIcon style={{ fontSize: "3rem", color: "#2B2D42" }} />
            {showMenu && (
              <div className="absolute bg-white py-2 px-2 shadow drop-shadow-md flex flex-col">
                {localStorage.getItem("id") ? (
                  <p
                    className="cursor-pointer lg:text-xs xl:text-sm"
                    onClick={handleLogout}
                  >
                    Logout
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap cursor-pointer"
                  >
                    SignIn
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

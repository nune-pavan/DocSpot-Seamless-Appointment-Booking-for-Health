import React, { useState } from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logged out Successfully!");
    navigate("/");
  };

  const isLoggedIn = localStorage.getItem("id");

  return (
    <header className="fixed w-full h-16 bg-white shadow z-50">
      <div className="h-full flex justify-center items-center">
        <div className="w-11/12 max-w-6xl flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <h1 className="text-3xl font-extrabold font-inter text-webred">
              Doc<span className="text-webnavyblue">Spot</span>
            </h1>
          </Link>

          {/* Account Icon and Menu */}
          <div className="relative">
            <AccountBoxIcon
              style={{
                fontSize: "2.5rem",
                color: "#2B2D42",
                cursor: "pointer",
              }}
              onClick={handleShowMenu}
            />
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg border border-gray-200 z-10">
                <div className="flex flex-col p-2 text-sm">
                  {isLoggedIn ? (
                    <button
                      className="text-left py-2 px-3 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="py-2 px-3 hover:bg-gray-100"
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/register-doctor"
                        className="py-2 px-3 hover:bg-gray-100 text-webred font-medium"
                      >
                        Register as Doctor
                      </Link>
                      <Link
                        to="/admin-login"
                        className="py-2 px-3 hover:bg-gray-100 text-blue-600 font-medium"
                      >
                        Admin Login
                      </Link>
                      <Link to="/doctor-login" className="py-2 px-3 hover:bg-gray-100">
                        Doctor Login
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

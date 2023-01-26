import React from "react";
import logoText from "../assets/img/logo.png";
import { FaSearch } from "react-icons/fa";

const Header = ({ searchModeActive, currentCity,headerDesktopStyle}) => {
  const defaultCity = "Anywhere"
  const searchStyle = {
    padding: "19px",
    
    
  }



  return (
    <header className={`${headerDesktopStyle ? "flex mx-20" : "block mx-4"} justify-between mx-20 my-8`}>
      <img id="logo" className={`${!headerDesktopStyle ? "mb-10" : ""}`} src={logoText} alt="logo" />
      <button
        onClick={searchModeActive}
        className={`${!headerDesktopStyle && "mx-auto"} search-bar flex items-center rounded-2xl`}
      >
        <p className="text-[#333333] search-results text-sm py-5 px-4 border-r border-[#f2f2f2]">
          {currentCity 
          ? `${currentCity}, Finland`
          : defaultCity}
          </p>
        <p className="py-5 text-sm px-4 border-r border-[#f2f2f2] text-[#bdbdbd]">Add Guests</p>
            <div  className="flex items-center justify-center" style={searchStyle}>
        <FaSearch className="text-[#eb5757] w-full" />

            </div>
      </button>
    </header>
  );
};



export default Header;

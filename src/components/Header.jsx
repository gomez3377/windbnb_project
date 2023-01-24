import React from "react";
import logoText from "../assets/img/logo.png";
import { FaSearch } from "react-icons/fa";

const Header = ({ searchModeActive, currentCity }) => {
  return (
    <header className="flex justify-between mx-20 my-8">
      <img className="logo" src={logoText} alt="logo" />
      <button
        onClick={searchModeActive}
        className="search-bar flex items-center p-5 rounded-2xl"
      >
        <p className="search-results text-sm">{currentCity}, Finland</p>
        <p>Add Guests</p>

        <FaSearch />
      </button>
    </header>
  );
};

export default Header;

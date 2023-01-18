import React from "react";
import { FaSearch } from "react-icons/fa";
import LocationResult from "./LocationResult";

const SearchLightBox = () => {
  return (
    <div id="lightbox" className="absolute w-full h-screen">
      <div
        className="w-full bg-white px-24 pt-12 flex items-start justify-between"
        id="full-search-bar"
      >
        <div id="destination-results">
          <input type="text" placeholder="Location" />

          <ul>
            <LocationResult />
          </ul>
        </div>
        <div id="guest-search">
          <button
            className="border border-solid border-[#333333] rounded-2xl w-full text-left p-3 mb-12"
            id="filted-guests"
          >
            <h4 className="uppercase text-[9px]">Guests</h4>
            <p className="text-sm">4 Guests</p>
          </button>
          <div className="mb-12" id="adults-filter">
            <p className="font-bold text-sm">Adults</p>
            <p className="text-[#bdbdbd] text-sm">Ages 13 or above</p>
            <div className="count-container flex items-center">
              <button className="border border-solid border-[#828282] rounded text-sm flex items-center justify-center w-6 h-6 text-[#828282]">
                -
              </button>
              <p className="m-4">0</p>
              <button className="border border-solid border-[#828282] rounded text-sm flex items-center justify-center w-6 h-6 text-[#828282]">
                +
              </button>
            </div>
          </div>
          <div className="mb-16" id="children-filter">
            <p className="font-bold text-sm">Children</p>
            <p className="text-[#bdbdbd] text-sm">Ages 2-12</p>
            <div className="count-container flex items-center">
              <button className="border border-solid border-[#828282] rounded text-sm flex items-center justify-center w-6 h-6 text-[#828282]">
                -
              </button>
              <p className="m-4">0</p>
              <button className="border border-solid border-[#828282] rounded text-sm flex items-center justify-center w-6 h-6 text-[#828282]">
                +
              </button>
            </div>
          </div>
        </div>
      
        <button id="lightbox-search-btn" className=" flex items-center w-32 rounded-2xl text-white py-3.5 px-6">
          
          <FaSearch /> <p className="ml-2.5">Search</p>
        </button>
      </div>
    </div>
  );
};

export default SearchLightBox;

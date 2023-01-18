import React from "react";
import { FaSearch } from "react-icons/fa";
import LocationResult from "./LocationResult";

const SearchLightBox = ({ cities, currentCity }) => {
  const [count, setCount] = React.useState({
    totalCount: 0,
    adults: 0,
    children: 0,
  });

  function addAdultCount() {
    setCount((prevCount) => {
      return {
        ...prevCount,
        adults: prevCount.adults + 1,
        totalCount: prevCount.totalCount + 1,
      };
    });
  }
  function addChildrenCount() {
    setCount((prevCount) => {
      return {
        ...prevCount,
        children: prevCount.children + 1,
        totalCount: prevCount.totalCount + 1,
      };
    });
  }
  function subtractAdultCount() {
    setCount((prevCount) => {
      return prevCount.adults > 0 ? {
        ...prevCount,
        adults: prevCount.adults - 1,
        totalCount: prevCount.totalCount - 1,}
      :{...prevCount}
    });
  }
  function subtractChildrenCount() {
    setCount((prevCount) => {
      return prevCount.children > 0 ? {
        ...prevCount,
        children: prevCount.children - 1,
        totalCount: prevCount.totalCount - 1,
      }
      :{...prevCount}
    });
  }
  console.log(cities)

   const cityElements = cities.map(city => <LocationResult  cityName={city} />)

  return (
    <div id="lightbox" className="absolute w-full h-screen">
      <div
        className="w-full bg-white px-24 pt-12 flex items-start justify-between"
        id="full-search-bar"
      >
        <div id="destination-search">
          <button className="border border-solid border-[#333333] rounded-2xl w-full text-left p-3 mb-12">
            <h4 className="uppercase text-[9px]">Location</h4>
            <p className="text-sm">{currentCity}, Finland</p>
          </button>

          <ul>
          {cityElements}
          </ul>
        </div>
        <div id="guest-search">
          <button
            className="border border-solid border-[#333333] rounded-2xl w-full text-left p-3 mb-12"
            id="filted-guests"
          >
            <h4 className="uppercase text-[9px]">Guests</h4>
            <p className="text-sm">{count.totalCount} Guests</p>
          </button>
          <div className="mb-12" id="adults-filter">
            <p className="font-bold text-sm">Adults</p>
            <p className="text-[#bdbdbd] text-sm">Ages 13 or above</p>
            <div className="count-container flex items-center">
              <button
                onClick={subtractAdultCount}
                className="border border-solid border-[#828282] rounded text-sm flex items-center justify-center w-6 h-6 text-[#828282]"
              >
                -
              </button>
              <p className="m-4">{count.adults}</p>
              <button
                onClick={addAdultCount}
                className="border border-solid border-[#828282] rounded text-sm flex items-center justify-center w-6 h-6 text-[#828282]"
              >
                +
              </button>
            </div>
          </div>
          <div className="mb-16" id="children-filter">
            <p className="font-bold text-sm">Children</p>
            <p className="text-[#bdbdbd] text-sm">Ages 2-12</p>
            <div className="count-container flex items-center">
              <button
                onClick={subtractChildrenCount}
                className="border border-solid border-[#828282] rounded text-sm flex items-center justify-center w-6 h-6 text-[#828282]"
              >
                -
              </button>
              <p className="m-4">{count.children}</p>
              <button
                onClick={addChildrenCount}
                className="border border-solid border-[#828282] rounded text-sm flex items-center justify-center w-6 h-6 text-[#828282]"
              >
                +
              </button>
            </div>
          </div>
        </div>
        
        <button
          id="lightbox-search-btn"
          className="mx-32 flex items-center w-32 rounded-2xl text-white py-3.5 px-6"
        >
          <FaSearch /> <p className="ml-2.5">Search</p>
        </button>
      </div>
    </div>
  );
};

export default SearchLightBox;

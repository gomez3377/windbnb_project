import React from "react";
import { FaSearch } from "react-icons/fa";
import LocationResult from "./LocationResult";

const SearchLightBox = ({ cities, currentCity }) => {
  
 const [filterSettingState, setFilterSettingState] = React.useState({
   locationFilterActive: true,
   guestCountFilterActive: false 
 })

  const [count, setCount] = React.useState({
    totalCount: 0,
    adults: 0,
    children: 0,
  });
 function selectCityFilter() {
   setFilterSettingState(prevState => ({guestCountFilterActive:false, locationFilterActive:true }))
 }

 function selectGuestFilter(){
  setFilterSettingState(prevState => ({guestCountFilterActive:true, locationFilterActive:false }))
 }

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
      return prevCount.adults > 0
        ? {
            ...prevCount,
            adults: prevCount.adults - 1,
            totalCount: prevCount.totalCount - 1,
          }
        : { ...prevCount };
    });
  }
  function subtractChildrenCount() {
    setCount((prevCount) => {
      return prevCount.children > 0
        ? {
            ...prevCount,
            children: prevCount.children - 1,
            totalCount: prevCount.totalCount - 1,
          }
        : { ...prevCount };
    });
  }
  console.log(cities);

  const cityElements = cities.map((city) => (
    <LocationResult className="location-result" cityName={city} />
  ));

  return (
    <div id="lightbox" className="fixed top-0 left-0 z-10 w-full h-full">
      <section id="full-search-section" className="w-full bg-white fixed top-0 left-0">
        <div id="full-search-bar" className=" mx-24 my-12 flex items-center justify-between rounded-2xl">
          {/* <div id="destination-search"> */}
            <button className="border border-solid border-[#333333] rounded-2xl w-full text-left p-3 h-full">
              <h4 className="uppercase text-[9px]">Location</h4>
              <p className="text-sm">{currentCity}, Finland</p>
            </button>

            {/* <ul>{cityElements}</ul> */}
          {/* </div> */}
          {/* <div id="guest-search"> */}
            <button
              className="border border-solid border-[#333333] rounded-2xl w-full text-left p-3 h-full"
              id="filted-guests"
            >
              <h4 className="uppercase text-[9px]">Guests</h4>
              <p className="text-sm">{count.totalCount} Guests</p>
            </button>
          {/* </div> */}

          <button
            id="lightbox-search-btn"
            className="mx-32 flex items-center w-32 rounded-2xl text-white py-3.5 px-6"
          >
            <FaSearch /> <p className="ml-2.5">Search</p>
          </button>
        </div>
      </section>

    </div>
  );
};

export default SearchLightBox;

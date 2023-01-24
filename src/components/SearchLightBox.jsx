import React, {useRef, useState, useEffect} from "react";
import { FaSearch } from "react-icons/fa";
import DestinationFilter from "./DestinationFilter";
import GuestCount from "./GuestCount";
import GuestFilter from "./GuestFilter";
import LocationResult from "./LocationResult";

const SearchLightBox = ({ cities, currentCity, changeCurrentCity, totalGuests, addChildrenCount, addAdultCount, subtractAdultCount, subtractChildrenCount }) => {
  // const lightboxRef = useRef()
  // useEffect(() => {
  //   const closeLightbox = e => {
  //     // // if(e.path[0].tagName !== lightboxRef.current){
  //     //   setSearchMode(false)
  //     console.log(e)
  //     // }
  //   }
  //   document.body.addEventListener('click', closeLightbox)

  //   return () => document.body.removeEventListener('click', closeLightbox)
  // },[])


  const [filterSettingState, setFilterSettingState] = useState({
    locationFilterActive: false,
    guestCountFilterActive: true,
  });

  
  function selectCityFilter() {
    setFilterSettingState((prevState) => ({
      guestCountFilterActive: false,
      locationFilterActive: true,
    }));
  }

  function selectGuestFilter() {
    setFilterSettingState((prevState) => ({
      guestCountFilterActive: true,
      locationFilterActive: false,
    }));
  }

 

  const cityElements = cities.map((city) => (
    <LocationResult key={city.id} id={city.id} changeCurrentCity={changeCurrentCity} className="location-result" cityName={city.cityName} />
  ));

  return (
    <div id="lightbox" className="fixed top-0 left-0 z-10 w-full h-full">
      <section
        // ref={lightboxRef}
        id="full-search-section"
        className="w-full bg-white fixed top-0 left-0"
      >
        <div
          id="full-search-bar"
          className=" mx-24 my-12 flex items-center justify-between rounded-2xl"
        >
          <DestinationFilter
            selectCityFilter={selectCityFilter}
            currentCity={currentCity}
            active={filterSettingState.locationFilterActive}
          />

          <GuestFilter
            count={totalGuests}
            active={filterSettingState.guestCountFilterActive}
            selectGuestFilter={selectGuestFilter}
          />

          <button
            id="lightbox-search-btn"
            className="mx-32 flex items-center w-32 rounded-2xl text-white py-3.5 px-6"
          >
            <FaSearch /> <p className="ml-2.5">Search</p>
          </button>
        </div>
        {filterSettingState.locationFilterActive && (
          <ul className="ml-24"> {cityElements} </ul>
        )}
        {filterSettingState.guestCountFilterActive && (
          <GuestCount
         
           totalGuests={totalGuests}
            addAdultCount={addAdultCount}
            addChildrenCount={addChildrenCount}
            subtractAdultCount={subtractAdultCount}
            subtractChildrenCount={subtractChildrenCount}
          />
        )}
      </section>
    </div>
  );
};

export default SearchLightBox;

import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Stays from "./assets/stays.json";
import SearchLightBox from "./components/SearchLightBox";

function App() {
  const [searchMode, setSearchMode] = useState(false);
  const [stays, setStays] = useState(Stays);
  const [cities, setCities] = useState(filterCities);
  const [currentCity, setCurrentCity] = useState("Helsinki");
  const [numberOfGuests, setNumberOfGuests] = useState({
    totalCount: 0,
    adults: 0,
    children: 0,
  });
  function changeCurrentCity(currentId) {
    for (let i = 0; i < cities.length; i++) {
      if (cities[i].id === currentId) {
        setCurrentCity(cities[i].cityName);
      }
    }
  }

  function filterCities() {
    const cityArray = stays.map((stay) => stay.city);
    const filteredCities = [...new Set(cityArray)];
    const cityObject = filteredCities.map((city) => ({
      cityName: city,
      id: nanoid(),
    }));
    return cityObject;
  }

  function changingNumberofGuests(btnId) {
    const maxNumberOfGuests = 10;

    if (btnId === "add-children-btn") {
      setNumberOfGuests((prevCount) => {
        return prevCount < maxNumberOfGuests
          ? {
              ...prevCount,
              children: prevCount.children + 1,
              totalCount: prevCount.totalCount + 1,
            }
          : prevCount;
      });
    } else if (btnId === "subtract-children-btn") {
      setNumberOfGuests((prevCount) => {
        return prevCount.children > 0
          ? {
              ...prevCount,
              children: prevCount.children - 1,
              totalCount: prevCount.totalCount - 1,
            }
          : prevCount;
      });
    } else if (btnId === "add-adult-btn") {
      setNumberOfGuests((prevCount) => {
        return prevCount < maxNumberOfGuests
          ? {
              ...prevCount,
              adults: prevCount.adults + 1,
              totalCount: prevCount.totalCount + 1,
            }
          : prevCount;
      });
    } else {
      setNumberOfGuests((prevCount) => {
        return prevCount.adults > 0
          ? {
              ...prevCount,
              adults: prevCount.adults - 1,
              totalCount: prevCount.totalCount - 1,
            }
          : { ...prevCount };
      });
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", detectKeydown, true);
  }, []);
  const detectKeydown = (e) => {
    if (e.key === "Escape") {
      setSearchMode((prev) => !prev);
    }
  }

  const cityResults = stays.filter((stay) => stay.city === currentCity);

  const numberOfGuestResults = stays.filter(
    (stay) => stay.maxGuests >= numberOfGuests
  );

  return (
    <div className="App relative">
      {searchMode && (
        <SearchLightBox
          changeCurrentCity={changeCurrentCity}
          currentCity={currentCity}
          cities={cities}
          totalGuests={numberOfGuests}
          changingNumberofGuests={changingNumberofGuests}
        />
      )}
      <Header
        searchModeActive={() => setSearchMode((prev) => !prev)}
        currentCity={currentCity}
      />
      <Main
        cityResults={cityResults}
        numberOfGuestResults={numberOfGuestResults}
      />
    </div>
  );
}

export default App;

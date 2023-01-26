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
  const [currentCity, setCurrentCity] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState({
    totalCount: 0,
    adults: 0,
    children: 0,
  });
  const [results, setResults] = useState(filterResults());
  const [width, setWindowWidth] = useState(0);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  useEffect(() => {
    document.addEventListener("keydown", detectKeydown, true);

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const detectKeydown = (e) => {
    if (e.key === "j") {
      setSearchMode((prev) => !prev);
    }
  };
  useEffect(() => {
    setResults(filterResults());
  }, [searchMode]);

  const responsive = {
    resultGrid: width > 604
  }



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

  function addChildrenCount() {
    setNumberOfGuests((prevCount) => {
      return prevCount.totalCount < 10
        ? {
            ...prevCount,
            children: prevCount.children + 1,
            totalCount: prevCount.totalCount + 1,
          }
        : prevCount;
    });
  }
  function subtractChildrenCount() {
    setNumberOfGuests((prevCount) => {
      return prevCount.children > 0
        ? {
            ...prevCount,
            children: prevCount.children - 1,
            totalCount: prevCount.totalCount - 1,
          }
        : prevCount;
    });
  }
  function addAdultCount() {
    setNumberOfGuests((prevCount) => {
      return prevCount.totalCount < 10
        ? {
            ...prevCount,
            adults: prevCount.adults + 1,
            totalCount: prevCount.totalCount + 1,
          }
        : prevCount;
    });
  }
  function subtractAdultCount() {
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

  function filterResults() {
    if (currentCity || numberOfGuests.totalCount) {
      if (currentCity) {
        return stays.filter((stay) => stay.city === currentCity);
      } else if (numberOfGuests.totalCount) {
        return stays.filter(
          (stay) => stay.maxGuests >= numberOfGuests.totalCount
        );
      }
    } else {
      return stays;
    }
  }

  // const numberOfGuestResults = stays.filter(
  //   (stay) => {
  //     return (numberOfGuests.totalCount ?
  //       stay.maxGuests >= numberOfGuests.totalCount:
  //       stay.maxGuests)}
  // );

  return (
    <div className="App relative">
      {searchMode && (
        <SearchLightBox
          changeCurrentCity={changeCurrentCity}
          currentCity={currentCity}
          cities={cities}
          totalGuests={numberOfGuests}
          addChildrenCount={addChildrenCount}
          addAdultCount={addAdultCount}
          subtractAdultCount={subtractAdultCount}
          subtractChildrenCount={subtractChildrenCount}
          lightboxDesktopStyle={responsive.resultGrid}
        />
      )}
      <Header
        headerDesktopStyle={responsive.resultGrid}
        searchModeActive={() => setSearchMode((prev) => !prev)}
        currentCity={currentCity}
      />
      <Main
        results={results}
        displayGrid={responsive.resultGrid}
       
      />
    </div>
  );
}

export default App;

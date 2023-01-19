import { useState, useRef, useEffect } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Stays from './assets/stays.json'
import SearchLightBox from './components/SearchLightBox'



function App() {



  const [searchMode, setSearchMode] = useState(false)
  const [stays, setStays] = useState(Stays)
  const [cities, setCities] = useState(filterCities)
  const [currentCity, setCurrentCity] = useState("Helsinki")
 

  function changeCurrentCity(currentId) {
    set
  }
  

function filterCities () {
  const cityArray = stays.map(stay => stay.city)
  const filteredCities = [...new Set(cityArray)]
  const cityObject = filteredCities.map(city => ({cityName:city, id:nanoid()}))
  return cityObject
}

useEffect(() => {
  document.addEventListener('keydown', detectKeydown, true)

},[])
  const detectKeydown = (e) => {
    if(e.key === "Escape"){
      setSearchMode(prev => !prev)
    }
  }

  const cityResults = stays.filter(stay => stay.city === currentCity)
 

  return (
    <div className="App relative">
      { searchMode &&
      <SearchLightBox currentCity={currentCity} cities={cities} />
    }
      <Header searchModeActive={() => setSearchMode(prev => !prev)} currentCity={currentCity}/>
      <Main  cityResults = {cityResults} />

    </div>
  )
}

export default App

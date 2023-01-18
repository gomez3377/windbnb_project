import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Stays from './assets/stays.json'
import SearchLightBox from './components/SearchLightBox'
function App() {


  const [searchMode, setSearchMode] = useState(true)
  const [stays, setStays] = useState(Stays)
  const [cities, setCities] = useState(filterCities)
  const [currentCity, setCurrentCity] = useState("Helsinki")


function filterCities () {
  const cityArray = stays.map(stay => stay.city)
  const filteredCities = [...new Set(cityArray)]
  return filteredCities
}


  const cityResults = stays.filter(stay => stay.city === currentCity)
  console.log(cities)

  return (
    <div className="App relative">
      { searchMode &&
      <SearchLightBox currentCity={currentCity} cities={cities} />
    }
      <Header currentCity={currentCity}/>
      <Main  cityResults = {cityResults} />

    </div>
  )
}

export default App

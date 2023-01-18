import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Stays from './assets/stays.json'
import SearchLightBox from './components/SearchLightBox'
function App() {


  const [searchMode, setSearchMode] = useState(true)
  const [stays, setStays] = useState(Stays)
  const [currentCity, setCurrentCity] = useState("Helsinki")

  const cityResults = stays.filter(stay => stay.city === currentCity)

  console.log(cityResults)

  return (
    <div className="App relative">
      { searchMode &&
      <SearchLightBox />
    }
      <Header/>
      <Main  cityResults = {cityResults} />

    </div>
  )
}

export default App

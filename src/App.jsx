import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Stays from './assets/stays.json'

function App() {



  const [stays, setStays] = useState(Stays)


  const sampleElements = stays.filter(stay => stay.city === "Helsinki")

  console.log(sampleElements)

  return (
    <div className="App">
      <Header/>
      <Main  sampleElements = {sampleElements} />

    </div>
  )
}

export default App

import React from 'react'
import LocationResult from './LocationResult'

const DestinationFilter = ({ currentCity, active, selectCityFilter }) => {
  const buttonStyle = active 
  ? "border border-solid border-[#333333] rounded-2xl w-full text-left p-3 h-full"
  : "w-full text-left p-3 h-full"

  return (
    <>
   
    <button onClick={selectCityFilter} className={buttonStyle}>
    <h4 className="uppercase text-[9px]">Location</h4>
    <p className="text-sm">{currentCity}, Finland</p>
    </button>
    
  
    </>
  )
}

export default DestinationFilter
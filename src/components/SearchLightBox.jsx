import React from 'react'
import { FaSearch } from 'react-icons/fa'
import LocationResult from './LocationResult'

const SearchLightBox = () => {
  return (
    <div>
        <input type="text" />
        <ul>
            <LocationResult/>
        </ul>
        <input type="text" />
        <button> <FaSearch/> Search </button>
    </div>
  )
}

export default SearchLightBox
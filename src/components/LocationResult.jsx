import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

const LocationResult = ({ cityName }) => {
  return (
    <li className='flex items-center text-[#4f4f4f] mb-9'>
      <FaMapMarkerAlt className='ml-4 text-sm' />
        <p className='ml-2.5 text-sm'>{cityName}, Finland</p>
    </li>
  )
}

export default LocationResult
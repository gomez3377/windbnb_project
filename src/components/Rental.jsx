import React from 'react'
import { FaStar } from 'react-icons/fa'
import Photo from '../assets/img/sample.jpg'



const Rental = () => {
  return (
    <div className=''>
     <img src={Photo} alt="rental" className='rounded-3xl' />
     <div className='mt-4 rental-info flex items-center justify-between'>
         <div className='super-rating border rounded-xl border-[#4f4f4f]'>Super Host</div>
         <p className='rental-space'>Entire Apartment</p>
         <p className='number-of-beds'>2 Beds</p>
         <div className='rating flex items-center'>
            <FaStar />
            <p>4.40</p>
         </div>
     </div>
     <h3>Stylist apartment in the center of the city</h3>
    </div>
  )
}

export default Rental
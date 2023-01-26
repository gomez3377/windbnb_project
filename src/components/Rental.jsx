import React from 'react'
import { FaStar } from 'react-icons/fa'




const Rental = ({ rental, displayGrid }) => {
  return (
    <div className={!displayGrid ? "mb-8" : "" }>
     <img src={rental.photo} alt="rental" className="object-cover w-full  rounded-3xl h-[269px] " />
     <div className='mt-4 rental-info flex items-center justify-between text-s'>
         {rental.superHost && <p className='super-rating border rounded-xl border-[#4f4f4f] text-[#4f4f4f]
         px-2.5 py-1.5 text-xs uppercase font-bold'>Super Host</p>}
         <p className='rental-type  font-medium text-[#828282]'>{rental.type}</p>
        { rental.beds && <p className='number-of-beds  font-medium text-[#828282]'>{rental.beds} Beds</p>}
         <div className='rating flex'>
            <FaStar className='text-red-500' />
            <p className='text-[#4f4f4f] ml-2'>{rental.rating}</p>
         </div>
     </div>
     <h3 className='mt-3 font-semibold text-base'>{rental.title}</h3>
    </div>
  )
}

export default Rental
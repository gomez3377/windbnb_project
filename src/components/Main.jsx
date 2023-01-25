import React from 'react'
import Rental from './Rental'
import { nanoid } from 'nanoid'


const Main = ( { cityResults, numberOfGuestResults }) => {

  
  // const rentalElements = cityResults.map(element =>  <Rental  rental={element} />)
  const rentalElements = cityResults.map(element =>  <Rental key={nanoid()} rental={element} />)
  // const rentalElements2 = filteredResults.map(element =>  <Rental key={nanoid()} rental={element} />)
  return (
    <main className='mx-20'>
      <div id="rental-header" className='flex justify-between items-baseline'>
        <h1 className='text-2xl font-bold'>Stays in Finland</h1>
        <p className='text-sm text-[#4f4f4f]'> {`${cityResults.length + 1}+ ${cityResults.length  > 0 ? "stays" : "stay"}`}</p>
      </div>

        <div className="my-8 grid auto-rows-auto grid-cols-3 gap-8">
        {rentalElements}
        </div>
    </main>
  )
}

export default Main
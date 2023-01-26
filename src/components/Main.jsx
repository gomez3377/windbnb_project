import React from 'react'
import Rental from './Rental'
import { nanoid } from 'nanoid'


const Main = ( { results, displayGrid }) => {

  
  const rentalElements = results.map(element =>  <Rental key={nanoid()} rental={element} displayGrid={displayGrid}  />)
 
  return (
    <main className={`${displayGrid  ? "mx-20" : "mx-3"} `}>
      <div id="rental-header" className='flex justify-between items-baseline'>
        <h1 className={`${displayGrid ? "text-2xl" : "text-lg"} font-bold`}>Stays in Finland</h1>
        <p className='text-sm text-[#4f4f4f]'> {`${results.length}+ ${results.length  > 0 ? "stays" : "stay"}`}</p>
      </div>

        <div className={`${displayGrid ? "grid auto-rows-auto grid-cols-3 gap-8 my-8" : "block my-6"}`}>
        {rentalElements}
        </div>
    </main>
  )
}

export default Main
import React from 'react'
import Rental from './Rental'


const Main = ( { cityResults }) => {

  const rentalElements = cityResults.map(element =>  <Rental  rental={element} />)
  return (
    <main className='mx-20'>
        <h1 className='text-2xl font-bold'>Stays in Finland</h1>
        <div className="my-8 grid auto-rows-auto grid-cols-3 gap-8">
        {rentalElements}
        </div>
    </main>
  )
}

export default Main
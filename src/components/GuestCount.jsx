import React from 'react'

const GuestCount = ( { totalGuests, changingNumberofGuests } ) => {
  return (
     <div  className="ml-[600px]" id="selectGuests">

            <div className="mb-12" id="adults-filter">
              <p className="font-bold text-sm">Adults</p>
              <p className="text-[#bdbdbd] text-sm">Ages 13 or above</p>
              <div className="count-container flex items-center">
                <button
                  onClick={() => changingNumberofGuests("subtract-adult-btn")}
                  className="border border-solid border-[#828282] rounded text-sm flex items-center justify-center w-6 h-6 text-[#828282]"
                  >
                  -
                </button>
                <p className="m-4">{totalGuests.adults}</p>
                <button
                  onClick={() => changingNumberofGuests("add-adult-btn")}
                  className="border border-solid border-[#828282] rounded text-sm flex items-center justify-center w-6 h-6 text-[#828282]"
                  >
                  +
                </button>
              </div>
            </div>
            <div className="mb-16" id="children-filter">
              <p className="font-bold text-sm">Children</p>
              <p className="text-[#bdbdbd] text-sm">Ages 2-12</p>
              <div className="count-container flex items-center">
                <button
                  onClick={() => changingNumberofGuests("subtract-children-btn")}
                  className="border border-solid border-[#828282] rounded text-sm flex items-center justify-center w-6 h-6 text-[#828282]"
                  >
                  -
                </button>
                <p className="m-4">{totalGuests.children}</p>
                <button
                  onClick={() => changingNumberofGuests("add-children-btn")}
                  className="border border-solid border-[#828282] rounded text-sm flex items-center justify-center w-6 h-6 text-[#828282]"
                  >
                  +
                </button>
              </div>
            </div>
                  </div> 
  )
}

export default GuestCount
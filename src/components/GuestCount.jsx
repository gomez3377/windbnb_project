import React from 'react'

const GuestCount = ( { count,addAdultCount,addChildrenCount,subtractAdultCount, subtractChildrenCount } ) => {
  return (
     <div  className="ml-[524px]" id="selectGuests">

            <div className="mb-12" id="adults-filter">
              <p className="font-bold text-sm">Adults</p>
              <p className="text-[#bdbdbd] text-sm">Ages 13 or above</p>
              <div className="count-container flex items-center">
                <button
                  onClick={subtractAdultCount}
                  className="border border-solid border-[#828282] rounded text-sm flex items-center justify-center w-6 h-6 text-[#828282]"
                  >
                  -
                </button>
                <p className="m-4">{count.adults}</p>
                <button
                  onClick={addAdultCount}
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
                  onClick={subtractChildrenCount}
                  className="border border-solid border-[#828282] rounded text-sm flex items-center justify-center w-6 h-6 text-[#828282]"
                  >
                  -
                </button>
                <p className="m-4">{count.children}</p>
                <button
                  onClick={addChildrenCount}
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
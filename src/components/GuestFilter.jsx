import React from 'react'

const GuestFilter = ({ count, active, selectGuestFilter } ) => {
  const buttonStyle = active 
                      ? "border border-solid border-[#333333] rounded-2xl w-full text-left p-3 h-full"
                      : "w-full text-left p-3 h-full"

  return (
    <>
     <button 
               className={buttonStyle}
              id="filted-guests"
              onClick={selectGuestFilter}
            >
              <h4 className="uppercase text-[9px]">Guests</h4>
              <p className="text-sm">{count.totalCount ? `${count.totalCount} ${count.totalCount > 1 ? "guests" : "guest"}` : "Add guests"}</p>
            </button>
    </>
  )
}

export default GuestFilter
import React from 'react'
import logoText from '../assets/img/logo.png'
import { FaSearch } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='flex justify-between mx-20 my-8'>
     
            <img className='logo' src={logoText} alt="logo" />
        <div className="search-bar flex items-center p-5 rounded-2xl">
            <p className='search-results text-sm'>Helsinki, Finland</p>
            <input type="text" placeholder='Add Guests' />
            <button className=''>
               <FaSearch />
                </button>
        </div>

    </header>
  )
}

export default Header
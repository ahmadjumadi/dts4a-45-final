import React from 'react'
import { Link } from 'react-router-dom';
import MenuDropDown from './MenuDropDown';
import { UserAuth } from '../context/AuthContext'
import Search from './Search';

const Navbar = () => {
  const { user } = UserAuth();

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>MOVIE</h1>
      </Link>
      <Search />
      {user?.email ? (
      <div>
      <MenuDropDown />        
      </div>
        ) : (
          <div>
            <Link to='/login'>
              <button className='text-white pr-4'>Sign In</button>
            </Link>
            <Link to='/signup'>
              <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
            </Link>
          </div>
        )}
    </div>
  )
}

export default Navbar
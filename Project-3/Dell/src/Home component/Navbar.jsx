import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const { logout ,isAuthenticated} = useAuth0();
  return (
    <>
      {/* Navbar container */}
      <div className='flex justify-between p-3 items-center bg-white shadow-sm'>
        
        {/* Logo */}
        <div className='flex items-center'>
          <img className='h-8' src='https://i.ibb.co/gPFm4Tv/Dell-Technologies-Logo-2.png' alt="Dell Logo" />
        </div>

        {/* Search Bar */}
        <div className='flex items-center border border-gray-300 rounded-md flex-grow max-w-lg'>
          <input
            className='pl-4 py-2 w-full text-sm text-gray-700 focus:outline-none rounded-l-md'
            type='text'
            placeholder='Search Dell'
          />
          <button className='px-3 bg-gray-100 rounded-r-md'>
            <i className="ri-search-line text-gray-500"></i>
          </button>
        </div>

        {/* Navbar Links */}
        <div className='flex items-center space-x-6 text-gray-600'>
          <div className='flex items-center space-x-1'>
            <i className="ri-user-3-line text-lg"></i>
            {isAuthenticated ?<p onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='text-sm cursor-pointer'>Sign Out</p>
            : <Link to='/login'><p className='text-sm'>Sign In</p></Link>
            }

          </div>

          <div className='flex items-center space-x-1'>
            <i className="ri-customer-service-2-line text-lg"></i>
            <Link to='/contact-us'><p className='text-sm'>Contact Us</p></Link>
          </div>

          <div className='flex items-center space-x-1'>
            <i className="ri-global-line text-lg"></i>
            <p className='text-sm'>IN/EN</p>
          </div>

          <div className='flex items-center space-x-1'>
            <i className="ri-shopping-cart-line text-lg"></i>
            <p className='text-sm'>Cart</p>
          </div>
        </div>
      </div>

      {/* Sub-Navbar Links */}
      <div className='flex justify-center bg-gray-50 py-2 shadow-sm'>
        <div className='flex space-x-8 text-sm text-gray-600'>
          <p className='cursor-pointer hover:text-black'>Artificial Intelligence</p>
          <p className='cursor-pointer hover:text-black'>IT Infrastructure</p>
          <Link to='/computer'><p className='cursor-pointer hover:text-black'>Computers & Accessories</p></Link>
          <p className='cursor-pointer hover:text-black'>Services</p>
          <p className='cursor-pointer hover:text-black'>Support</p>
          <p className='cursor-pointer hover:text-black'>Deals</p>
          <Link to='findstore'><p className='cursor-pointer hover:text-black'>Find a Store</p></Link>
        </div>
      </div>
    </>
  );
};

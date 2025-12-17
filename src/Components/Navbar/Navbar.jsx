import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const links = <>
    <Link className='text-base-200 pr-2' to={'/'}><a href="">Home</a></Link>
    <Link className='text-base-200 pr-2' to={'/about'}><a href="">About</a></Link>
    <Link className='text-base-200' to={'/contact'}><a href="">Contact</a></Link>
    </>
    return (
        <div>
            <div className="navbar bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="dropdown-content  bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 rounded-box z-1 mt-4 w-52 p-3 shadow">
        {links}
      </ul>
    </div>
    <Link to={'/'} className=" text-xl text-base-200">TONMOY</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-3 px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to={'/login'} className="btn px-6 py-3 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-lg hover:bg-white/30 transition">
  login</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;
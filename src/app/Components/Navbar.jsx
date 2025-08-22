import React from 'react';
import { GiClothes } from 'react-icons/gi';

const Navbar = () => {

    const links=<>
    <li>Products</li>
    </>
    return (
       <div className="navbar  shadow-sm px-5 md:px-10" >
  <div className="navbar-start  ">
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -ml-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content  z-1 mt-3  p-2 shadow  ">
        {
            links
        }
      </ul>
    </div>
    <div className='flex justify-center items-center -ml-4'>
<div className="-mr-3 ">
                <GiClothes size={20}/>
              </div>
<a className="btn btn-ghost text-xl ">Genz <span className='text-yellow-500 -ml-1'>Wear</span></a>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
    {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-secondary">Button</a>
  </div>
</div>
    );
};

export default Navbar;
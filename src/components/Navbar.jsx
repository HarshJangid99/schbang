import React from 'react';
import gif from '../assets/animation.gif';
import menu from "../assets/menu.png"
export default function Navbar() {
  return (
    <>
    <div className=' relative'>
      <nav className="px-8 py-3 flex justify-between w-full ">
        <div className="logo flex space-x-1">
          <h1 className="tracking-tighter text-black font-bold my-1 text-4xl font-sans">Schbang</h1>
          <div className="animatedtext w-36 h-12 flex items-center">
            <img src={gif} alt="" />
          </div>
        </div>
        {/* This section will be hidden on small screens and displayed as flex on large screens */}
        <div className="navigation hidden lg:flex lg:items-center">
          <ul className="flex">
            <li className="cursor-pointer font-semibold mx-5">Work</li>
            <li className="cursor-pointer font-semibold mx-5">Solutions</li>
            <li className="cursor-pointer font-semibold mx-5">About</li>
            <li className="cursor-pointer font-semibold mx-5">Resources</li>
            <li className="cursor-pointer font-semibold mx-5">Careers</li>
          </ul>
          <button className="w-44 p-6 bg-black text-white rounded-full ml-5 font-semibold hover:bg-white hover:text-black border-2 border-black">
            Contact Us &rarr;
          </button>
        </div>
        <div className='lg:hidden'>
          <img src={menu} alt="" />
        </div>
    

      </nav>
   
      </div>
    </>
  );
}

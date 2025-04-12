import React, { useEffect, useRef } from 'react'
import logo from '../../assets/Images/Logo/logo.png'
import { NavLink } from 'react-router-dom';

function NavBar() {


let nav = useRef(null)
let navbar = useRef(null)
const hideNav = ()=> {
  nav.current.classList.add('hidden')
}

function changeBG() {
  let scroll = window.scrollY;
  if (scroll < 100) {
    navbar.current.style.backgroundColor = "transparent";
  } else {
    navbar.current.style.backgroundColor = "#0e0b22";
  }
}

useEffect(() => {
  const handleScroll = () => {
    changeBG();
  };
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  



  return <>
  <nav ref={navbar} className="fixed top-0 left-0  w-full z-20">
  <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto py-4">
    <a href={`/`} className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} className="h-8" alt="Flowbite Logo" />
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" ref={nav} id="navbar-default">
      <ul className="font-medium sm:flex-col flex md:flex-row  p-4 md:p-0 rounded-lg text-white sm:bg-section md:bg-transparent lg:bg-transparent xl:bg-transparent ">
        <li>
          <NavLink to={`/`} className="NavBarLink" aria-current="page" onClick={()=>hideNav() }>Home</NavLink>
        </li> 
        <li>
          <NavLink to={"Games"} className=" NavBarLink" aria-current="page" onClick={()=>hideNav() }>Games</NavLink>
        </li> 
        <li>
          <NavLink to={"Stores"}  className="NavBarLink" aria-current="page" onClick={()=>hideNav() }>Store</NavLink>
        </li> 
        <li>
          <NavLink to={"Category"}  className="NavBarLink" aria-current="page" onClick={()=>hideNav() }>Category</NavLink>
        </li> 
        <li>
          <NavLink to={"Creators"}  className="NavBarLink" aria-current="page" onClick={()=>hideNav() }>Creators</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
}

export default NavBar

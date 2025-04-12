import React from 'react'
import GameIcon from '../../assets/Images/Logo/logo.png'


function Footer() {
  return <>
  <footer className='bg-section2 pt-10'>
    <div className="container">
      <div className="grid grid-cols-10">
        <div className="sm:col-span-10 sm:order-1 md:col-span-3 md:order-1 lg:col-span-3 lg:order-1 xl:col-span-3 xl:order-1">
            <h2 className='text-white text-4xl font-semibold sm:text-center md:text-center lg:text-start xl:text-start'>Subscribe To Newsletter</h2>
        </div>
        <div className="sm:col-span-10 sm:order-3 md:col-span-4 md:order-2 lg:col-span-3 lg:order-1 xl:col-span-4 xl:order-1 ">
            <form >   
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:rounded-lg" placeholder="Enter Your Email..." required />
                    <button type="submit" className="text-white absolute end-0 bottom-0 h-full w-1/3 rounded-lg  bg-main font-medium text-lg px-4 py-2">Subscribe</button>
                </div>
            </form>
        </div>
        <div className="sm:col-span-10 sm:order-2 md:col-span-3 md:order-3 lg:col-span-3 lg:order-1 xl:col-span-3 xl:order-1 my-8">
          <ul className='flex gap-4 justify-center h-full items-center'>
            <li><i className="fa-brands fa-facebook text-main text-2xl cursor-pointer"></i></li>
            <li><i className="fa-brands fa-instagram text-main text-2xl cursor-pointer"></i></li>
            <li><i className="fa-brands fa-x-twitter text-main text-2xl cursor-pointer"></i></li>
            <li><i className="fa-brands fa-google-plus-g text-main text-2xl cursor-pointer"></i></li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 p-5">
        <div className="sm:col-span-12  md:col-span-6 lg:col-span-3 xl:col-span-3 ">
          <div className="">
            <img src={GameIcon} className='w-16 h-14' alt="Site Logo" />
          </div>
          <p className='pt-5 text-xl text-white hover:tracking-[1px] transition-all duration-500 hover:text-main w-[99%]'>Lorem ipsum dolor sit amet coetur, adipisicing elit. Eaque tempore quos atque magni, nobis earum omnis inventore ut.</p>
        </div>
        <div className="sm:col-span-12  md:col-span-6 lg:col-span-3 xl:col-span-3">
          <h3 className='text-main text-3xl font-semibold' >Categories</h3>
          <ul className='mt-3'>
            <li className='text-white flex items-center mt-2 group/parent w-fit'>
              <i className="fa-solid fa-play text-white p-[6px] text-[10px] bg-main rounded-[100%] me-2 group-hover/parent:text-main transition-all duration-300"></i>
               <span className='group-hover/parent:tracking-[1px] group-hover/parent:text-main font-semibold  transition-all duration-300'>Mmorpg</span>
            </li>
            <li className='text-white flex items-center mt-2 group/parent w-fit'>
              <i className="fa-solid fa-play text-white p-[6px] text-[10px] bg-main rounded-[100%] me-2 group-hover/parent:text-main transition-all duration-300"></i>
               <span className='group-hover/parent:tracking-[1px] group-hover/parent:text-main font-semibold  transition-all duration-300'>Shooter</span>
            </li>
            <li className='text-white flex items-center mt-2 group/parent w-fit'>
              <i className="fa-solid fa-play text-white p-[6px] text-[10px] bg-main rounded-[100%] me-2 group-hover/parent:text-main transition-all duration-300"></i>
               <span className='group-hover/parent:tracking-[1px] group-hover/parent:text-main font-semibold  transition-all duration-300'>Sailing</span>
            </li>
            <li className='text-white flex items-center mt-2 group/parent w-fit'>
              <i className="fa-solid fa-play text-white p-[6px] text-[10px] bg-main rounded-[100%] me-2 group-hover/parent:text-main transition-all duration-300"></i>
               <span className='group-hover/parent:tracking-[1px] group-hover/parent:text-main font-semibold  transition-all duration-300'>Pixel</span>
            </li>
            <li className='text-white flex items-center mt-2 group/parent w-fit'>
              <i className="fa-solid fa-play text-white p-[6px] text-[10px] bg-main rounded-[100%] me-2 group-hover/parent:text-main transition-all duration-300"></i>
               <span className='group-hover/parent:tracking-[1px] group-hover/parent:text-main font-semibold  transition-all duration-300'>Permadeath</span>
            </li>
              <li className='text-white flex items-center mt-2 group/parent w-fit'>
                <i className="fa-solid fa-play text-white p-[6px] text-[10px] bg-main rounded-[100%] me-2 group-hover/parent:text-main transition-all duration-300"></i>
                <span className='group-hover/parent:tracking-[1px] group-hover/parent:text-main font-semibold  transition-all duration-300'>Superhero</span>
              </li>
          </ul>
        </div>
        <div className="sm:col-span-12  md:col-span-6 lg:col-span-3 xl:col-span-3">
          <h3 className='text-main text-3xl font-semibold' >Page</h3>
          <ul className='mt-3'>
            <li className='text-white flex items-center mt-2 group/parent w-fit'>
              <i className="fa-solid fa-play text-white p-[6px] text-[10px] bg-main rounded-[100%] me-2 group-hover/parent:text-main transition-all duration-300"></i>
               <span className='group-hover/parent:tracking-[1px] group-hover/parent:text-main font-semibold  transition-all duration-300'>Home</span>
            </li>
            <li className='text-white flex items-center mt-2 group/parent w-fit'>
              <i className="fa-solid fa-play text-white p-[6px] text-[10px] bg-main rounded-[100%] me-2 group-hover/parent:text-main transition-all duration-300"></i>
               <span className='group-hover/parent:tracking-[1px] group-hover/parent:text-main font-semibold  transition-all duration-300'>Games</span>
            </li>
            <li className='text-white flex items-center mt-2 group/parent w-fit'>
              <i className="fa-solid fa-play text-white p-[6px] text-[10px] bg-main rounded-[100%] me-2 group-hover/parent:text-main transition-all duration-300"></i>
               <span className='group-hover/parent:tracking-[1px] group-hover/parent:text-main font-semibold  transition-all duration-300'>Category</span>
            </li>
            <li className='text-white flex items-center mt-2 group/parent w-fit'>
              <i className="fa-solid fa-play text-white p-[6px] text-[10px] bg-main rounded-[100%] me-2 group-hover/parent:text-main transition-all duration-300"></i>
               <span className='group-hover/parent:tracking-[1px] group-hover/parent:text-main font-semibold  transition-all duration-300'>Stores</span>
            </li>
            <li className='text-white flex items-center mt-2 group/parent w-fit'>
              <i className="fa-solid fa-play text-white p-[6px] text-[10px] bg-main rounded-[100%] me-2 group-hover/parent:text-main transition-all duration-300"></i>
               <span className='group-hover/parent:tracking-[1px] group-hover/parent:text-main font-semibold  transition-all duration-300'>Creators</span>
            </li>
          </ul>
        </div>
        <div className="sm:col-span-12  md:col-span-6 lg:col-span-3 xl:col-span-3">
          <h3 className='text-main text-3xl font-semibold' >Links</h3>
          <ul className='mt-3'>
            <li className='text-white flex items-center mt-2 group/parent w-fit'>
              <i className="fa-solid fa-play text-white p-[6px] text-[10px] bg-main rounded-[100%] me-2 group-hover/parent:text-main transition-all duration-300"></i>
               <span className='group-hover/parent:tracking-[1px] group-hover/parent:text-main font-semibold transition-all duration-300'>GitHub</span>
            </li>
            <li className='text-white flex items-center mt-2 group/parent w-fit'>
              <i className="fa-solid fa-play text-white p-[6px] text-[10px] bg-main rounded-[100%] me-2 group-hover/parent:text-main transition-all duration-300"></i>
               <span className='group-hover/parent:tracking-[1px] group-hover/parent:text-main font-semibold  transition-all duration-300'>Linkedin</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
        <p className='bg-main text-white text-center py-5 font-semibold'>All Copyright@ Reserved Haitham Rabea</p>
  </footer>
  </>
}

export default Footer

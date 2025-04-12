import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSpecificGame } from '../../Redux/SpecificGameSlice'
import Loading from '../Loading/Loading'
import { Helmet } from 'react-helmet'








export default function GameDetails() { 
let dispatch = useDispatch()
let {id} = useParams()
let MainImg = useRef(null)
let {gameDetails , isLoading} = useSelector((state)=> state.SpecificGameSlice)


let getDetails = ()=> {
  dispatch(getSpecificGame(id))
  window.scrollTo(0, 0);
}


useEffect(()=>{
  getDetails()
}, [dispatch, id])


const handleChange = (e) => {
  MainImg.current.src = e.target.src
}

  return <>
  <Helmet>
     <title>{gameDetails.title}</title>
  </Helmet>
  <section  id='SpesificStore' >
    <div className="container min-h-[100vh]">
      {
        isLoading ?
        <Loading/> 
        : 
        <>
          <div className="grid grid-cols-12 gap-5 my-36">
        <div className="sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
          <div className="rounded-lg overflow-hidden max-h-[420px]">
            <div className="">
            <img ref={MainImg} src={gameDetails.thumbnail} className='w-full' alt="Game picture"/>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-5">
            <div className="rounded-lg overflow-hidden cursor-pointer"><img onClick={(e)=> handleChange(e)} src={gameDetails.thumbnail} className='w-full' alt="Game picture"/></div>
            {gameDetails.screenshots?.slice(0 , 2 ).map((img , index)=> {
              return <div key={index} className="rounded-lg overflow-hidden cursor-pointer"><img onClick={(e)=> handleChange(e)} src={img.image} className='w-full' alt="Game picture"/></div>
            })}
          </div>
        </div>
        <div className="sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
              <h2 className='text-3xl font-bold text-white pb-2 relative before:absolute before:h-1 before:w-10 before:bg-red-600 before:top-full before:left-0 after:absolute after:h-1 after:w-6 after:bg-red-600 after:top-[120%] after:left-0'>{gameDetails.title}</h2>
              <div className="text-text text-lg font-semibold mt-6 my-3">
              <p>{gameDetails.short_description}</p>
        </div>
        <ul className='mb-2' >
          <li className='text-white text-lg font-semibold p-1'> <i className="fa-solid fa-clock text-lg me-1"></i> Released Date : <span  className='text-text text-base ms-1'>{gameDetails.release_date}</span></li>
          <li className='text-white text-lg font-semibold p-1'> <i className="fa-solid fa-code text-lg me-1"></i> Developers  : <span className='text-text text-base ms-1'>{gameDetails.developer}</span></li>
          <li className='text-white text-lg font-semibold p-1'> <i className="fa-solid fa-layer-group text-lg me-1"></i> Genres  : <span className='text-text text-base ms-1'>{gameDetails.genre}</span></li>
          <li className='text-white text-lg font-semibold p-1'> <i className="fa-solid fa-user-secret text-lg me-1"></i> Publishers  : <span className='text-text text-base ms-1'>{gameDetails.publisher}</span></li>
        </ul>
        <Link 
        to={gameDetails.freetogame_profile_url}
        target='_blank'
        className='text-2xl font-bold text-main bg-transparent'
        >
        play now
        </Link>
        </div>
      </div>
        </>
      }
    </div>
  </section>
  </>
}

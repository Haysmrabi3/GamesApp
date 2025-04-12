import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../../Redux/GamesSclice';
import { Link } from 'react-router-dom';














function RecentGames() {
  const disPatch = useDispatch();
  let {games} = useSelector((state)=> state.GameSlice)
  
  useEffect(()=> {
    disPatch(getGames())
  }, [])




  return <>
<section id='RecentGames' >
<div className="container mt-10 py-28">
<h2 className='text-4xl font-bold text-white mb-4'>
    Recent 
    <span className='text-main font-semibold'> Games</span> 
  </h2>
  <div className="grid grid-cols-9 gap-3">
    {
      games?.slice(24 , 27 ).map((game , inedx)=>{
        return <div key={inedx} className="sm:col-span-9 md:col-span-3 lg:col-span-3 xl:col-span-3  mt-3 border border-gray-700 rounded-lg ">
        <div className=" rounded-lg overflow-hidden ">
                <Link to={`GameDetails/${game.id}`}>
                  <img src={game.thumbnail} className='w-full cursor-pointer hover:scale-110 transition-all duration-500' alt="gameImg" />
                </Link>
        </div>
          <h3 className='text-2xl font-bold text-white'>{game.title}</h3>
        <div className="flex justify-between mt-3">
          <p className='text-white text-xl'>Built for</p>
          <div className="">
          <i className="fa-regular fa-star p-1 bg-yellow-300 text-white text-xl rounded-tl-md"></i>
          <i className="fa-regular fa-heart p-1 bg-red-600 text-white text-xl"></i>
          </div>
        </div>
      </div>
      })
    }
  </div>
</div>
</section>
  </>
}

export default RecentGames

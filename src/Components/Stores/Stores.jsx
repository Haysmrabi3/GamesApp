import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading/Loading';
import { getStores } from '../../Redux/StoresSlice';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';








function Stores() {
  const disPatch = useDispatch();
  let {Stores , isLoading} = useSelector((state)=> state.StoreSlice)
  
  
  
  
  useEffect(()=> {
    disPatch(getStores())
  }, [])





  return <>
    <Helmet>
     <title>Stores</title>
  </Helmet>
  <section id='Stores'>
    <div className="container py-10 min-h-[100vh]">
      <h2 className='text-white text-4xl font-semibold'>Stores</h2>
      {
        isLoading ?
        <Loading/>
        :
        <>
      <div className="grid grid-cols-12 gap-5 mt-5">
        {Stores?.map((store , index)=> {
          return <div key={index} className="sm:col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-3">
          <div className="rounded-lg overflow-hidden">
            <Link to={`/SpesificStore/${store.id}`}>
            <img src={store.image_background} className='w-full min-h-[232px] cursor-pointer hover:scale-110 transition-all duration-500' alt="GamePicture" />
            </Link>
          </div>
          <h2 className='text-white text-xl text-center font-semibold p-3' >{store.name}</h2>
        </div>
        })}
      </div>
        </>
      }
    </div>
  </section>
  </>
}

export default Stores

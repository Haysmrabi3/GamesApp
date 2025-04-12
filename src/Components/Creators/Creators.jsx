import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCreators } from '../../Redux/CreatorsSlice';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';










function Creators() {

  const disPatch = useDispatch();
  let {Creators , isLoading} = useSelector((state)=> state.CreatorsSlice)
  


  useEffect(()=> {
    disPatch(getCreators())
    window.scrollTo(0, 0);
  }, [])




  return <>
    <Helmet>
     <title>Creators</title>
  </Helmet>
  <section id='Creators' >
    <div className="container py-8 min-h-[100vh]">
      <h2 className='text-white text-4xl font-semibold'>Creators</h2>
      {isLoading ? 
        <Loading/>
        :
        <>
        {/* Creator-cart */}
        <div className="grid grid-cols-12 gap-4 mt-10">
          {Creators.map((Creator , index)=>{
           return <div key={index} className="bg-main relative sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 flex justify-center items-end h-72 rounded-lg overflow-hidden group/cart cursor-pointer">
              <Link to={`/SpecificCreator/${Creator.id}`}>
              <div className="mb-1">
              <img src={Creator.image} className='w-28 h-28 ms-5 rounded-full group-hover/cart:scale-110 transition-all duration-500 absolute  bottom-[20%] z-20' alt="Creator" />
              <h3 className='py-3 text-white text-2xl font-semibold'>{Creator.name}</h3>
              <div className="">
              <img src={Creator.image_background} className='w-full absolute left-0 top-0 h-2/3 ' alt="Creator`BackGround" />
              </div>
            </div>
              </Link>
          </div>
          })}
        </div>
        </>
      } 
    </div>
  </section>
  </>
}

export default Creators

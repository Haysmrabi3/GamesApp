import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSpecificCreator } from '../../Redux/SpecificCreatorSlice'
import Loading from '../Loading/Loading'
import { Helmet } from 'react-helmet'

















function SpecificCreator() {
let dispatch = useDispatch()
let {id} = useParams()
let {CreatorDetails , isLoading} = useSelector((state)=> state.SpecificCreatorSlice)
  



  useEffect(()=>{
    dispatch(getSpecificCreator(id))
    window.scrollTo(0, 0);
  }, [])


  return <>
  <Helmet>
     <title>{CreatorDetails.name}</title>
  </Helmet>
  <section  id='SpecificCreator' >
    <div className="container min-h-100[vh]">
      {isLoading? 
      <Loading/>
      :
      <>
      <div className="grid grid-cols-12 gap-5 my-36">
        <div className="sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
          <div className="rounded-lg overflow-hidden max-h-[748px]">
            <img src={CreatorDetails.image} className='w-full'  alt={`${CreatorDetails.name} Picture`} />
          </div>
        </div>
        <div className="sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
              <h2 className='text-3xl font-bold text-white'>{CreatorDetails.name}</h2>
              <div className="text-text text-lg font-semibold my-3">
              <p dangerouslySetInnerHTML={{ __html: CreatorDetails.description, }}></p>
        </div>
        <h3  className='text-[22px] font-semibold text-white mt-1'>
         Positions : <span className='text-xl text-text' > <span className='text-xl text-text' >director producer programmer</span></span>
          </h3>
        <h3  className='text-[22px] font-semibold text-white mt-1'>
          Ratings : <span className='text-xl text-text' >{CreatorDetails.rating} <i className="fa-solid fa-star text-yellow-400"></i></span>
          </h3>
        {CreatorDetails.ratings?.map((item)=> {
          return <h3 key={item.id} className='text-[22px] font-semibold text-white mt-1'>
            {item.title} : <span className='text-xl text-text' >{item.percent}</span>
          </h3>
        })}        
          <div />
        </div>
      </div>
      </>
      }
    </div>
  </section>
  </>
}

export default SpecificCreator

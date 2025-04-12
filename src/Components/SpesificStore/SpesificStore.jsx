import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSpecificStore } from '../../Redux/SpecificSroreSlice'
import Loading from '../Loading/Loading'
import { Helmet } from 'react-helmet'

function SpesificStore() {
  let dispatch = useDispatch()
  let {id} = useParams()
  let {StoreDetails , isLoading} = useSelector((state)=> state.SpecificStoreSlice)


  useEffect(()=>{
    dispatch(getSpecificStore(id))
    window.scrollTo(0, 0);
  }, [])
  
  


  return <>
    <Helmet>
     <title>{StoreDetails.name}</title>
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
              <img src={StoreDetails.image_background} className='w-full'  alt="Game picture" />
            </div>
          </div>
          <div className="sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                <h2 className='text-3xl font-bold text-white'>{StoreDetails.name}</h2>
                <div className="text-text text-lg font-semibold my-3">
                <p>{StoreDetails.description?.split('<p>').join('').split('</p>')}</p>
          </div>
          <Link 
          to={`https://${StoreDetails.domain}`}
          target='_blank'
          className='text-2xl font-bold text-main bg-transparent'
          >
          More Details
          </Link>
          </div>
        </div>
          </>
        }
      </div>
    </section>
    </>
}

export default SpesificStore

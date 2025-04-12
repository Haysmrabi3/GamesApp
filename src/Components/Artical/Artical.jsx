import React, { useRef } from 'react'
import mainArtical from '../../assets/Images/Header/1.png';
import img1 from '../../assets/Images/Artical/articel4-a4a50c4f.png';
import img2 from '../../assets/Images/Artical/article1-d74531e2.png';
import img3 from '../../assets/Images/Artical/article2-471e573d.png';
import img4 from '../../assets/Images/Artical/article3-aa897b19.png';
import img5 from '../../assets/Images/Artical/article5-6941a7ff.png';
import img6 from '../../assets/Images/Artical/article6-693d0d38.png';
import artical from '../../assets/Data/artical';





function Artical() {
 let mainPicture = useRef(null)
 let mainTitle = useRef(null)

  const getPicture = (e)=> {
    mainPicture.current.src = e.target.src
  }

  const handleChange = (id)=> {
    mainTitle.current.childNodes[0].innerHTML = artical[id].author
    mainTitle.current.childNodes[1].innerHTML = artical[id].datePuplisher
    mainTitle.current.childNodes[2].childNodes[0].innerHTML = artical[id].titel  
  }

  const arr = [
    img1 , img2 , img3 , 
    img4 , img5 , img6  
  ]

  return <>
  <section id='Artical'>
    <div className="container border-t-[0.5px] py-10 border-gray-700">
    <h2 className='text-4xl font-bold text-white'>Latest
      <span className='text-main font-semibold'> Artical</span>
    </h2>
    <div className="grid grid-cols-10 mt-7">
      <div className="sm:col-span-10 md:col-span-5 xl:col-span-5 overflow-hidden">
            <img  src={mainArtical} className='w-full rounded-xl hover:scale-110 transition-all duration-500' alt="gameImg" />
      </div>
      <div className="sm:col-span-10 md:col-span-5  xl:col-span-5 p-5 ">
        <h3 className='text-center mb-3 text-2xl font-semibold text-white'>Why Cypher Joined Protocol Sight</h3>
        <p className='text-xl text-text'>Purus senectus vulputate elit pellentesque. Ut donec pretium, curabitur sed proin. Tristique feugiat massa fames faucibus condimentum quam at. Sed tellus praesent habitant tortor. Sed aliquet dapibus fermentum iaculis. Purus senectus vulputate elit pellentesque. Ut donec pretium, curabitur sed proin. Tristique feugiat massa fames faucibus condimentum quam at. Sed tellus praesent habitant tortor. Sed aliquet dapibus fermentum iaculis.</p>
      </div>
    </div>
    <div className="grid grid-cols-10 gap-5 mt-10">
      <div className="sm:col-span-10 sm:order-2 md:col-span-6 md:order-1 xl:col-span-7 xl:order-1">
        <div className="grid sm:grid-cols-10 md:grid-cols-10 lg:grid-cols-9 xl:grid-cols-9 gap-5 p-2">
          {artical.map((game , index)=>{            
            return <div key={index}
             className="sm:col-span-10 md:col-span-5 lg:col-span-3  xl:col-span-3"
             onClick={()=>  handleChange(game.id)  }
             >
            <div className="rounded-xl overflow-hidden">
            <img  onClick={(e)=> getPicture(e)}  src={arr[index]} className='w-full cursor-pointer hover:scale-110 transition-all duration-500' alt="gameImg" />
            </div>
            <div className="">
              <h3 className='text-white font-semibold text-lg text-center my-2'>{game.titel}</h3>
              <div className="flex justify-between">
              <span className='text-lg font-semibold text-main'>{game.author}</span>
              <span className='text-lg font-semibold text-text'>{game.datePuplisher}</span>
              </div>
            </div>
          </div>
          })}
        </div>
      </div>
      <div className=" sm:col-span-10 sm:order-1 md:col-span-4 md:order-2 xl:col-span-3 xl:order-2 ">
        <div className="overflow-hidden">
        <img ref={mainPicture} src={mainArtical} className='w-full min-h-[255px] rounded-xl hover:scale-110 transition-all duration-500' alt="gameImg" />
        </div>
        <div ref={mainTitle} className="mt-3 text-center">
          <span className='text-center text-main me-3 text-xl'>Alex Gordon</span>
          <span className='text-center text-text text-xl'>15 Jui ,2024</span>
          <div className="">
            <h3 className='text-white mt-3 text-lg font-semibold'>HOW TO UNLOCK RANKED GAMES.</h3>
            <p className='text-text mt-3 text-lg'>Purus senectus vulputate elit pellentesque. Ut donec pretium, curabitur sed proin. Tristique feugiat massa fames faucibus condimentum quam at. Sed tellus praesent habitant tortor. Sed aliquet dapibus fermentum iaculis.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
  </>
}

export default Artical

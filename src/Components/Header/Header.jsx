import React, { useEffect } from 'react'
import Slider from "react-slick";
import img1 from '../../assets/Images/Header/1.png';
import img2 from '../../assets/Images/Header/2.png';
import img3 from '../../assets/Images/Header/3.png';
import GameIcon from '../../assets/Images/IconsGame/control.png';
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../../Redux/GamesSclice';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

function Header() {
const disPatch = useDispatch();
let {games , isLoading} = useSelector((state)=> state.GameSlice)




useEffect(()=> {
  disPatch(getGames())
}, [])


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        lazyLoad: true,
        pauseOnHover: true,
      };


    const settingSlider = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    centerPadding: "0",
    autoplay: true,
    arrows: false,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
      };

  return <>
      <section className='pb-20'  id='Header'>
      <div className="container">
      {
      isLoading 
      ? 
      <Loading/>
      :
      <>
      <div className="grid grid-cols-10 gap-1 overflow-hidden ">
        <div className="Slider sm:col-span-10 md:col-span-10 lg:col-span-10 xl:col-span-7  ">
          <Slider {...settings}>
            <div className="" key="slide1">
              <img src={img1} className='w-full max-h-[530px] rounded-2xl cursor-pointer' alt="GamePicture 1" />
            </div>
            <div className="" key="slide2">
              <img src={img2} className='w-full max-h-[530px] rounded-2xl cursor-pointer' alt="GamePicture 2" />
            </div>
            <div className="" key="slide3">
              <img src={img3} className='w-full max-h-[530px] rounded-2xl cursor-pointer' alt="GamePicture 3" />
            </div>
          </Slider>
        </div>
        <div className="sm:col-span-10 md:col-span-10 lg:col-span-10 xl:col-span-3 space-y-2">
          <ul className='md:flex md:flex-row lg:flex items-center xl:block'>
            {games.slice(0 , 4 ).map((game , index)=> {
              return <li key={index} className='md:w-1/4 lg:h-1/4 xl:w-full pt-2 md:p-3'>
              <div className="pb-1 border-b-[0.5px] border-gray-700">
                <div className="flex md:flex-col xl:flex-row ">
                <Link to={`GameDetails/${game.id}`}>
                  <img src={game.thumbnail} className='sm:w-32 md:w-full xl:w-32 xl:h-18 cursor-pointer rounded-lg hover:scale-110 transition-all duration-500' alt="" />
                </Link>
                <div className="ms-3">
                <h3 className='text-xl font-bold text-white'>{game.title}</h3>
                <p className='text-[16px] font-bold text-white'>
                  Release date :  
                    <span  className='text-main sm:ms-2 md:m-0 lg:ms-2 '> 
                     { game.release_date}
                  </span>
                </p>
                </div>
                </div>
                <img src={GameIcon} className='w-9 ms-auto opacity-20' alt="GameIcon" />
              </div>
            </li>
            })}
          </ul>
        </div>
      </div>
      <div className="SliderGames mt-4">
      <Slider {...settingSlider}>
        {games?.slice(10 , 14).map((game , index)=> {
          return  <div className="group/parent relative overflow-hidden" key={index}>
          <Link to={`GameDetails/${game.id}`}>
                  <img src={game.thumbnail} className='w-full sm:h-72 md:h-44 lg:h-72  lg:max-h-[200px] h-screen xl:max-h-[250px] px-1 rounded-2xl cursor-pointer' alt="" />
                  <div className="  w-full h-full flex justify-center items-center absolute top-0 left-full group-hover/parent:left-0 transition-all duration-700 cursor-pointer">
                  <h3 className='text-white text-4xl'>{game.title}</h3>
                  </div>
                </Link>
        </div>
        })} 
          </Slider>
      </div>
      </>
      }
      </div>
    </section>
  </>
}

export default Header

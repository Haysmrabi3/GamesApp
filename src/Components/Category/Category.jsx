import React, { useEffect} from 'react'
import { Link } from 'react-router-dom';
import control from '../../assets/Images/IconsGame/control.png';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../Redux/CategoriesSlice';
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet';








function Category() {

  const disPatch = useDispatch();
  let {Categories , isLoading} = useSelector((state)=> state.CategoriesSlice)
  
  
  
  const getMmorpgCategory = ()=> {
    disPatch(getCategories(`mmorpg`))
  }

  const getShooterCategory = ()=> {
    disPatch(getCategories(`shooter`))
  }
  const getSailingCategory = ()=> {
    disPatch(getCategories(`sailing`))
  }
  const getPixelCategory = ()=> {
    disPatch(getCategories(`pixel`))
  }


  useEffect(()=> {
    getMmorpgCategory()
  } ,[])

  return <>
    <Helmet>
     <title>Category</title>
  </Helmet>
  <section id='Categories' >
      <div className='container py-8 min-h-[100vh]'>
        <h2 className='text-white text-4xl font-semibold'>Categories</h2>

        {isLoading?
        <Loading/>
        :
        <>
          <div className="relative group/dropdown text-end w-fit ms-auto transition-all ">
              <button className='bg-main text-white text-2xl font-semibold rounded-2xl px-[17.8px] py-2 group-hover/dropdown:rounded-b-none transition-all ' >More <i className="fa-solid fa-arrow-down text-lg mb-2"></i></button>
            <ul className='bg-slate-900 px-5 py-2 rounded-b-lg border border-main hidden absolute top-full left-0  group-hover/dropdown:block z-40  transition-all'>
              <li><button onClick={()=>getMmorpgCategory()}  className='text-main text-lg font-semibold my-1 hover:text-white active:text-text' >Mmorpg</button></li>
              <li><button onClick={()=>getShooterCategory()}  className='text-main text-lg font-semibold my-1 hover:text-white active:text-text' >Shooter</button></li>
              <li><button onClick={()=>getSailingCategory()}  className='text-main text-lg font-semibold my-1 hover:text-white active:text-text' >Sailing</button></li>
              <li><button onClick={()=>getPixelCategory()}  className='text-main text-lg font-semibold my-1 hover:text-white active:text-text' >Pixel</button></li>
            </ul>
          </div>
        <div className="grid grid-cols-12 gap-4 mt-5">
          {Categories?.slice(0 , 9).map((game , index )=> {
           return <div key={index} className="sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 border-b-[1px] border-gray-800 pb-3">
              <div className="overflow-hidden rounded-lg ">
                <Link
                 to={`/GameDetails/${game.id}`}
                 >
                <img src={game.thumbnail} className='w-full cursor-pointer hover:scale-110 transition-all duration-500' alt="GamePicture" />
                </Link>
              </div>
              <h3 className='text-white text-lg font-semibold'>{game.title}</h3>
              <p className='text-white text-lg font-semibold'>
                Release date : 
                <span className='text-main text-base'> {game.release_date}</span>
                </p>
                <div className="flex justify-between items-center">
                <div className="btn-container w-full">
            <Link to={game.game_url} className="btn-content flex items-center" target="_blank">
            <span className='text-red-700 text-lg font-semibold mb-[3.5px] me-2'>Show</span>
              <span className="icon-arrow">
                <svg
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 66 43"
                  height="20px"
                  width="20px"
                >
                  <g
                    fillRule="evenodd"
                    fill="none"
                    strokeWidth="1"
                    stroke="none"
                    id="arrow"
                  >
                    <path
                      fill="#9ee5fa"
                      d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                      id="arrow-icon-one"
                    ></path>
                    <path
                      fill="#9ee5fa"
                      d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                      id="arrow-icon-two"
                    ></path>
                    <path
                      fill="#9ee5fa"
                      d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                      id="arrow-icon-three"
                    ></path>
                  </g>
                </svg>
              </span>
            </Link>
          </div>
                  <img src={control} className='w-9 opacity-20' alt="control" />
                </div>
            </div>
          })}
        </div>
      <div>
      </div>
        </>
        }
    </div>
    </section>
  </>
}

export default Category

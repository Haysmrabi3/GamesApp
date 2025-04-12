import React from 'react'
import team from '../../assets/Data/teams'
import img1 from '../../assets/Images/Teams/person2-547b12f7.png'
import img3 from '../../assets/Images/Teams/person1-215eb765.png'
import img2 from '../../assets/Images/Teams/person5-30458431.png'
import img4 from '../../assets/Images/Teams/person3-ade458c0.png'


function Team() {


 const arr = [
    img1 , img2 , img3 , img4
  ]

  return <>
  <section className='bg-section3' id='Team'>
    <div className="container mt-10 py-28">
      <h2 className='text-4xl font-bold text-white mb-4'>
        Our  
        <span className='text-main font-semibold'> Teams</span>
      </h2>
      <div className="grid grid-cols-12 justify-center gap-10">
        {team.map((member , index)=>{
          return <div key={member.id} className="sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 mt-3t text-center">
          <div className=" rounded-lg overflow-hidden">
            <img src={arr[index]} className='w-100 min-h-96 m-auto cursor-pointer hover:scale-110 transition-all duration-500' alt="player`s image" />
          </div>
          <h3 className='text-xl font-bold text-white mt-3'>{member.name}</h3>
          <span className='text-main font-semibold text-3xl'>{member.titel}</span>
  </div>
        })}
      </div>
    </div>
  </section>
  </>
}

export default Team

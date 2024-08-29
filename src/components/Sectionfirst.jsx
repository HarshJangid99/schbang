import React from 'react'
import wheel from "../assets/wheel.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


export default function Sectionfirst() {
    useGSAP(()=>{
        gsap.to(".marque" , {
            x:0,
            duration :4,
        ease : "none",
        repeat :-1,

        })
        gsap.to(".marque img " , {
            rotate : 360,
            repeat : -1,
            duration : 2,
            ease : "none"
        })
     

    })

  return (
  <>
  <div className="First h-auto w-full m-auto space-y-36 md:pt-32 pt-8 pb-5  ">
   <div className="headings lg:px-36 md:px-14 px-0">
    <h1 className='md:text-6xl text-4xl font-bold'>Your Creative, Media & Technology Transformation Partner</h1>
    <p className='text-2xl text-gray-800 mt-4'>We're a team of 1000+ Specialists delivering award-winning work for 300+ brands worldwide, 8 years and counting!</p>
   </div>

   <div className="scrolling flex md:gap-10 gap-1 overflow-x-hidden overflow-y-hidden w-full">
    <div className="marque flex flex-shrink-0 gap-3 -translate-x-full">
        <h1 className='text-4xl font-bold'>IT'S TIME TO CREATE A SCHBANG</h1>
        <img src={wheel} alt="" className='h-10' />
    </div>
    <div className="marque flex flex-shrink-0 gap-3 -translate-x-full">
        <h1 className='text-4xl font-bold'>IT'S TIME TO CREATE A SCHBANG</h1>
        <img src={wheel} alt="" className='h-10' />
    </div>
    <div className="marque flex flex-shrink-0 gap-3 -translate-x-full">
        <h1 className='text-4xl font-bold'>IT'S TIME TO CREATE A SCHBANG</h1>
        <img src={wheel} alt="" className='h-10' />
    </div>
    <div className="marque flex flex-shrink-0 gap-3 -translate-x-full">
        <h1 className='text-4xl font-bold'>IT'S TIME TO CREATE A SCHBANG</h1>
        <img src={wheel} alt="" className='h-10' />
    </div>
    <div className="marque flex flex-shrink-0 gap-3 -translate-x-full">
        <h1 className='text-4xl font-bold'>IT'S TIME TO CREATE A SCHBANG</h1>
        <img src={wheel} alt="" className='h-10' />
    </div>
    <div className="marque flex flex-shrink-0 gap-3 -translate-x-full">
        <h1 className='text-4xl font-bold'>IT'S TIME TO CREATE A SCHBANG</h1>
        <img src={wheel} alt="" className='h-10' />
    </div>
 

   </div>
   
  </div>

  </>
  )
}

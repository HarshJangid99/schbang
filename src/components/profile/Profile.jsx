

import React, { useEffect, useRef } from 'react'

import gsap from 'gsap'
export default function Profile(props) {
    const firstBox = useRef()
   const image = props.img
   const setimage = props.setimage
    
    
    useEffect(()=>{
        const firstBoxx = firstBox.current;
       
        firstBoxx.addEventListener("mouseenter" , ()=>{
           setimage(image)
          
        })
        firstBoxx.addEventListener("mouseleave" , ()=>{
          setimage (null)
        })
    })
  return (
    <div className="firstBox w-full flex space-x-2 my-7 "  ref={firstBox}> 
    <div className="first w-full flex flex-col " >
    <div className='pressrelease'>
        <button className='px-5 py-1 border-[1px] border-black text-black bg-white rounded-3xl'>Press Release</button></div>
    <div className="text flex justify-between py-10 border-b-[1px] border-gray-700">
        <h1 className='text-xl font-bold text-black pr-3'>{props.headline}</h1>
        <p className='text-gray-700'>{props.time}</p>
    </div>
    </div>
    
</div>
  )
}

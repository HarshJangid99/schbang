

import React, { useEffect, useRef, useState } from 'react'
import profile1 from "../assets/trending/profile1.png"
import profile2 from "../assets/trending/profile2.png"
import profile3 from "../assets/trending/profile3.png"
import gsap from 'gsap'

import Profile from './profile/profile'
import { useGSAP } from '@gsap/react'

export default function Trendig() {
   const [image,setimage] = useState(null)
   
  return (
   <>
   <div className="trendings w-full h-screen  sm:px-16 sm:py-6">
    <div className="maincontainer   w-full h-full">
        <h1 className='text-black font-bold text-4xl '>Trending Now</h1>
        <div className='w-full flex space-x-5'>
<div className='w-9/12'>
<Profile headline = "Schbang appoints Jitto George as Executive Vice President - Media Solutions" time = "3 Minutes" img = {profile1} setimage = {setimage}/>
     <Profile headline = "Britannia forays into the Metaverse with the launch of ‘Britannia Coffeeverse’" time = "2.5 Minutes" img = {profile2} setimage = {setimage}/>
     <Profile headline = "Kotak811 shares a reminder about ROI on self-care " time = "2 Minutes" img = {profile3} setimage = {setimage}/>
</div>

<div className='w-1/4 flex items-center'>
<img src={image} alt="" className=' object-cover'/>
</div>
        </div>

    
     
    </div>
   </div>
   </>
  )
}

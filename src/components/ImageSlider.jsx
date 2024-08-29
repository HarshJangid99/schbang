import React, { useState } from 'react'

import imgfirst1 from "../assets/slider/image1/part1.png"
import imgfirst2 from "../assets/slider/image1/part2.png"
import imgsecond1 from "../assets/slider/image2/part1.png"
import imgsecond2 from "../assets/slider/image2/part2.png"
import imgthird1 from "../assets/slider/image3/part1.png"
import imgthird2 from "../assets/slider/image3/part2.png"
import imgfourth1 from "../assets/slider/image4/part1.png"
import imgfourth2 from "../assets/slider/image4/part2.png"
import imgfifth1 from "../assets/slider/image5/part1.png"
import imgfifth2 from "../assets/slider/image5/part2.png"
import imgsixth1 from "../assets/slider/image6/part1.png"
import imgsixth2 from "../assets/slider/image6/part2.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
export default function ImageSlider() {
 const [btn, setbtn] = useState(false)
   
    useGSAP(()=>{
       
            gsap.to(".leftpart img" , {
                top : 0,
                duration : 0.9,
                delay : 1,
                stagger : 4,
                repeat : -1,
          
            })
            gsap.to(".rightpart img" , {
                top : 0,
                duration : 0.9,
                delay : 1,
                stagger : 4,
                repeat : -1,
            
            })
        
    
    })
  return (
   <>
   <div className="slidercontainer  w-full h-2/5 sm:h-screen py-2 ">
    <div className="slider flex w-full h-full relative py-28 overflow-hidden">
        <div className="leftpart w-1/2  h-full overflow-hidden ">
   <img src={imgfirst1} alt="" className='w-1/2 h-full lg:object-cover absolute -top-full'/>
   <img src={imgsecond1} alt="" className='w-1/2 h-full lg:object-cover absolute -top-full'/>
   <img src={imgthird1} alt="" className='w-1/2 h-full lg:object-cover absolute -top-full'/>
   <img src={imgfourth1} alt="" className='w-1/2 h-full lg:object-cover absolute -top-full'/>
   <img src={imgfifth1} alt="" className='w-1/2 h-full lg:object-cover absolute -top-full'/>
   <img src={imgsixth1} alt="" className='w-1/2 h-full lg:object-cover absolute -top-full'/>

        </div>
        <div className="rightpart w-1/2  h-full overflow-y-hidden ">
        <img src={imgfirst2} alt="" className='w-1/2 h-full lg:object-cover absolute top-full overflow-hidden' />
        <img src={imgsecond2} alt="" className='w-1/2 h-full lg:object-cover absolute top-full overflow-hidden' />
        <img src={imgthird2} alt="" className='w-1/2 h-full lg:object-cover absolute top-full overflow-hidden' />
        <img src={imgfourth2} alt="" className='w-1/2 h-full lg:object-cover absolute top-full overflow-hidden' />
        <img src={imgfifth2} alt="" className='w-1/2 h-full lg:object-cover absolute top-full overflow-hidden' />
        <img src={imgsixth2} alt="" className='w-1/2 h-full lg:object-cover absolute top-full overflow-hidden' />
        </div>
    </div>
   
   </div>
   </>
  )
}

import React from 'react'
import insta from "../assets/insta.png"
import facebook from "../assets/facebook.png"
import linkedin from "../assets/linkedin.png"
import youtube from "../assets/youtube.png"
export default function Footer() {
  return (
    <>
    <div className="footer bg-black w-full ">
    <div className="schbangtext flex justify-center py-10  border-b-[1px] ">
<h1 className=' font-extrabold text-white sm:text-9xl text-3xl' >SchBang</h1>
    </div>
    <div className='flex justify-around  py-5 flex-col sm:flex-row'>
        <div className="socialmedia flex space-x-3 justify-center">
<img src={insta}alt="" className='h-8' />
<img src={facebook}alt="" className='h-8'/>
<img src={linkedin}alt="" className='h-8'/>
<img src={youtube}alt="" className='h-8'/>
        </div>
        <div className="navigation flex text-white space-x-3 font-medium justify-center" >
            <h1>About</h1>
            <h1>Contact</h1>
            <h1>CaseStudies</h1>
            <h1>Blog</h1>
            <h1>Privacy</h1>
        </div>
        <div className="copywright text-white font-medium  ">
            <h1 className='text-center'>Proudly created in india</h1>
            <h1 className='text-center'>All right reserved</h1>
        </div>
    </div>
</div>
    </>
  )
}

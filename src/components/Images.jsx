import React from 'react'
import mi from "../assets/imageSlider/mi.png"
import badlav from "../assets/imageSlider/badlav.png"
import cordelia from "../assets/imageSlider/cordelia.png"
import datecrown from "../assets/imageSlider/datecrown.png"
import dhampur from "../assets/imageSlider/dhampur.png"
import drfixit from "../assets/imageSlider/drfixit.png"
import fevicreate from "../assets/imageSlider/fevicreate.png"
import glowlovely from "../assets/imageSlider/glow&lovely.png"
import jio from "../assets/imageSlider/jio.png"
import prime from "../assets/imageSlider/prime.png"
import rio from "../assets/imageSlider/rio.png"
import shorty from "../assets/imageSlider/shorty.png"
import tanshiq from "../assets/imageSlider/tanshiq.png"
import ashokleyland from "../assets/imageSlider/ashokleyland.png"
import bathbody from "../assets/imageSlider/bath&body.png"
import blunt from "../assets/imageSlider/blunt.png"
import bodycraft from "../assets/imageSlider/bodycraft.png"
import britania from "../assets/imageSlider/britania.png"
import cipla from "../assets/imageSlider/cipla.png"
import dominos from "../assets/imageSlider/dominos.png"
import garnier from "../assets/imageSlider/garnier.png"
import hershies from "../assets/imageSlider/hershies.png"
import protinex from "../assets/imageSlider/protinex.png"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Images() {
    useGSAP(()=>{
        gsap.to(".firstslider" , {
            x : "-50%",
            duration : 25,
            repeat : -1,
            ease : "none",
            yoyo : true
        })
        gsap.to(".secondslider" , {
            x : "50%",
            duration : 25,
            repeat : -1,
            ease : "none",
            yoyo : true
        })
        
    })
  return (
  <>
  <div className="maincontainer w-full py-20 overflow-x-hidden ">
    <div className="firstslider w-full  flex translate-x-1/4">
<div className="imagemarque1 flex space-x-7">
    <img src={mi} alt="" className='h-20 filter grayscale'/>
    <img src={badlav} alt="" className='h-20 filter grayscale' />
    <img src={cordelia} alt="" className='h-20 filter grayscale'/>
    <img src={datecrown} alt="" className='h-20 filter grayscale' />
    <img src={dhampur} alt="" className='h-20 filter grayscale'/>
    <img src={drfixit} alt="" className='h-20 filter grayscale' />
    <img src={fevicreate} alt="" className='h-20 filter grayscale'/>
    <img src={glowlovely} alt="" className='h-20 filter grayscale'/>
    <img src={jio} alt="" className='h-20 filter grayscale' />
    <img src={prime} alt="" className='h-20 filter grayscale'/>
    <img src={rio} alt="" className='h-20 filter grayscale' />
    <img src={shorty} alt="" className='h-20 filter grayscale'/>
    <img src={tanshiq} alt="" className='h-20 filter grayscale' />

    
</div>
    </div>
    <div className="secondslider w-full   -translate-x-1/4 mt-5">
    <div className="imagemarque1 flex space-x-7">
    <img src={ashokleyland} alt="" className='h-12 filter grayscale'/>
    <img src={bathbody} alt="" className='h-12 filter grayscale' />
    <img src={blunt} alt="" className='h-12 filter grayscale'/>
    <img src={bodycraft} alt="" className='h-14 filter grayscale' />
    <img src={britania} alt="" className='h-14 filter grayscale'/>
    <img src={cipla} alt="" className='h-12 filter grayscale' />
    <img src={dominos} alt="" className='h-12 filter grayscale'/>
    <img src={garnier} alt="" className='h-14 filter grayscale'/>
    <img src={hershies} alt="" className='h-14 filter grayscale' />
    <img src={protinex} alt="" className='h-14 filter grayscale'/>

    
</div>

    </div>
  </div>
  </>
  )
}

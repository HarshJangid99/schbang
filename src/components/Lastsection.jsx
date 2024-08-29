import React, { useEffect, useRef } from 'react'
import adobe from "../assets/last/first/adobe.png"
import googlepartner from "../assets/last/first/googlepartner.png"
import moengage from "../assets/last/first/moengage.png"
import nodejs from "../assets/last/first/nodejs.png"
import ondc from "../assets/last/first/ondc.png"
import shopifypartner from "../assets/last/first/shopifypartner.png"
import zoho from "../assets/last/first/zoho.png"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Lastsection() {

    useGSAP(()=>{
        gsap.to(".sliderr" , {
            x : "-40%",
            duration : 15,
            repeat : -1,
            yoyo : true,
            ease :"none"
        })
        gsap.to(".lastsecondcontainer" , {
            top : "100%",
            duration : 1,
           
            scrollTrigger : {
                trigger : ".buttonsoffirst",
              
                scrub : 1,
                start : "top 80%",
                end : "top 60%",
            },
            
        })
    })
  return (
    <div className="lastcontainer w-full sm:h-screen " >
        <div className="lastfirstcontainer w-full py-11 overflow-hidden   bg-white rounded-b-3xl">
            <div className="sliderr w-full overflow-x-hidden flex translate-x-1/4 ">
                <div className="marqueimg w-1/4 mx-4  flex flex-col items-center">
                 <div className='sm:h-52 '>   <img src={adobe} alt=""  className='object-cover filter grayscale'/></div>
                    <div className="textcont space-y-2">
                        <p className='text-black text-xl font-semibold text-center'>Adobe Solution Partner</p>
                        <p className='font-medium flex items-center'>Develop sophisticated and personalised solutions for enterprises with deeper consumer understanding and built-in analytics.</p>
                    </div>
                </div>
                <div className="marqueimg w-1/4 mx-4  ">
                  <div className='h-52'>  <img src={googlepartner} alt="" className='object-cover filter grayscale'/></div>
                    <div className="textcont space-y-2">
                        <p className='text-black text-xl font-semibold'>Google Partner</p>
                        <p className='font-medium flex items-center'>Leverage the power of Google Ads to scale your business</p>
                    </div>
                </div>

                <div className="marqueimg w-1/4 mx-4 ">
                  <div className='h-52'>  <img src={moengage} alt="" className='object-cover filter grayscale' /></div>
                    <div className="textcont space-y-2">
                        <p className='text-black text-xl font-semibold'>MoEngage Partner</p>
                        <p className='font-medium flex items-center'>Leverage the marketing automation platform to boost customer engagement and retention.</p>
                    </div>
                </div>

                <div className="marqueimg w-1/4 mx-4  ">
                   <div className='h-52'> <img src={nodejs} alt="" className='object-cover filter grayscale' /></div>
                    <div className="textcont space-y-2">
                        <p className='text-black text-xl font-semibold'>Node.js</p>
                        <p className='font-medium flex items-center' >Building & deploy web apps, APIs, and other software solutions with scalability & high performance at the core. .</p>
                    </div>
                </div>
                <div className="marqueimg w-1/4 mx-4  ">
                    <div className='h-52'><img src={ondc} alt=""  className='object-cover filter grayscale'/></div>
                    <div className="textcont space-y-2">
                        <p className='text-black text-xl font-semibold'>ONDC Partner</p>
                        <p className='font-medium flex items-center'>Complete e-commerce solutions to meet your business goals.</p>
                    </div>
                </div>
                <div className="marqueimg w-1/4 mx-4  ">
                    <div className='h-52'><img src={shopifypartner} alt=""  className='object-cover filter grayscale'/></div>
                    <div className="textcont space-y-2">
                        <p className='text-black text-xl font-semibold'>Shopify Partner</p>
                        <p className='font-medium flex items-center'>Build robust and effective online stores with the leading e-commerce platform.</p>
                    </div>
                </div>

                <div className="marqueimg w-1/4 mx-4 space-y-3 flex flex-col items-center">
                <div className='h-52'><img src={zoho} alt="" className='object-cover filter grayscale '/></div>
          
                    <div className="textcont space-y-2">
                        <p className='text-black text-xl font-semibold'>Zoho Premium Partner</p>
                        <p className='font-medium flex items-center'>Design and implement integrated business architectures and digital transformation solutions.</p>
                    </div>
                </div>
            </div>

            <div className="buttonsoffirst flex justify-evenly pt-20 flex-wrap">
              <div className="buttonfirst">
                <button className='px-4 py-3 border-[1px] border-black text-black rounded-3xl text-xl'><span className='font-bold'>India :</span> <span>11:08 AM</span></button>
              </div>
              <div className="buttonsecond">
                <button className='px-4 py-3 border-[1px] border-black text-black rounded-3xl text-xl'><span className='font-bold'>London:</span > <span>06:08 AM</span></button>
              </div>
              <div className="buttonthird">
                <button className='px-4 py-3 border-[1px] border-black text-black rounded-3xl text-xl' ><span className='font-bold'>Dubai :</span> <span>09:43 AM</span></button>
              </div>
              <div className="buttonfourth">
                <button className='px-4 py-3 border-[1px] border-black text-black rounded-3xl text-xl'><span className='font-bold'>Amsterdam  :</span> <span>07:44 AM</span></button>
              </div>
            </div>
        </div>


    </div>
  )
}

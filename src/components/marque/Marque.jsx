import React from 'react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import arrow from "../../assets/arrow.png"
export default function Marque(props) {
    const marqueBox = useRef(null);
    const heading = useRef();
    const text = useRef()
    const button = useRef()


   
      
  
    useEffect(() => {
      const element = marqueBox.current;
      const headingg = heading.current;
      const textt = text.current;
      const buttonn = button.current;

      function getRandomRGBColor() {
        const r = Math.floor(Math.random() * 256); // Red: 0-255
        const g = Math.floor(Math.random() * 256); // Green: 0-255
        const b = Math.floor(Math.random() * 256); // Blue: 0-255
        return `rgb(${r}, ${g}, ${b})`;
      }
      let random = getRandomRGBColor()
  
      const handleMouseEnter = () => {
          buttonn.style.display = "inline"
        gsap.to(element, {
          backgroundColor: random,
          color : "white",
          duration: 0, // Optional: Add duration for smooth transition
        })
        gsap.to(headingg , {
          color : "white"
        })
        gsap.from(textt , {
          x : -100,
          duration : 0.4,
        })
        gsap.from(buttonn , {
          x:-100,
          duration : 0.4
        })
      };
  
      const handleMouseLeave = () => {
           buttonn.style.display = "none"
        gsap.to(element, {
          backgroundColor: '', // Resets to original color or you can specify it
          duration: 0,
        })
        gsap.to(headingg , {
          color : "gray"
        })
      };
  
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
  
      // Cleanup function to remove event listeners on component unmount
      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, []); // Empty dependency array means this runs once on mount
  return (
    <div className="marqueBox w-full lg:w-1/4 md:h-full lg:px-10 lg:py-32 lg:space-y-8" ref={marqueBox} >
    <div className="lg:text-gray-400 lg:text-6xl text-xl flex lg:block lg:text-center font-bold" ref={heading}>
      <p>{props.heading1}</p>
      <p>{props.heading2}</p>
    </div>
    <p className="font-semibold lg:text-white text-black" ref={text}>
     {props.paragraph}
    </p>
    <button className=' bg-white  rounded-full p-1 lg:hidden' ref={button}><img src={arrow} alt="" className='-rotate-90 w-8  ' /></button>
  </div>
  )
}

import React, { useRef, useEffect } from 'react';
import video from "../assets/reel.mp4";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Video() {
    useGSAP(()=>{
        gsap.to(videoRef.current , {
            scale : 1.2,
            padding : 0,
           
            duration : 0.2,
            ease : "none" ,
            scrollTrigger: {
                trigger : ".video",
             
                scrub : 2,
                start : "top 85%",
                end : "top 70%"
                
              }
        })
       
        gsap.to(".video" , {
            scale : 1,
            padding : 0,
            y : "-25%",
            duration : 0.2,
            ease : "none" ,
            scrollTrigger: {
                trigger : ".video",
                scrub : 1,
                start : "top 85%",
                end : "top 70%"
                
              }
        })
    })
    const videoRef = useRef();

    useEffect(() => {
        // Add event listener to the video element when component mounts
        const videoElement = videoRef.current;
        const handleVideoClick = () => {
            if (videoElement) {
                videoElement.muted = !videoElement.muted; // Toggle mute state
            }
        };

        videoElement.addEventListener("click", handleVideoClick);

        // Cleanup event listener when component unmounts
        return () => {
            videoElement.removeEventListener("click", handleVideoClick);
        };
    }, []); // Empty dependency array to run once when the component mounts

    return (
        <>
            <div className="video w-full h-full scale-x-95 px-10 overflow-hidden">
                <video src={video} autoPlay loop ref={videoRef} muted ></video>
            </div>
        </>
    );
}

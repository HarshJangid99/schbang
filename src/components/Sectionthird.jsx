import React, { useRef, useState, useEffect } from 'react';
import arrow from "../assets/arrow.png";

export default function Sectionthird() {
    const sectionRef = useRef();
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const section = sectionRef.current;

        const handleMouseMove = (e) => {
            const sectionRect = section.getBoundingClientRect();
            const sectionCenterX = sectionRect.left + sectionRect.width / 2;
            const sectionCenterY = sectionRect.top + sectionRect.height / 2;
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const deltaX = mouseX - sectionCenterX;
            const deltaY = mouseY - sectionCenterY;
            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle);
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []); // Empty dependency array to run once on mount

    return (
        <>
            <div className="section3 p-0 sm:p-10 w-full h-full" ref={sectionRef}>
                <div className="maincont md:flex mx-2 sm:mx-5 md:bg-[url(../src/assets/bgSection3.png)] bg-center bg-no-repeat">
                    <div className="arrowText w-full space-y-8 mb-4 md:mb-0">
                        <div className="text text-black font-bold sm:text-5xl text-4xl">
                            <h1>What defines us</h1>
                        </div>
                        <div className=" hidden md:block arrow w-44" style={{ transform: `rotate(${rotate}deg)` }}>
                            <img src={arrow} alt="Arrow" />
                        </div>
                    </div>
                    <div className="aboutText w-full space-y-10 pr-10">
                        <div className="about text-black font-bold text-2xl sm:text-4xl">
                            <h1>We’re brand builders at heart, creators by design, tech enthusiasts in practice, and integrated at our core</h1>
                        </div>
                        <div className="abtext text-lg font-semibold text-gray-500">
                            We're on a mission to take the very best of Indian creative talent to the world. Driven by a ferocious hunger to create tangible impact for your business, we work with in-house specialists, industry partners, and technology leaders to push the boundaries of creativity and put your brand on the global stage.
                        </div>
                        <button className='bg-black text-white py-2 px-10 rounded-3xl font-semibold hover:bg-white hover:text-black hover:border-2 hover:border-black'>Dive Into Our Culture &rarr;</button>
                    </div>
                </div>
            </div>
        </>
    );
}


import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import arrow from "../assets/arrow.png"
import Marque from './marque/Marque';
export default function TextSlider() {


  return (
    <div className="Textslider w-full h-screen sm:flex overflow-x-hidden sm:flex-col lg:flex-row">
   <Marque heading1 = "Brand" heading2 = "Solutions" paragraph = "We provide customised solutions to meet partner needs. We understand the objectives and requirements to develop strategies  create holistic consumer experiences and fully serve clients."/>
   <Marque heading1 = "Tech" heading2 = "Solutions" paragraph = "We optimise People, Processes and Technology. Map processes, align to objectives and maximise team efficiency with tech to improve the customer experience."/>

   <Marque heading1 = "Media" heading2 = "Solutions" paragraph = "Drive results through strategic, audience-aligned ad placement across channels using the right messaging at the optimal time."/>
   <Marque heading1 = "Research" heading2 = "Solutions" paragraph = "We provide specialised market research for businesses using qualitative and quantitative methods. We integrate market research with our services to connect research, strategy and implementation."/>
   <Marque heading1 = "Film &" heading2 = "Photography" paragraph = "Schbang Motion Pictures, Global Content Hub and Schbang 808 produce and launch high-quality ad films, rapid video content and branded audio. "/>
      
    </div>
  );
}


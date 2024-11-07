import React, { useRef, useEffect, useState, useContext } from 'react';



import "./AboutSection.css"

import { ToggleContext } from '../../store/Toggle-Context';
import { PiReadCvLogoFill } from "react-icons/pi";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { SiCanva } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiSwagger } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { FaGitSquare } from "react-icons/fa";
import { AiFillOpenAI } from "react-icons/ai";
import Image from "./Image"
export default function AboutSection() {
  const { theme } = useContext(ToggleContext);
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect after first trigger for performance
        }
      },
      { threshold: 0.5 } // Adjust this to trigger the animation earlier or later
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  let classess = "about-content flex flex-col lg:flex-row md:flex-row min-h-screen  items-center gap-0 relative z-10   shadow-lg w-[100%]  "
  if (theme === "light") {
    classess += " bg-gradient-to-r from-gray-500 to-gray-700 "
  }
  else {
    classess += " bg-gradient-to-r from-gray-800 to-gray-400"

  }


  return (
    <div
      id="about"
      ref={aboutRef}
      className={classess}
    >

      <div
        className={`leftAbout md:w-1/2 w-[80%] flex  items-center justify-center transition-transform duration-700 delay-200 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'
          }`}
      >
        {/* <img src={Aayush} alt="Aayush Kakkar" className="md:w-9/12 lg:w-9/12 sm:w-9/12 w-full" /> */}
        <Image />
        
      </div>
      <div className="details transform transition-all duration-300 absolute md:right-1/2 flex md:flex-col flex-row gap-6 items-center justify-center mt-[90%] md:translate-x-6 md:hover:translate-x-0 md:mt-5 lg:mt-5 bg-white/30 p-3 rounded-lg opacity-80 hover:opacity-100  ">



        <a href="tel:+919079318997" className="text-black text-3xl hover:text-gray-700 cursor-pointer transition-colors duration-200 -mb-2">
          <MdOutlinePhoneAndroid />
        </a>
        <a href="/AayushKakkar_Resume.pdf" download className="text-black text-3xl hover:text-gray-700 cursor-pointer transition-colors duration-200 -mb-3">
          <PiReadCvLogoFill />
        </a>
        <a href="mailto:aayush90793@gmail.com" className=" text-black text-3xl hover:text-gray-700 cursor-pointer transition-colors duration-200 -mb-2">
          <IoMdMail />
        </a>
      </div>


      <div className={` text-center md:text-left rightAbout mt-10 md:mt-0 lg:mt-0 md:w-1/2 xl:h-screen xl:flex xl:justify-center xl:flex-col  relative md:pt-5 p-4   h-full   shadow-lg transition-transform duration-700 delay-500 ${isVisible ? 'animate-slideInRight' : 'opacity-0'
        } ${theme === "light"
          ? 'bg-gradient-to-r from-gray-600 to-gray-900 text-white'
          : 'bg-gradient-to-r from-[#D4A03E] via-[#8B5E3C] to-[#333333] text-gray-800'
        }`}>
        <h2 className="md:text-3xl  2xl:text-5xl  text-xl font-bold mb-3  relative after:block md:after:w-20  after:h-1 after:bg-yellow-400 after:mt-2 after:rounded ">
          About Me
        </h2>

        <p className="md:text-lg  2xl:text-2xl text-sm leading-relaxed font-medium  mb-3">
        I’m Aayush, a dedicated <span className="font-semibold text-[#D4A03E]">Software Engineer</span> at LTIMindtree, passionate about building elegant and efficient web applications. Currently on a journey to master full-stack development, I’ve gained experience in React to create engaging front-end experiences. My curiosity drives me to continuously learn and innovate in the tech space.
        </p>

        <div className="space-y-4 font-medium 2xl:mt-10">
          <p className="flex items-center gap-3">
            <span className="w-1 h-6   bg-yellow-400"></span>
            <span className='sm:text-sm 2xl:text-xl'>Transforming ideas into powerful, scalable solutions</span>
          </p>
          <p className="flex items-center gap-3">
            <span className="w-1 h-6 bg-yellow-400"></span>
            <span className='sm:text-sm 2xl:text-xl'>Crafting intuitive and visually appealing user interfaces</span>
          </p>
          <p className="flex items-center gap-3">
            <span className="w-1 h-6 bg-yellow-400"></span>
            <span className='sm:text-sm 2xl:text-xl'>Problem-solver with a keen eye for detail and optimization</span>
          </p>
        </div>



        <div className="mt-4 ">
          <h3 className="md:text-xl text-lg font-semibold mb-3 text-yellow-400">Tools Worked With</h3>
          <div className="flex space-x-4 justify-center md:justify-normal mt-5">
          <AiFillOpenAI className='text-4xl'/>
          <VscVscode className='text-4xl'/>
          <SiSwagger className='text-4xl'/>
          <IoLogoFigma className='text-4xl'/>
          <FaGitSquare className='text-4xl'/>
          <SiCanva className='text-4xl'/>
          </div>
        </div>


      </div>

    </div>
  );
}

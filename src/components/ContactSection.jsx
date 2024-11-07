import React, { useContext } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { ToggleContext } from '../store/Toggle-Context';
import logo from "../assets/logo2.png"
export default function ContactSection() {

  const { theme } = useContext(ToggleContext);
  let clsses = "flex items-center justify-around w-full h-screen p-5 md:flex-row sm:flex-col xs: flex-col "

  if (theme === "light") {
    clsses += " bg-gradient-to-b from-gray-700 via-gray-900 to-gray-900"
  }
  else {
    clsses += " bg-gradient-to-b from-gray-900 via-black to-black"
  }
  return <>

    <div id="contact" className={clsses}>
      <div className="left w-1/2 flex items-center justify-center -mb-36">
        <div className="w-full md:w-[80%] mb-8 md:mb-0 text-center md:text-left">
          <h2 className="md:text-5xl  sm:text-4xl text-3xl  font-bold mb-8 text-[#D4A03E]">Let's Catch Up!</h2>

          <p className="mb-6 text-lg  text-white ">
            Made it to the end! If you’re up for tea ☕ and creating cool stuff, let’s connect!

          </p>
          <p className="mb-6 text-lg text-white ">
            Alternatively, check out my <a href="/AayushKakkar_Resume.pdf" download className='text-[#D4A03E] mt-5 cursor-pointer hover:underline  '>Resume</a>
          </p>
          <div className="mb-8 space-y-2 flex flex-col items-center md:items-start">
            <div className="w-16 h-0.5 bg-[#D4A03E]"></div>
            <div className="w-16 h-0.5 bg-[#D4A03E]"></div>
            <div className="w-16 h-0.5 bg-[#D4A03E]"></div>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 mb-14">
            <a href="mailto:aayush90793@gmail.com" target="_blank" rel="noopener noreferrer">
              <button className="p-2 rounded-full bg-transparent border border-[#D4A03E] text-[#D4A03E] hover:bg-[#D4A03E] hover:text-black transition-colors duration-300 text-3xl">
                <IoMdMail />
                <span className="sr-only">Email</span>
              </button>
            </a>
            <a href="https://www.linkedin.com/in/aayushkakkar" target="_blank" rel="noopener noreferrer">
              <button className="p-2 rounded-full bg-transparent border border-[#D4A03E] text-[#D4A03E] hover:bg-[#D4A03E] hover:text-black transition-colors duration-300 text-3xl">

                <FaLinkedin />
                <span className="sr-only">LinkedIn</span>
              </button>
            </a>
            <a href="https://www.instagram.com/__.aayushhhhhh.__/" target="_blank" rel="noopener noreferrer">
              <button className="p-2 rounded-full bg-transparent border border-[#D4A03E] text-[#D4A03E] hover:bg-[#D4A03E] hover:text-black transition-colors duration-300 text-3xl">
                <AiFillInstagram />
                <span className="sr-only">Instagram</span>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="right w-1/2 flex items-center justify-center  mt-20 ml-3 ">
        <div className="  md:w-1/2 flex items-center justify-center ">
          <div className="w-full h-full ">
            <img
              src={logo}
              alt="Profile"
              className="w-full h-full object-cover"
              loading='lazy'
            />
          </div>
        </div>
      </div>
      <div className=" flex justify-between absolute bottom-0 left-0 right-0 text-center p-4 text-gray-700 text-sm">
          
          <p>© {new Date().getFullYear()} Aayush Kakkar. All rights reserved.</p>
          
          <p>Built with some <span className="italic">Chai</span> and <span className='italic'>Pyar</span>!!  </p>
      </div>
    </div>
  </>
}
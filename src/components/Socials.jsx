import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { SiCodesandbox } from "react-icons/si";
import { FaSquareUpwork } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
const Socials = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      const socialsDiv = document.getElementById('socials');

      if (contactSection && socialsDiv) {
        const contactTop = contactSection.getBoundingClientRect().top;
        const isVisible = contactTop <= window.innerHeight / 2;

        setShowScrollButton(isVisible);
        socialsDiv.style.display = isVisible ? 'none' : 'flex';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <>
    <div id="socials" className="socials fixed bottom-4 lg:top-1/2 lg:right-4 transform lg:-translate-y-1/2 -translate-x-1/2 /md:left-auto lg:left-auto left-1/2  z-[90] bg-white/30 text-black backdrop-blur-lg p-4 rounded-lg shadow-lg  lg:space-y-0 lg:space-x-4 transition-all duration-300 opacity-80 hover:opacity-100  flex flex-row lg:flex-col justify-center items-center lg:h-[35%] md:h-[30%] lg:hover:translate-x-0 lg:translate-x-10 ">
      <div className="flex lg:flex-col  xl:flex-col 2xl:flex-col flex-row items-center">
        <a
          href="https://www.linkedin.com/in/aayushkakkar"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-1 lg:mb-1 mr-1 hover:text-blue-600 cursor-pointer text-3xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/__.aayushhhhhh.__/"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-1 lg:mb-1 mr-1 hover:text-pink-500 cursor-pointer text-3xl"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://github.com/aayushkakkar26"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-1 lg:mb-1 mr-1 hover:text-gray-500 cursor-pointer text-3xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://codesandbox.io/u/aayush90793"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-1 lg:mb-1 mr-1 hover:text-purple-500 cursor-pointer text-3xl"
        >
          <SiCodesandbox />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~018b59c8c5740b8f20?mp_source=share"
          target="_blank"
          rel="noopener noreferrer"
          className=" mb-1 lg:mb-1 mr-1 hover:text-green-500 cursor-pointer text-3xl"
        >
          <FaSquareUpwork />
        </a>
      </div>
    </div>
    {showScrollButton && (
      <motion.button  
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="bg-white bg-opacity-20 backdrop-blur-sm text-gray-900 p-3 md:p-4 rounded-full shadow-lg hover:bg-opacity-30 transition duration-300 group focus:outline-none focus:ring-4 focus:ring-[#D4A03E] focus:ring-opacity-50 fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
      aria-label="Scroll to about section"
    >
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ChevronUp className="w-6 h-6 md:w-8 md:h-8 group-hover:text-[#D4A03E] transition-colors duration-300" />
      </motion.div>
    </motion.button>
    )}

  </>
};

export default Socials;

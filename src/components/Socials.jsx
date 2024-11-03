import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { SiCodesandbox } from "react-icons/si";
import { FaSquareUpwork } from "react-icons/fa6";

const Socials = () => {
  return <div className="socials fixed top-1/2 right-4 transform -translate-y-1/2 z-[90] bg-white/30 text-black backdrop-blur-lg p-4 rounded-lg shadow-lg space-y-4 transition-all duration-300 opacity-80 hover:opacity-100 hover:translate-x-0 translate-x-10">
        <div className="flex flex-col items-start">
          <a
            href="https://www.linkedin.com/in/aayushkakkar"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 hover:text-blue-600 cursor-pointer text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/__.aayushhhhhh.__/"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 hover:text-pink-500 cursor-pointer text-3xl"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://github.com/aayushkakkar26"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 hover:text-gray-500 cursor-pointer text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://codesandbox.io/u/aayush90793"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 hover:text-purple-500 cursor-pointer text-3xl"
          >
            <SiCodesandbox />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~018b59c8c5740b8f20?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 cursor-pointer text-3xl"
          >
            <FaSquareUpwork />
          </a>
        </div>
      </div>
  
}

export default Socials

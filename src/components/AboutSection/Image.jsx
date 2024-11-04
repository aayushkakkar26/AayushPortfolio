import React, { useState } from 'react';
import AayushImg from "../../assets/Aayush.png"
export default function Component() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-3xl mx-auto">
      <div 
        className="relative cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={AayushImg}
          alt="Portfolio profile"
          className={`md:w-9/12 lg:w-9/12 sm:w-9/12 w-full md:ml-20 lg:ml-20 h-auto transition-all duration-500 ease-out ${
            isHovered ? 'glow-effect pulse-effect tilt-scale' : ''
          }`}
        />
        <div className={`
          absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#D4A03E]/70 to-transparent
          transition-all duration-500 ease-out
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `} />
        <div className={`
          absolute bottom-4 left-4 right-4 text-white text-center
          transition-all duration-500 ease-out transform
          ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
        `}>
          <p className="text-lg font-bold shadow-sm">Aayush Kakkar</p>
          <p className="text-sm italic">Turning bugs into features since… well, yesterday! :)</p>
        </div>
        <style jsx>{`
          .glow-effect {
            filter: drop-shadow(0 0 6px rgba(212, 160, 62, 0.6));
          }
          .pulse-effect {
            animation: pulseGlow 1.5s infinite alternate;
          }
          .tilt-scale {
            transform: scale(1.05) rotate(1deg);
          }
          @keyframes pulseGlow {
            from {
              filter: drop-shadow(0 0 6px rgba(212, 160, 62, 0.6));
            }
            to {
              filter: drop-shadow(0 0 12px rgba(212, 160, 62, 0.9));
            }
          }
        `}</style>
      </div>
    </div>
  );
}

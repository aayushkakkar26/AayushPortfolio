import React, { useState, useEffect, useRef, useContext } from 'react';
import { ToggleContext } from '../store/Toggle-Context';
import { div } from 'framer-motion/client';

export default function ExploreMore() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const { theme } = useContext(ToggleContext);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className='w-full h-full overflow-hidden'>

      <div ref={containerRef} className="flex flex-col items-center mt-10 mb-12">
        <h2
          className={` heading md:text-3xl text-xl mb-8 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-52 opacity-0'
            } ${theme === "light" ? "text-gray-800" : "text-gray-600"}`}
        >
          Explore More of My Work...
        </h2>
        <a
          href="https://codesandbox.io/u/aayush90793" // Replace with your actual CodeSandbox profile URL
          target="_blank"
          rel="noopener noreferrer"
          className={`md:text-lg text-sm font-semibold -mt-2 mb-8  hover:underline transition-transform duration-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-52 opacity-0'
            }
        ${theme === "light" ? 'text-gray-700' : 'text-[#D4A03E]'}`
          }
        >
          Visit my CodeSandbox Profile
        </a>
      </div>
    </div>
  );
}

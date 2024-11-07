import './Testimonial.css';
import React, { useState, useEffect, useContext, useCallback } from 'react';

import { ToggleContext } from '../../store/Toggle-Context';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { FaRobot } from "react-icons/fa6";

import man from "../../assets/man2.png"
import shikhu from "../../assets/shikhu.jpeg"
import marcaids from "../../assets/marcaids.png"
import chao from "../../assets/chao.jpg"
const testimonials = [
  {
    id: 1,
    name: "Anoop Saha",
    role: "Technical Project Manager, LTIMindtree",
    content: '" He is excellent, I strongly recommend him; his technical skills and dedication make him a standout professional, and he will be an asset to the company. His proactive approach and positive attitude contribute greatly to team success. "',
    image: [man]
  },
  {
    id: 2,
    name: "Shikhu Gautam",
    role: "Co-Founder, Marcaids",
    content: '" Collaborating with Aayush was truly exceptional. He took the lead with a clear vision and inspired the team to achieve more than we thought possible. His ability to navigate challenges and deliver results ahead of schedule was impressive. You can easily trust him with all your development queries.   "',
    image: [shikhu]
  },
  {
    id: 3,
    name: "Chirag Yadav",
    role: "Founder, Marcaids",
    content: '" We had a wonderful experience working with Aayush. He managed to work and lead the team and deliver the results before the expected timeline. He is hardworking, passionate and great asset to the team. "',
    image: [marcaids]
  },
  {
    id: 4,
    name: "Ankur Goel",
    role: "CEO, Chaotix.AI",
    content: '" Aayush made a remarkable impact during his brief time with us as an AI intern. Despite the short duration, he demonstrated leadership by taking charge of the team and driving progress effectively. His technical expertise and dedication were so impressive. "',
    image: [chao]
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAIPanelOpen, setIsAIPanelOpen] = useState(false);
  const { theme } = useContext(ToggleContext);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  const themeClasses = theme === 'light'
    ? 'bg-gradient-to-b from-gray-400 via-gray-500 to-gray-700 text-gray-700'
    : 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900';

  return (
    <div id="testimonials" className={`testimonial-section min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${themeClasses}`}>
      <div className="max-w-4xl w-full space-y-8 relative">
        <h2 className={`${theme === 'light' ? 'text-gray-800' : 'text-gray-600'} md:text-5xl sm:text-4xl text-3xl heading mb-20 mt-20`}>
          What People Say
        </h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 relative z-10 border border-gray-700"
            >
              <Quote className="absolute top-4 left-4 text-gray-500 opacity-20 w-16 h-16" />
              <div className="flex flex-col md:flex-row items-center mb-6">
                <img
                  className="h-24 w-24 rounded-full object-cover mb-4 md:mb-0 md:mr-6 border-4 border-[#D4A03E]"
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  loading="lazy"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-white">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-[#D4A03E] font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-lg italic leading-relaxed mt-4">
                {testimonials[currentIndex].content}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={prevTestimonial}
            className="bg-[#d49f3ec9] hover:bg-[#D4A03E] text-gray-600 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-[#D4A03E] focus:ring-opacity-50 transition-transform duration-200 transform hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-transform duration-200 transform hover:scale-125 ${
                  index === currentIndex ? 'bg-[#D4A03E]' : 'bg-gray-600 hover:bg-[#d49f3ec9]'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextTestimonial}
            className="bg-[#d49f3ec9] hover:bg-[#D4A03E] text-gray-600 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-[#D4A03E] focus:ring-opacity-50 transition-transform duration-200 transform hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* AI Perspective Toggle Button */}
      <motion.button
        onClick={() => setIsAIPanelOpen(!isAIPanelOpen)}
        className="absolute left-0 top-1/2 transform -translate-y-4 -translate-x-4 hover:-translate-x-4 bg-[#D4A03E]/30 text-gray-700 py-3 px-6 rounded-r-lg shadow-lg z-20"
        whileHover={{ backgroundColor: '#D4A03E' }}
      >
        <FaRobot className="text-black text-4xl" />
      </motion.button>

      {/* Sliding AI Perspective Panel */}
      <AnimatePresence>
        {isAIPanelOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute left-0 h-[50%] top-[30%] w-3/4 md:w-2/5 lg:w-1/3 bg-white/30 backdrop-blur-lg text-[black] rounded-lg p-6 z-30 shadow-lg overflow-y-auto"
          >
            <h2 className="text-2xl font-bold text-[#D4A03E] mb-4">AI's Perspective</h2>
            <p className="text-md leading-relaxed font-semibold italic text-gray-800">
              "Aayush stands out as an exceptional talent in technology. His innovative thinking and passion are evident in every project, as he effortlessly translates complex concepts into user-friendly solutions. Aayush's dedication to learning and applying new technologies will undoubtedly drive meaningful change in the industry."
            </p>
            <button
              onClick={() => setIsAIPanelOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}










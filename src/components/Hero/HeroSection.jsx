import "./Hero.css";
import { useContext, useState, useRef, useEffect } from "react";
import { ToggleContext } from "../../store/Toggle-Context";
import bgVideo from "../../assets/bg.mp4";
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection({ abtref }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      const largeScreen = window.innerWidth >= 768;
      setIsLargeScreen(largeScreen);
      if (largeScreen) {
        window.addEventListener('mousemove', handleMouseMove);
      } else {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down the video playback
    }
  }, []);

  function handleScrollAbout() {
    if (abtref.current) {
      abtref.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  const { theme } = useContext(ToggleContext);

  let classes = "hero-content centerDiv fixed h-full w-full ";

  if (theme === "light") {
    classes += " bg-gradient-to-b from-gray-700 via-gray-500 to-gray-400 ";
  } else {
    classes += " bg-gradient-to-b from-black via-gray-800 to-gray-800 text-[#D4A03E] ";
  }

  return (
    <div className="bigContainer flex justify-center items-center z-0" id="home">
      <div className={classes}>
        <div className="content relative z-10 flex flex-col items-center justify-center h-full px-4">
          <h3 className="mb-3 font-semibold text-xl">Hello, I'm </h3>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-shadow text-center"
          >
            AAYUSH KAKKAR
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-xl sm:text-2xl md:text-3xl mb-8 text-shadow text-center"
          >
            SOFTWARE ENGINEER
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleScrollAbout}
            className="bg-white bg-opacity-20 backdrop-blur-sm text-gray-900 p-3 md:p-4 rounded-full shadow-lg hover:bg-opacity-30 transition duration-300 group focus:outline-none focus:ring-4 focus:ring-[#D4A03E] focus:ring-opacity-50"
            aria-label="Scroll to about section"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ChevronDown className="w-6 h-6 md:w-8 md:h-8 group-hover:text-[#D4A03E] transition-colors duration-300" />
            </motion.div>
          </motion.button>
        </div>

        {isLargeScreen ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            loading="lazy"
            className={`absolute top-0 left-0 w-full h-full object-cover -z-10 ${theme === 'light' ? 'light-theme-video' : ''}`}
          >
            <source src={bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            className={`absolute inset-0 ${
              theme === "light"
                ? "bg-gradient-to-b from-gray-700 via-gray-500 to-gray-400"
                : "bg-gradient-to-b from-black via-gray-800 to-gray-800"
            } -z-10`}
          />
        )}

        <div className="absolute inset-0 bg-black opacity-60 -z-5" />
        {isLargeScreen && (
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${
                theme === "light" ? "rgba(107, 114, 128, 1)" : "rgba(212, 160, 62, 1)"
              } 0%, transparent 15%)`,
              zIndex: "inherit"
            }}
          />
        )}
      </div>
    </div>
  );
}

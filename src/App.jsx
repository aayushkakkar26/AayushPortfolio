  import './App.css';

  import HeroSection from './components/Hero/HeroSection';
  import AboutSection from './components/AboutSection/AboutSection';
  import Navbar from './components/Navbar';
  import SkillSection from './components/SkillSection/SkillSection';
  import ProjectsSection from './components/ProjectSection/ProjectsSection';
  import ExploreMore from './components/ExploreMore';
  import TestimonialsSection from './components/testimonial/TestimonialSection';
  import ContactSection from './components/ContactSection';
  import Socials from './components/Socials';
  import LoadingScreen from './components/LoadingScreen';
  import att from "../src/assets/Projects/att.png"
  import { useContext, useRef, useState, useEffect } from 'react';
  import { ToggleContext } from './store/Toggle-Context';

  function App() {
    const [isLoading, setIsLoading] = useState(true);
    const {theme} = useContext(ToggleContext);
    const aboutRef = useRef(null);

    let classes = " relative centerDiv min-h-screen   z-10"

    if(theme ==="light"){
      classes +=" bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 "
    }
    else{
      classes +=" bg-gradient-to-r from-gray-800 via-gray-900 to-black"
    }


    useEffect(() => {
      
      const preloadImages = [
        '../src/assets/Projects/att.png',
        '../src/assets/Projects/cart1.png',
        '../src/assets/Projects/cart2.png',
        '../src/assets/Projects/fake2.png',
        '../src/assets/Projects/fake3.png',
        '../src/assets/Projects/fake4.png',
        '../src/assets/Projects/fbclone.png',
        '../src/assets/Projects/gym1.png',
        '../src/assets/Projects/gym2.png',
        '../src/assets/Projects/Gym3.png',
        '../src/assets/Projects/Gym4.png',
        '../src/assets/Projects/Gym5.png',
        '../src/assets/Projects/Gym6.png',
        '../src/assets/Projects/Gym7.png',
        '../src/assets/Projects/Gym8.png',
        '../src/assets/Projects/invest.png',
        '../src/assets/Projects/itask.png',
        '../src/assets/Projects/ms1.png',
        '../src/assets/Projects/ms2.png',
        '../src/assets/Projects/ms3.png',
        '../src/assets/Projects/pick1.png',
        '../src/assets/Projects/pick2.png',
        '../src/assets/Projects/Prjm0.png',
        '../src/assets/Projects/prjm1.png',
        '../src/assets/Projects/prjm2.png',
        '../src/assets/Projects/prjm3.png',
        '../src/assets/Projects/quiz1.png',
        '../src/assets/Projects/quiz2.png',
        '../src/assets/Projects/quiz3.png',
        '../src/assets/Projects/stop1.png',
        '../src/assets/Projects/stop2.png',
        '../src/assets/Projects/tictac1.png',
        '../src/assets/Projects/tictac2.png',
        '../src/assets/Projects/tictac3.png',
        '../src/assets/Projects/todo.png',
        '../src/assets/Projects/vibe1.png',
        '../src/assets/Projects/vibe2.png',
        '../src/assets/Projects/vibe3.png',
        '../src/assets/Projects/weather.png',
        '../src/assets/Aayush.png',
        '../src/assets/bg.mp4',
        '../src/assets/gpt.png',
        '../src/assets/logo2.png',
        '../src/assets/logo3.png',
        '../src/assets/man2.png',
        
      
      ].map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });
    
      Promise.all(preloadImages).then(() => {
      setTimeout(()=>{
          setIsLoading(false);
      },5000) 
      });
    }, []);

    if (isLoading) {
      // Show loading screen if still loading
      return <LoadingScreen />;
    }
    return (
      <>
        
        <Navbar />
        <Socials />
        <div className="hero-section  top-0 left-0 w-full overflow-hidden  h-screen centerDiv  text-white ">
          <HeroSection abtref={aboutRef} />
        </div>

        <div ref={aboutRef} className="about-section relative z-20 min-h-screen centerDiv top-[80rem] ">
          <AboutSection />
        </div>
        <div className={`${classes} z-0 top-[70rem] md:top-[80rem] lg:top-[76rem] `}>
          <SkillSection />
        </div>

        <div className={`${classes} over-section top-[55rem] md:top-[80rem] lg:top-[76rem]  `}>
          <ProjectsSection />
          <ExploreMore />
        </div>


        <div className=" relative min-h-screen top-[45rem] md:top-[75rem] lg:top-[70rem]  ">
        <TestimonialsSection /> 
        </div>
        <div className="projects-section relative z-10 centerDiv min-h-sc top-[44rem]  md:top-[75rem] lg:top-[70rem]  ">

        <ContactSection />
        </div>
        {/* <div className="projects-section relative z-10 flex flex-col justify-center items-center   min-h-screen bg-black top-[75rem]">
        </div>   */}
        {/*
        */}


      </>
    );
  }

  export default App;

// Importing images
import Prjm0 from '../../assets/Prjm0.png';
import prjm1 from '../../assets/prjm1.png';
import prjm2 from '../../assets/prjm2.png';
import prjm3 from '../../assets/prjm3.png';
import ms1 from '../../assets/ms1.png';
import ms2 from '../../assets/ms2.png';
import ms3 from '../../assets/ms3.png';
import fbclone from '../../assets/fbclone.png';
import cart1 from '../../assets/cart1.png';
import cart2 from '../../assets/cart2.png';
import invest from '../../assets/invest.png';
import itask from '../../assets/itask.png';
import pick1 from '../../assets/pick1.png';
import pick2 from '../../assets/pick2.png';
import quiz1 from '../../assets/quiz1.png';
import quiz2 from '../../assets/quiz2.png';
import quiz3 from '../../assets/quiz3.png';
import stop1 from '../../assets/stop1.png';
import stop2 from '../../assets/stop2.png';
import tictac1 from '../../assets/tictac1.png';
import tictac2 from '../../assets/tictac2.png';
import tictac3 from '../../assets/tictac3.png';
import gym1 from '../../assets/gym1.png';
import gym2 from '../../assets/gym2.png';
import gym3 from '../../assets/gym3.png';
import gym4 from '../../assets/gym4.png';
import gym5 from '../../assets/gym5.png';
import gym6 from '../../assets/gym6.png';
import gym7 from '../../assets/gym7.png';
import gym8 from '../../assets/gym8.png';
import vibe1 from '../../assets/vibe1.png';
import vibe2 from '../../assets/vibe2.png';
import vibe3 from '../../assets/vibe3.png';
import weather from '../../assets/weather.png';
import todo from '../../assets/todo.png';
import fake2 from '../../assets/fake2.png';
import fake3 from '../../assets/fake3.png';
import fake4 from '../../assets/fake4.png';
import att from '../../assets/att.png';

// Project Data
const projectData = [
  {
    name: "Project Management App",
    images: [Prjm0, prjm1, prjm2, prjm3],
    techStack: ["React", "Tailwind CSS"],
    description: "A comprehensive app built with React and Tailwind CSS for managing projects efficiently.",
    projectLink: "https://projectmanagingapp.netlify.app/",
  },
  {
    name: "Microsoft Website Clone",
    images: [ms1, ms2, ms3],
    techStack: ["Tailwind CSS"],
    description: "A responsive clone of Microsoft's website using Tailwind CSS.",
    projectLink: "https://clonedms.netlify.app/",
  },
  {
    name: "Facebook Login Clone",
    images: [fbclone],
    techStack: ["Tailwind CSS"],
    description: "A streamlined login interface that mimics Facebook's login page, developed with Tailwind CSS.",
    projectLink: "https://fbnv.netlify.app/",
  },
  {
    name: "Cart Management System",
    images: [cart1, cart2],
    techStack: ["React", "Tailwind CSS"],
    description: "An intuitive cart management system created with React and Tailwind CSS to streamline online shopping.",
    projectLink: "https://cart-managing.netlify.app/",
  },
  {
    name: "Investment Calculator",
    images: [invest],
    techStack: ["React", "Tailwind CSS"],
    description: "A user-friendly investment calculator built with React and Tailwind CSS for calculating potential investment returns.",
    projectLink: "https://inves-cal.netlify.app/",
  },
  {
    name: "iTask- your task planner",
    images: [itask],
    techStack: ["React", "Tailwind CSS"],
    description: "A task planner application developed with React and Tailwind CSS for efficient task management.",
    projectLink: "https://itask-yourtaskplannerak.netlify.app/",
  },
  {
    name: "PlacePicker",
    images: [pick1, pick2],
    techStack: ["React", "Tailwind CSS"],
    description: "A React-based app that allows users to select and save locations using Tailwind CSS for styling.",
    projectLink: "https://geoplacepicker.netlify.app/",
  },
  {
    name: "Quiz App",
    images: [quiz1, quiz2, quiz3],
    techStack: ["React", "Tailwind CSS"],
    description: "An engaging quiz application built with React and Tailwind CSS that tests users' knowledge across various topics.",
    projectLink: "https://akquizzzapp.netlify.app/",
  },
  {
    name: "Stop Game",
    images: [stop1, stop2],
    techStack: ["React", "Tailwind CSS"],
    description: "A fun and interactive game application created using React and Tailwind CSS that challenges users' reflexes.",
    projectLink: "https://stop-game.netlify.app/",
  },
  {
    name: "Modern TicTacToe",
    images: [tictac1, tictac2, tictac3],
    techStack: ["React", "Tailwind CSS"],
    description: "A modern twist on the classic Tic Tac Toe game, developed with React and Tailwind CSS.",
    projectLink: "https://moderntictactoe.netlify.app/",
  },
  {
    name: "The Ultimate Gym - gym landing page",
    images: [gym1, gym2, gym3, gym4, gym5, gym6, gym7, gym8],
    techStack: ["JavaScript"],
    description: "A fully responsive landing page for a gym, designed with JavaScript to showcase services and classes.",
    projectLink: "https://theultimategym.netlify.app/",
  },
  {
    name: "Vibe With Us - a fully responsive music website",
    images: [vibe1, vibe2, vibe3],
    techStack: ["JavaScript"],
    description: "A music website created with JavaScript that adapts seamlessly across devices.",
    projectLink: "https://vibewithusmusic.netlify.app/",
  },
  {
    name: "Aaj Ka Weather",
    images: [weather],
    techStack: ["JavaScript"],
    description: "A weather application built with JavaScript that provides real-time weather updates.",
    projectLink: "https://aajkaweather.netlify.app/",
  },
  {
    name: "Todo List App",
    images: [todo],
    techStack: ["JavaScript"],
    description: "A simple and effective todo list application created with JavaScript for personal task management.",
    projectLink: "https://mytodolistapp9.netlify.app/",
  },
  {
    name: "Fake News Detection",
    images: [fake2, fake3, fake4],
    techStack: ["Python"],
    description: "A Python-based application that utilizes machine learning to identify fake news articles, training 5 models: DT, SVM, LR, RF, GB.",
    projectLink: "https://colab.research.google.com/drive/1CuGIvHf7UmPFB_yL5UxubZfNBR7de7Hv#scrollTo=V-sywvSS1k9F",
  },
  {
    name: "Attendance System using Face Recognition",
    images: [att],
    techStack: ["Python"],
    description: "A Python project that implements an attendance system using facial recognition technology for enhanced security.",
    projectLink: "https://github.com/aayushkakkar26/AttendanceSystemUsingFaceRecognition",
  },
  // Add more projects as needed
];

export default projectData;

import React, { useContext, useState } from 'react';
import ProjectModal from './ProjectModal';
import projectData from './Project';
import { ToggleContext } from '../../store/Toggle-Context';


export default function ProjectSection() {
  const techStacks = [...new Set(projectData.flatMap(project => project.techStack))];
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTech, setSelectedTech] = useState(techStacks[0]);
  const {theme} = useContext(ToggleContext);
  const filteredProjects = selectedTech
    ? projectData.filter(project => project.techStack.includes(selectedTech))
    : projectData;

  // Animation Variants

  const lightBut = " bg-gray-700 text-white hover:text-white"
  const darkBut = " bg-[#D4A03E] text-gray-600 hover:text-gray-800"

  return (
    <div className="w-[85%] mx-auto  " id="work">
      <h2 className={`heading md:text-5xl   sm:text-4xl text-3xl mb-8 ${theme === "light"? "text-gray-800": "text-gray-600"}`}>
        Projects
      </h2>

      {/* Tech Stack Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {techStacks.map((tech, index) => (
          <button
            key={index}
            onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
            className={`md:px-4 px-2 md:py-2 py-0 rounded-lg font-semibold transition duration-300
            ${selectedTech === tech ? (theme === "dark" ? darkBut : lightBut) : "text-gray-600"}
            ${theme === "dark" ? "hover:text-[#D4A03E]" : " hover:text-white"}
          `}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Animated Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="relative h-52 cursor-pointer overflow-hidden transition-transform transform hover:scale-105 shadow-lg"

          >
            <img
              src={project.images[0]}
              alt={project.name}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              loading='lazy'
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

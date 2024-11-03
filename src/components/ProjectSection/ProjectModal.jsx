import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
export default function ProjectModal({ project, onClose }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + project.images.length) % project.images.length);
  };

  // Close modal on "Esc" key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[1000]"
      onClick={onClose} // Close modal on backdrop click
    >
      <div
        className="bg-white/80 bg-opacity-90 rounded-lg max-w-sm w-full relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close Button */}
        <button
          className="absolute mt-[106%]  text-3xl font-bold right-8 text-center text-gray-500 "
          onClick={onClose}
        >
          &times;
        </button>

        {/* Image Slider */}
        <div className="mb-4 relative w-full bg-center bg-cover transition-all duration-200 ">
          <img
            src={project.images[currentImage]}
            alt={`${project.name} Slide`}
            className="w-full h-60 object-cover rounded-lg    "
            loading='lazy'
          />
          <button
            onClick={prevImage}
            className="absolute left-0 top-[100%] transform -translate-y-1/2 p-2 font-bold text-[#fdb736] text-2xl bg-gray-600 rounded-full shadow-md hover:bg-gray-500"
          >
            &#8249;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-0 top-[100%] transform -translate-y-1/2 p-2 font-bold  text-[#fdb736] text-2xl  bg-gray-600 rounded-full shadow-md hover:bg-gray-500"
          >
            &#8250;
          </button>
        </div>

        {/* Project Details */}
        <div className="details w-full p-8">
          <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
          <p className="text-gray-700 mb-4">{project.description}</p>

          {/* Tech Stack */}
          <div className="mb-4 flex gap-2">
            {project.techStack.map((tech, index) => (
              <span key={index} className="px-2 text-white py-1 rounded-lg text-xs bg-gray-500">
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4A03E] text-gray-600 px-4 py-2 rounded-lg font-semibold hover:bg-[#d49f3ed0]"
            >
              View Site
            </a>
          </div>
        </div>
      </div>
    </div>, document.getElementById('modal-root')
  );
}

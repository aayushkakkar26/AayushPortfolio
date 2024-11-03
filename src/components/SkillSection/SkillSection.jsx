import { useContext } from 'react';
import './SkillSection.css';
import { ToggleContext } from '../../store/Toggle-Context';

export default function SkillSection() {
    const skills = [
        { name: 'JavaScript', rating: 4 },
        { name: 'TypeScript', rating: 2 },
        { name: 'C#', rating: 3 },
        { name: 'Python', rating: 3 },
        { name: 'C++', rating: 4 },
        { name: 'C', rating: 4 },
        { name: 'React', rating: 4 },
        { name: 'APIs', rating: 3 },
        { name: 'Redux ToolKit', rating: 4 },
        { name: 'Tailwind CSS', rating: 4.5 },
        { name: 'Bootstrap', rating: 4 },
        { name: '.NET', rating: 3.5 },
        { name: 'Angular', rating: 3 },
        { name: 'HTML', rating: 5 },
        { name: 'CSS', rating: 4.5 },
        { name: 'AI', rating: 3 },
        { name: 'ML Libraries', rating: 2 },
        { name: 'Data Visualization', rating: 2 },
        { name: 'NLP', rating: 2 },
        { name: 'Open_CV', rating: 2 },
        { name: 'Face Recognition', rating: 2.5 },
        { name: 'MYSQL', rating: 3 },
        { name: 'SQL', rating: 4 },
    ];
    const {theme} = useContext(ToggleContext);
    return (
        <div className="skills-section overflow-hidden p-0 rounded-lg mx-auto ">
            <h2 className={`heading md:text-5xl  sm:text-4xl text-3xl mb-10 mt-16 ${theme === "light"? "text-gray-800": "text-gray-600"}`}>Tech(s) I Have Worked With</h2>

            <div className="skills-wrapper h-80 mt-5">
                
                <div className="skills-row flex justify-center gap-6 animate-left-to-right mb-8">
                    {skills.concat(skills).map((skill, index) => (
                        <div
                            key={index}
                            className="skill-item relative bg-transparent text-gray-700 md:text-xl text-lg font-semibold rounded-full md:px-6 md:py-6 px-4 py-4 shadow-md transition-all duration-500 transform hover:bg-slate-600 hover:text-white cursor-pointer centerDiv "
                        >
                            {skill.name}
                            <div className="absolute inset-0 top-12 flex items-center justify-center transition-opacity duration-300 opacity-0   hover:opacity-100">
                                
                                {[...Array(5)].map((_, starIndex) => (
                                        <span key={starIndex} className={`text-lg star ${starIndex < Math.floor(skill.rating) ? 'filled' : ''}`}>
                                            ★
                                        </span>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>

                
                <div className="skills-row flex justify-center gap-6 animate-right-to-left">
                    {skills.concat(skills).map((skill, index) => (
                        <div
                            key={index}
                            className="skill-item relative bg-transparent text-gray-700 md:text-xl text-lg font-semibold rounded-full md:px-6 md:py-6 px-4 py-4 shadow-md transition-all duration-300 transform hover:bg-slate-600 hover:text-white cursor-pointer centerDiv"
                        >
                            {skill.name}
                            <div className="absolute inset-0 top-12  flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100 ">
                                
                                {[...Array(5)].map((_, starIndex) => (
                                        <span key={starIndex} className={`text-lg star ${starIndex < Math.floor(skill.rating) ? 'filled' : ''}`}>
                                            ★
                                        </span>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

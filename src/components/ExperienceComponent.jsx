import React, { useContext, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Calendar, ExternalLink } from 'lucide-react'
import { ToggleContext } from '../store/Toggle-Context'


const experiences = [
    {
        title: "Software Engineer",
        company: "LTIMindtree",
        period: "Mar 2024 - Present",
        description: "As a Software Engineer,I support the Refinitiv Connected Risk Management Application across DEV, UAT, and Production. I handle application maintenance, user interactions for issue resolution, and manage SSL/TLS certificates, strengthening my debugging skills and client liaison abilities.",
        skills: ["Javascript", "HTML", "CSS", "Power BI", "Database Configuration", "Debugging", "Client Relations"]
    },
    {
        title: "Graduate Engineer Trainee",
        company: "LTIMindtree",
        period: "Dec 2023 - Mar 2024",
        description: "Completed a comprehensive Full Stack training in .NET, mastering DotNet technologies and enhancing project management skills. Collaborated on an Online Job Application Portal (CareersHub) capstone project, showcasing teamwork and technical proficiency. This training led to securing a full-time Software Engineer position at LTIMindtree.",
        skills: [".NET framework", "Angular", "TypeScript", "C#","MSSQL Server", "HTML", "CSS"]
    },
    {
        title: "AI Intern",
        company: "Chaotix.AI",
        period: "Nov 2023 - Dec 2023",
        description: "I lead impactful AI development, specializing in machine learning and web development to create engaging, seamless experiences. At Chaotix.AI, I thrive in team-driven projects, integrating AI and creativity into captivating web games.",
        skills: ["Python", "APIs", "Javascript", "HTML", "CSS"]
    },
    {
        title: "Data Scientist Intern",
        company: "TCS iON",
        period: "May 2022 - Aug 2022",
        description: "Worked on Salary Prediction Dashboard for HRs! Using Python and Excel, I created a dataset with 200,000 datapoints, including attributes like Name, Age, Salary, and Experience. Focusing on building new skills, strengthening concepts, and applying them in real projects",
        skills: ["Python", "ML Libraries", "NLP", "Data Visualization",]
    },
    {
        title: "Web Development Intern",
        company: "LetsGrowMore",
        period: "Oct 2021 - Nov 2021",
        description: "Started my journey in web development, working on various client projects and honing my skills in HTML, CSS, and JavaScript.",
        skills: ["HTML", "CSS", "JavaScript", "jQuery"]
    }
]

const ExperienceCard = React.memo(({ experience }) => {
    const { theme } = useContext(ToggleContext);

    return (
        <motion.div
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            initial={{ opacity: 0.5, y: 30, scale: 0.95 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 80 }}
            className="mb-24 last:mb-0"
        >
            <div className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl ${theme === "light" ? "bg-gray-700" : "bg-gray-900 hover:shadow-[#D4A03E]/20"}`}>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className={`text-2xl font-bold ${theme === "light" ? "text-white" : "text-[#D4A03E]"}`}>{experience.title}</h3>
                        <span className="text-sm text-gray-400 flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-[#D4A03E]" />
                            {experience.period}
                        </span>
                    </div>
                    <p className={`${theme === "dark" ? "text-white" : "text-[#D4A03E]"} mb-4`}>{experience.company}</p>
                    <p className="text-gray-400 text-md leading-relaxed mb-5">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-3 py-1 bg-gray-700 text-[#D4A03E] rounded-full text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
});

const ExperienceComponent = () => {
    const { theme } = useContext(ToggleContext);

    return (
        <div className="min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="exp">
            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className={`${theme === "light" ? "text-gray-800" : "text-gray-600"} md:text-5xl sm:text-4xl text-3xl heading mb-20 mt-20`}>
                    Work Experience
                </h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} experience={exp} />
                    ))}
                </div>
            </div>

            {/* Background decorations with media query adjustments */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="hidden md:block absolute top-1/4 left-1/4 w-48 h-48 bg-[#D4A03E] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
                <div className="hidden md:block absolute top-3/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
                <div className="hidden md:block absolute bottom-1/4 left-1/2 w-48 h-48 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
            </div>
        </div>
    );
};

export default ExperienceComponent;

/* Global CSS for blob animation */
const globalStyles = `
@keyframes blob {
  0%, 100% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(20px, -30px) scale(1.05); }
  66% { transform: translate(-15px, 20px) scale(0.95); }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-4000 { animation-delay: 4s; }
`;
export default function ExperienceSection() {
    const experiences = [
        {
            company: "LTIMindtree",
            role: "Software Engineer",
            duration: "2024 - Present",
            description: "Working on web development and support for the ERM application using modern frameworks and tools.",
        },
        {
            company: "Chaotix.AI",
            role: "AI Intern",
            duration: "2023",
            description: "Built machine learning models and contributed to data science projects using Python.",
        },
        // Add more experiences here
    ];

    return (
        <div className="experience-section p-16 bg-white">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Experience</h2>
            <div className="space-y-6">
                {experiences.map((experience) => (
                    <div key={experience.company} className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-2">{experience.role} at {experience.company}</h3>
                        <p className="text-gray-700 mb-2">{experience.duration}</p>
                        <p className="text-gray-600">{experience.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

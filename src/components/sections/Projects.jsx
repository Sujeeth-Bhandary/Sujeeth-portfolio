import RevealOnScroll from "../Reveal";

export const Projects = () => {
  const projects = [
    {
      title: "AI Chatbot (MERN Stack)",
      description:
        "An intelligent AI chatbot capable of understanding user queries and providing contextual responses using modern AI techniques.",
      tech: ["React", "Node.js", "AI", "API", "Express"],
    },
    {
      title: "Blood Pressure Analysis",
      description:
        "A health-focused application that analyzes blood pressure readings and provides insights using data-driven logic.",
      tech: ["Python", "Data Analysis", "Visualization"],
    },
    {
      title: "Real-time Location Tracker",
      description:
        "A real-time system that tracks and displays a user’s live location using internet connectivity.",
      tech: ["Node.js","Express","Socket","Leaflet"],
    },
    {
      title: "Excel Analytics (MERN Stack)",
      description:
        "A MERN stack application that processes Excel files and visualizes data through interactive charts and dashboards.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      title: "Currency Converter",
      description:
        "A real-time currency converter using live exchange rates with a clean and responsive UI.",
      tech: ["JavaScript", "API", "HTML", "CSS"],
    },
    {
      title: "Stone Paper Scissors",
      description:
        "A fun interactive Stone-Paper-Scissors game built with JavaScript and simple game logic.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="max-w-6xl w-full px-6">

          {/* Heading */}
          <h2
            className="text-center text-4xl md:text-6xl font-extrabold mb-12
            bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
            bg-[length:200%_200%] bg-clip-text text-transparent
            animate-gradient"
          >
            Projects
          </h2>

          {/* Project Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6
                hover:border-blue-500 transition-all duration-300
                hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full
                      bg-black/40 border border-gray-700 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};

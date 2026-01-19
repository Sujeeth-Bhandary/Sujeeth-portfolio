import { SiJavascript, SiReact, SiHtml5, SiCss3, SiTailwindcss, SiVite,
         SiNodedotjs, SiExpress, SiMongodb, SiJsonwebtokens,
         SiPython, SiCplusplus, SiMysql } from "react-icons/si";
import { DiJava } from "react-icons/di";
import RevealOnScroll from "../Reveal";
const frontendSkills = [
  { name: "JavaScript", icon: <SiJavascript size={20} /> },
  { name: "React", icon: <SiReact size={20} /> },
  { name: "HTML", icon: <SiHtml5 size={20} /> },
  { name: "CSS", icon: <SiCss3 size={20} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={20} /> },
  { name: "Vite", icon: <SiVite size={20} /> },
];

const backendSkills = [
  { name: "Node.js", icon: <SiNodedotjs size={20} /> },
  { name: "Express", icon: <SiExpress size={20} /> },
  { name: "MongoDB", icon: <SiMongodb size={20} /> },
  { name: "JWT Authentication", icon: <SiJsonwebtokens size={20} /> },
];

const languages = [
  { name: "Python", icon: <SiPython size={20} /> },
  { name: "C++", icon: <SiCplusplus size={20} /> },
  { name: "Java", icon: <DiJava size={20} /> },
  { name: "SQL", icon: <SiMysql size={20} /> },
];

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6"
    >
        <RevealOnScroll>
      <div className="max-w-6xl w-full">

        {/* Heading */}
        <h2
          className="text-center text-4xl md:text-6xl font-extrabold mb-12
          bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
          bg-[length:200%_200%] bg-clip-text text-transparent
          animate-gradient"
        >
          About Me
        </h2>

        {/* Description */}
        <p className="text-center text-gray-400 text-lg max-w-3xl mx-auto mb-14 leading-relaxed">
          I’m a full-stack developer focused on building modern web applications using
          the MERN stack. I enjoy crafting clean user interfaces, developing secure
          backend systems, and strengthening my problem-solving skills through data
          structures and algorithms.
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          {/* Frontend */}
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-5 text-center">
              Frontend
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {frontendSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm
                  bg-black/40 border border-gray-700 text-gray-300
                  hover:border-blue-500 hover:text-blue-400 transition"
                >
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-5 text-center">
              Backend
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {backendSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm
                  bg-black/40 border border-gray-700 text-gray-300
                  hover:border-purple-500 hover:text-purple-400 transition"
                >
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Languages & DSA */}
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-pink-400 mb-5 text-center">
              Languages & DSA
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {languages.map((skill) => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm
                  bg-black/40 border border-gray-700 text-gray-300
                  hover:border-pink-500 hover:text-pink-400 transition"
                >
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

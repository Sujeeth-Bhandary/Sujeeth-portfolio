import RevealOnScroll from "../Reveal";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center"
    >
        <RevealOnScroll>
      <div className="text-center z-10 px-5">
        
        {/* Gradient Grid Text */}
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight
          bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
          bg-[length:200%_200%] bg-clip-text text-transparent
          animate-gradient drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]
        ">
          Hi, I'm Sujeeth
        </h1>

        <p className="text-gray-400 mt-6 mb-10 text-lg max-w-xl mx-auto leading-relaxed">
          I’m Sujeeth, a Computer Science undergraduate with a strong interest in full-stack web development and applied artificial intelligence. I 
          enjoy building scalable web applications using the MERN stack and working on data-driven projects 
          that solve real-world problems. With a solid foundation in programming, problem-solving, and modern development tools, 
          I’m eager to contribute to impactful software projects while continuously learning and growing as a developer.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="#projects"
            className="bg-blue-500 text-white px-7 py-3 rounded-md
              hover:bg-blue-600 transition-all duration-300
              hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline transition"
          >
            Contact Me
          </a>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

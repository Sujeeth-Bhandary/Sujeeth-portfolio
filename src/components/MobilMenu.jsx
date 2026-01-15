import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen 
      bg-[rgba(10,10,10,0.9)] backdrop-blur-lg z-30
      transform transition-transform duration-300 ease-in-out
      ${menuOpen ? "translate-y-0" : "-translate-y-full"}
      ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <button
        className="absolute top-4 right-4 text-white text-3xl"
        onClick={() => setMenuOpen(false)}
      >
        &times;
      </button>

      {/* Menu links */}
      <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
        <a href="#home" onClick={() => setMenuOpen(false)} className="text-white hover:text-blue-500">Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)} className="text-white hover:text-blue-500">About</a>
        <a href="#projects" onClick={() => setMenuOpen(false)} className="text-white hover:text-blue-500">Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)} className="text-white hover:text-blue-500">Contact</a>
      </div>
    </div>
  );
};

import { useEffect } from "react"

export const Navbar = ({ menuOpen, setMenuOpen }) => {
     useEffect(()=>{
        document.body.style.overflow=menuOpen?"hidden":"";
    },[menuOpen]
    )
  return (
   
    <nav className="fixed top-0 w-full bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-gray-800 z-40 shadow-lg">
      <div className="max-w-5xl px-4 mx-auto">
        <div className="flex justify-between items-center h-16">
          
          <a href="#home" className="font-mono text-white font-bold text-xl">
            Sujeeth<span className="text-blue-500">.tech</span>
          </a>

          {/* Mobile menu icon */}
          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white text-2xl"
          onClick={()=>{setMenuOpen(!menuOpen)}}>
            &#9776;
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-white hover:text-blue-500">Home</a>
            <a href="#about" className="text-white hover:text-blue-500">About</a>
            <a href="#projects" className="text-white hover:text-blue-500">Projects</a>
            <a href="#contact" className="text-white hover:text-blue-500">Contact</a>
          </div>

        </div>
      </div>
    </nav>
  );
};

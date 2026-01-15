import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobilMenu";
import { Home } from "./components/sections/Home";  
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div>
     
    {!isLoaded && <LoadingScreen onComplete={() => setLoaded(true)} />}


      
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;

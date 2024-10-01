import React, { useState } from "react";
import { Navbar } from "./components/NavBar/Navbar"; 
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

function App() {
  const [activeComponent, setActiveComponent] = useState("home"); // Initial component is home

  // Function to handle section change
  const handleNavClick = (section) => {
    setActiveComponent(section.toLowerCase()); // Update the active component state
  };

  return (
    <div>
      {/* Conditionally render Navbar */}
      {activeComponent !== "home" && <Navbar handleSectionChange={handleNavClick} />}

      {/* Render components based on the active component */}
      {activeComponent === "home" && <Home onNavClick={handleNavClick} />}
      {activeComponent === "about" && <About />}
      {activeComponent === "skills" && <Skills />}
      {activeComponent === "projects" && <Projects />}
      {activeComponent === "contact" && <Contact />}
    </div>
  );
}

export default App;

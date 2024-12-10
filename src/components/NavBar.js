import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useState } from "react";
import Button from "./Button";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center bg-black text-white px-6 py-4 shadow-lg z-50 h-32 border-b-2 border-purple-500">
      {/* Left-aligned Buttons */}
      <div className="flex space-x-6">
        {/* <NavButton label="Work" />
        <NavButton label="About" /> */}
        <Button>Work</Button>
        <Button>Skills</Button>
        <Button>About Me</Button>
      </div>

      {/* Centered Logo */}
      <div className="flex-grow flex justify-center mr-44">
        <Logo />
      </div>

      {/* Right-aligned Social Media and Dark Mode Toggle */}
      <div className="flex ">
        <DarkLightIcon />
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <div>
      <h1 className="font-antonsc text-5xl font-bold tracking-wide">
        Mariam Maher
      </h1>
    </div>
  );
}

// function NavButton({ label }) {
//   return (
//     <button className="text-white font-semibold hover:text-pink-500 transition duration-200">
//       {label}
//     </button>
//   );
// }

function DarkLightIcon() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode); // Example of dark mode toggle
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Dark Mode/Light Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="text-2xl text-white dark: from-purple-500 to-pink-500 transition duration-200"
      >
        {darkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </div>
  );
}

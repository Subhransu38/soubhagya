import { useContext, useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import LOGO from "../assets/logo.png";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full p-4 bg-light-background dark:bg-dark-background z-10 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="home" smooth duration={500}>
          <img
            src={LOGO}
            alt="logo"
            className="w-auto h-[30px] md:h-[50px] cursor-pointer object-cover"
          />
        </Link>

        {/* Navigation Links */}
        <nav
          className={`absolute md:relative top-[70px] md:top-auto right-0 md:right-auto bg-light-background dark:bg-dark-background md:flex md:items-center md:space-x-6 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0 md:space-y-0 space-y-4 flex flex-col md:flex-row p-6 md:p-0 shadow-lg md:shadow-none`}
        >
          <ul className="md:flex md:space-x-6 space-y-4 md:space-y-0">
            {[
              { name: "Home", to: "home" },
              { name: "About", to: "about" },
              { name: "Education", to: "education" },
              { name: "Research", to: "research" },
              { name: "Contact", to: "contact" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth
                  duration={500}
                  spy
                  activeClass="active"
                  className="text-light-textPrimary dark:text-dark-textPrimary cursor-pointer hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Light/Dark Mode Toggle and Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Light/Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="text-light-textPrimary dark:text-dark-textPrimary hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
          >
            {theme === "light" ? <FaSun size={24} /> : <FaMoon size={24} />}
          </button>

          {/* Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="text-light-textPrimary dark:text-dark-textPrimary md:hidden hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}

import { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import useTheme from "../../hooks/useTheme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      if (currentScrollY < 50) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navLinks = [
    { name: "Sobre Mí", id: "about" },
    { name: "Experiencia", id: "jobs" },
    { name: "Proyectos", id: "projects" },
    { name: "Contacto", id: "contact" },
  ];

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 ease-in-out px-6 md:px-10 flex items-center justify-between
        ${isVisible ? "translate-y-0" : "-translate-y-full"} 
        ${
          isAtTop
            ? "h-24 bg-transparent shadow-none"
            : "h-16 bg-white/90 dark:bg-[#0a192f]/90 backdrop-blur-md shadow-lg"
        }
      `}
    >
      <div className="flex items-center justify-center">
        <a
          href=""
          onClick={(e) => handleLinkClick(e, "home")}
          className="group w-11 h-11 text-blue-600 dark:text-blue-400 transition-transform duration-300 hover:-translate-y-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="
        w-full h-full
        transition-all duration-500
        group-hover:scale-110
        group-hover:text-blue-500
      "
          >
            <circle cx="50" cy="50" r="42" />
            
            <text
              x="49%"
              y="52%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="44"
              fill="currentColor"
              stroke="none"
              className="font-extrabold pointer-events-none"
            >
              A
            </text>
          </svg>
        </a>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <ol className="flex gap-8 list-none">
          {navLinks.map((link, index) => (
            <li key={link.id}>
              <a
                href={`${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="group text-sm font-mono text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {link.name}
                </span>
              </a>
            </li>
          ))}
        </ol>

        <a
          href="/resume.pdf"
          target="_blank"
          className="px-4 py-2 text-sm font-mono text-blue-600 border border-blue-600 rounded hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900/20 transition-all"
        >
          Resume
        </a>

        <button
          onClick={toggleTheme}
          className="ml-4 text-gray-500 hover:text-blue-600 transition-colors"
        >
          {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
        </button>
      </div>

      <div className="md:hidden flex items-center z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue-600 relative z-50"
        >
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      <div
        className={`fixed inset-y-0 right-0 w-[75vw] bg-white dark:bg-[#112240] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link, index) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => handleLinkClick(e, link.id)}
            className="text-gray-700 dark:text-gray-300 font-mono text-lg flex flex-col items-center gap-2"
          >
            <span className="text-blue-600 text-sm">0{index + 1}.</span>
            {link.name}
          </a>
        ))}
        <a
          href="/resume.pdf"
          className="px-10 py-3 border border-blue-600 text-blue-600 rounded text-sm font-mono"
        >
          Resume
        </a>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
        ></div>
      )}
    </header>
  );
};

export default Navbar;

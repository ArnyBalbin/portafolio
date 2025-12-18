import { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import useTheme from "../../hooks/useTheme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setIsAtTop(currentScrollY < 50);
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
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-in-out px-6 md:px-10 flex items-center justify-between
          ${isVisible ? "translate-y-0" : "-translate-y-full"} 
          ${
            isAtTop
              ? "h-24 bg-transparent shadow-none"
              : "h-16 bg-white/90 dark:bg-dark/95 backdrop-blur-md shadow-lg" // USANDO TU VARIABLE 'dark'
          }
        `}
      >
        <div className="flex items-center z-50">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, "home")}
            className="group w-10 h-10 text-primary" // USANDO TU VARIABLE 'primary'
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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ol className="flex gap-6 list-none">
            {navLinks.map((link, index) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className="group text-xs font-mono text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  <span className="group-hover:text-primary transition-colors">
                    {link.name}
                  </span>
                </a>
              </li>
            ))}
          </ol>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-mono text-primary border border-primary rounded hover:bg-blue-50 dark:hover:bg-primary/10 transition-all"
          >
            Resume
          </a>

          <button
            onClick={toggleTheme}
            className="ml-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
          >
            {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center z-50">
          <button onClick={() => setIsOpen(true)} className="text-primary p-2">
            <FiMenu size={35} />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-[100] md:hidden transition-all duration-300
          ${isOpen ? "visible" : "invisible delay-300"}
        `}
      >
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out
            ${isOpen ? "opacity-100" : "opacity-0"}
          `}
        ></div>

        <aside
          className={`absolute top-0 right-0 bottom-0 w-[75vw] max-w-[400px] 
            bg-white dark:bg-slate-800 
            shadow-2xl flex flex-col justify-center items-center transform transition-transform duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)]
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-primary p-2"
          >
            <FiX size={35} />
          </button>

          <nav className="flex flex-col gap-8 text-center w-full px-10">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={`${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="group flex flex-col items-center gap-1 text-gray-700 dark:text-gray-200 font-mono text-lg hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              className="mt-4 px-10 py-4 border border-primary text-primary rounded hover:bg-blue-50 dark:hover:bg-primary/10 transition-all mx-auto"
            >
              Resume
            </a>

            <button
              onClick={toggleTheme}
              className="mt-6 flex items-center gap-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors mx-auto"
            >
              {theme === "light" ? (
                <>
                  <FiMoon size={20} />{" "}
                  <span className="font-mono text-sm">Dark</span>
                </>
              ) : (
                <>
                  <FiSun size={20} />{" "}
                  <span className="font-mono text-sm">Light</span>
                </>
              )}
            </button>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Navbar;

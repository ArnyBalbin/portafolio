import { FiCode, FiDatabase, FiTool } from "react-icons/fi";

const stack = [
  {
    title: "Frontend",
    icon: <FiCode className="text-blue-600 text-xl" />,
    items: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    icon: <FiDatabase className="text-green-600 text-xl" />,
    items: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "REST APIs",
    ],
  },
  {
    title: "Otros",
    icon: <FiTool className="text-purple-600 text-xl" />,
    items: [
      "Python",
      "Django",
      "Java",
      "Spring Boot",
      "Docker",
      "Git & GitHub",
    ],
  },
];

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
          {/* Foto */}
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <div className="relative w-56 h-56 group">
              {/* Marco decorativo */}
              <div
                className="
        absolute inset-0
        rounded-2xl
        border-2 border-blue-600/60
        translate-x-3 translate-y-3
        transition-all duration-300
        group-hover:translate-x-1 group-hover:translate-y-1
      "
              />

              {/* Imagen */}
              <img
                src="/profile.png"
                alt="Arny Balbin"
                className="
        relative
        w-full h-full
        object-cover
        rounded-2xl
        bg-gray-100 dark:bg-gray-800
        transition-transform duration-300
        group-hover:-translate-x-1 group-hover:-translate-y-1
      "
              />
            </div>
          </div>

          {/* Texto */}
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Sobre mí
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Me desempeño como desarrollador full stack, con preferencia por el
              ecosistema
              <span className="text-gray-900 dark:text-gray-200 font-medium">
                {" "}
                PERN{" "}
              </span>
              para la construcción de aplicaciones web modernas, escalables y
              bien estructuradas.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Disfruto trabajar el frontend cuidando la experiencia de usuario,
              pero también desarrollo y diseño APIs, bases de datos y lógica de
              servidor que sostienen aplicaciones completas de principio a fin.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              He trabajado con distintas tecnologías y lenguajes, lo que me
              permite adaptarme a diferentes contextos y elegir la herramienta
              adecuada según el problema.
            </p>

            {/* Stack */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stack.map((group) => (
                <div
                  key={group.title}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-5"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {group.icon}
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-gray-100">
                      {group.title}
                    </h3>
                  </div>

                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-blue-600">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

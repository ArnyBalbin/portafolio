import { FiCode, FiDatabase, FiTool } from "react-icons/fi";

const stack = [
  {
    title: "Frontend",
    icon: <FiCode className="text-primary" />,
    items: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    icon: <FiDatabase className="text-primary" />,
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Herramientas",
    icon: <FiTool className="text-primary" />,
    items: ["Python", "Git & GitHub", "Docker", "Java"],
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="w-full max-w-5xl mx-auto px-4 py-24 md:py-32 flex flex-col justify-center"
    >
      {/* Título de Sección con Línea y Número */}
      <div className="flex items-center gap-4 mb-10 md:mb-14">
        <h2 className="flex items-center text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
          Sobre mí
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-10 items-start">
        {/* COLUMNA TEXTO (Ocupa 3 de 5 columnas en desktop) */}
        <div className="md:col-span-3 text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
          <p className="mb-4">
            Me desempeño como desarrollador full stack, con preferencia por el
            ecosistema
            <span className="text-primary font-medium"> PERN </span>
            (Postgres, Express, React, Node) para la construcción de
            aplicaciones web modernas, escalables y bien estructuradas.
          </p>

          <p className="mb-4">
            Disfruto trabajar el frontend cuidando la experiencia de usuario,
            pero también desarrollo y diseño APIs, bases de datos y lógica de
            servidor que sostienen aplicaciones completas de principio a fin.
          </p>

          <p className="mb-8">
            He trabajado con distintas tecnologías y lenguajes, lo que me
            permite adaptarme a diferentes contextos y elegir la herramienta
            adecuada según el problema. Aquí algunas de las tecnologías con las
            que he estado trabajando recientemente:
          </p>

          {/* STACK TECNOLÓGICO (Lista limpia) */}
          <div className="grid grid-cols-2 gap-4">
            {stack.map((group) => (
              <div key={group.title} className="mb-2">
                <div className="flex items-center gap-2 mb-2">
                  {group.icon}
                  <h3 className="font-bold text-sm text-gray-900 dark:text-gray-100 font-mono">
                    {group.title}
                  </h3>
                </div>
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[13px] md:text-sm font-mono"
                    >
                      <span className="text-primary text-xs">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMNA IMAGEN (Ocupa 2 de 5 columnas en desktop) */}
        <div className="md:col-span-2 flex justify-center md:justify-end mt-8 md:mt-2">
          <div className="relative w-64 h-64 md:w-72 md:h-72 group">
            {/* Marco decorativo */}
            <div
              className="
                absolute inset-0
                rounded-md
                border-2 border-primary
                translate-x-4 translate-y-4
                transition-all duration-300
                group-hover:translate-x-2 group-hover:translate-y-2
                z-0
              "
            />

            {/* Imagen con Overlay */}
            <div className="relative w-full h-full rounded-md overflow-hidden bg-primary z-10 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
              <img
                src="/profile.png"
                alt="Arny Balbin"
              />
              {/* Capa de tinte azul sobre la imagen (estilo clásico portfolio tech) */}
              <div className="absolute inset-0 bg-primary/20 hover:bg-transparent transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
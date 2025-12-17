const Hero = () => {
  return (
    <section className="w-full max-w-5xl mx-auto flex flex-col justify-center px-4">
      
      {/* Intro */}
      <span className="text-blue-600 font-mono text-sm mb-5 animate-fade-in-up">
        Hola, mi nombre es
      </span>

      {/* Nombre */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 leading-tight animate-fade-in-up">
        Arny Balbin.
      </h1>

      {/* Headline */}
      <h2 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-bold text-gray-500 dark:text-gray-400 leading-tight animate-fade-in-up">
        Desarrollo experiencias digitales.
      </h2>

      {/* Descripción */}
      <p className="mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-400 animate-fade-in-up">
        Soy desarrollador de software enfocado en crear interfaces claras y funcionales desde el frontend, 
        apoyándome en conocimientos de backend para desarrollar soluciones completas.
        Cuento con tres años de formación en Tecsup y actualmente busco integrarme a un equipo de desarrollo.
      </p>

      {/* Botón */}
      <div className="mt-10 animate-fade-in-up">
        <a
          href="#contact"
          className="
            inline-block
            px-6 py-3
            text-sm font-mono
            text-blue-600
            border border-blue-600
            rounded
            hover:bg-blue-50
            dark:text-blue-400
            dark:border-blue-400
            dark:hover:bg-blue-900/20
            transition-all
          "
        >
          Contáctame
        </a>
      </div>

    </section>
  );
};

export default Hero;

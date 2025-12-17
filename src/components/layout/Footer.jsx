const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 py-6">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-500">
          © {year} Arny Balbin · Desarrollado con React & Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;

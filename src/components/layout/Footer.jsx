import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/ArnyBalbin",
      icon: <FiGithub size={20} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/arny-daniel-balbin-bocanegra-baa127278/",
      icon: <FiLinkedin size={20} />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/arnybalbin/",
      icon: <FiInstagram size={20} />,
    },
    {
      name: "Facebook",
      url: "https://web.facebook.com/arny.balbin",
      icon: <FaFacebookF size={20} />,
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@arnybalbin",
      icon: <FaTiktok size={20} />,
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/arny_balbin",
      icon: <FaXTwitter size={20} />,
    },
  ];

  return (
    <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
      <div className="md:hidden flex justify-center items-center gap-6 mb-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>

      <div className="flex flex-col items-center gap-2 font-mono text-xs">
        <p>
          © {year} Arny Balbin
        </p>
        <p>
          Desarrollado con <span className="text-blue-600 dark:text-blue-400">React</span> & <span className="text-blue-600 dark:text-blue-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
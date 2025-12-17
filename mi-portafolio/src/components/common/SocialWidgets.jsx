import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialWidgets = () => {
  return (
    <>
      <div className="hidden md:flex fixed bottom-0 left-12 flex-col items-center gap-6 text-gray-600 dark:text-gray-400 z-50">
        <a
          href="https://github.com/ArnyBalbin"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600 hover:-translate-y-1 transition-all duration-300"
        >
          <FiGithub size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/arny-daniel-balbin-bocanegra-baa127278/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600 hover:-translate-y-1 transition-all duration-300"
        >
          <FiLinkedin size={22} />
        </a>
        <a
          href="https://www.instagram.com/arnybalbin/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600 hover:-translate-y-1 transition-all duration-300"
        >
          <FiInstagram size={22} />
        </a>
        <a
          href="https://web.facebook.com/arny.balbin"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600 hover:-translate-y-1 transition-all duration-300"
        >
          <FaFacebookF size={22} />
        </a>
        <a
          href="https://www.tiktok.com/@arnybalbin"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600 hover:-translate-y-1 transition-all duration-300"
        >
          <FaTiktok size={22} />
        </a>

        <a
          href="https://x.com/arny_balbin"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600 hover:-translate-y-1 transition-all duration-300"
        >
          <FaXTwitter size={22} />
        </a>

        <div className="w-[1px] h-24 bg-gray-400 dark:bg-gray-600 mt-4"></div>
      </div>

      <div className="hidden md:flex fixed bottom-0 right-12 flex-col items-center gap-6 text-gray-600 dark:text-gray-400 z-50">
        <a
          href="mailto:arnybalbin2005@gmail.com"
          className="vertical-text hover:text-blue-600 hover:-translate-y-1 transition-all duration-300 text-sm tracking-widest font-mono"
          style={{ writingMode: "vertical-rl" }}
        >
          arnybalbin2005@gmail.com
        </a>

        <div className="w-[1px] h-24 bg-gray-400 dark:bg-gray-600 mt-4"></div>
      </div>
    </>
  );
};

export default SocialWidgets;

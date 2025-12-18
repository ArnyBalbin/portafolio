import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialWidgets = () => {
  return (
    <>
      <div className="hidden md:flex fixed bottom-0 left-10 lg:left-14 flex-col items-center gap-6 text-gray-600 dark:text-gray-400 z-10">
        <a
          href="https://github.com/ArnyBalbin"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600 hover:-translate-y-1 transition-all duration-300 p-2"
        >
          <FiGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/arny-daniel-balbin-bocanegra-baa127278/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600 hover:-translate-y-1 transition-all duration-300 p-2"
        >
          <FiLinkedin size={20} />
        </a>
        <a
          href="https://www.instagram.com/arnybalbin/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600 hover:-translate-y-1 transition-all duration-300 p-2"
        >
          <FiInstagram size={20} />
        </a>
        <a
          href="https://web.facebook.com/arny.balbin"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600 hover:-translate-y-1 transition-all duration-300 p-2"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.tiktok.com/@arnybalbin"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600 hover:-translate-y-1 transition-all duration-300 p-2"
        >
          <FaTiktok size={20} />
        </a>
        <a
          href="https://x.com/arny_balbin"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600 hover:-translate-y-1 transition-all duration-300 p-2"
        >
          <FaXTwitter size={20} />
        </a>

        <div className="w-[1px] h-24 bg-gray-400 dark:bg-gray-600 mt-4"></div>
      </div>

      <div className="hidden md:flex fixed bottom-0 right-10 lg:right-14 flex-col items-center gap-6 text-gray-600 dark:text-gray-400 z-10">
        <a
          href="mailto:arnybalbin2005@gmail.com"
          className="hover:text-blue-600 hover:-translate-y-1 transition-all duration-300 text-xs tracking-widest font-mono p-2"
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
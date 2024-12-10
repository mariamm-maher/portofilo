import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center text-white py-6 space-y-4 mb-10">
      <SocialMediaIcons />
      <div className="flex items-center space-x-2 text-xl font-medium">
        <span>Made with</span>
        <FiHeart className="text-pink-500 transition duration-300" />
        <span>by Mariam</span>
      </div>
    </footer>
  );
}

function SocialMediaIcons() {
  return (
    <div className="flex space-x-6">
      {/* Social Media Icons */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:text-pink-500 transition duration-300"
      >
        <FaInstagram className="text-3xl" />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-pink-500 transition duration-300"
      >
        <FaLinkedin className="text-3xl" />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:text-pink-500 transition duration-300"
      >
        <FaGithub className="text-3xl" />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="hover:text-pink-500 transition duration-300"
      >
        <FaTwitter className="text-3xl" />
      </a>
    </div>
  );
}

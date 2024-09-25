import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <ul className="social-media-links">
      <li>
        <a
          href="https://www.linkedin.com/in/egl%C4%97-juknevi%C4%8Di%C5%ABt%C4%97/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="https://github.com/eglereact" target="_blank">
          <FaGithub />
        </a>
      </li>
    </ul>
  );
};
export default SocialMediaLinks;

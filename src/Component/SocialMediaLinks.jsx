import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <ul className="social-media-links">
      <li>
        <a href="https://lt.linkedin.com/">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="https://github.com/eglereact">
          <FaGithub />
        </a>
      </li>
    </ul>
  );
};
export default SocialMediaLinks;

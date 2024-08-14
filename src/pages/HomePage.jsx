import { Link } from "react-router-dom";
import ThemeToggle from "../Component/ThemeToggle";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ThemeToggle />
      <Link to="/projects">Projects</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/about-me">About Me</Link>
    </div>
  );
};
export default HomePage;

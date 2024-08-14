import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/projects">Projects</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/about-me">About Me</Link>
    </div>
  );
};
export default HomePage;

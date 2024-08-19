import { Link } from "react-router-dom";
import ThemeToggle from "../Component/ThemeToggle";

const Navigation = () => {
  return (
    <main className="main-container">
      <nav>
        <div className="logo">
          <Link to="/">
            <span>Egle</span>React
          </Link>
        </div>
        <ul className="ul-menu">
          <li>
            <Link to="/projects">Projektai</Link>
          </li>
          <li>
            <Link to="/contacts">Kontaktai</Link>
          </li>
          <li>
            <Link to="/about-me">Apie mane</Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </main>
  );
};
export default Navigation;

import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "../Component/ThemeToggle";
import WarningMessage from "./WarningMessage";

const Navigation = () => {
  return (
    <main className="main-container">
      <nav className="flex flex-col sm:flex-row">
        <div className="logo">
          <Link to="/">
            <span>Egle</span>React
          </Link>
        </div>
        <div className="hidden lg:block">
          <WarningMessage />
        </div>
        <ul className="ul-menu pl-6">
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => {
                return isActive ? "active-navlink" : "";
              }}
            >
              Projektai
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) => {
                return isActive ? "active-navlink" : "";
              }}
            >
              Kontaktai
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/about-me"
              className={({ isActive }) => {
                return isActive ? "active-navlink" : "";
              }}
            >
              Apie mane
            </NavLink>
          </li> */}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </main>
  );
};
export default Navigation;

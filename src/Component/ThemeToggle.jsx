import { useGlobalContext } from "../Context/context";
import { GoMoon, GoSun } from "react-icons/go";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <GoMoon className="toggle-icon-moon" />
        ) : (
          <GoSun className="toggle-icon-sun" />
        )}
      </button>
    </section>
  );
};
export default ThemeToggle;

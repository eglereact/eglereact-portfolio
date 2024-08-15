import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({
    disable: "mobile",
  });
  return <RouterProvider router={router} />;
}

export default App;

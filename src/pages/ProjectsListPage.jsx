import { Link } from "react-router-dom";
import Navigation from "../Component/Navigation";
import { FaArrowRight } from "react-icons/fa6";

const ProjectsListPage = () => {
  const projects = [
    {
      id: 1,
      name: "Bank",
      info: "Mini crud bank operation",
      img: "/images/loptop.png",
    },
    {
      id: 2,
      name: "React fund me",
      info: "Mini crud bank operation",
      img: "/images/loptop.png",
    },
    {
      id: 3,
      name: "Something else",
      info: "Mini crud bank operation",
      img: "/images/loptop.png",
    },
    {
      id: 4,
      name: "Fruit store",
      info: "Mini crud bank operation",
      img: "/images/loptop.png",
    },
    {
      id: 5,
      name: "Wordle Clone",
      info: "Mini crud bank operation",
      img: "/images/loptop.png",
    },
  ];

  return (
    <>
      <Navigation />
      <section className="project-list-container">
        {projects.map((project) => (
          <div className="project-container" key={project.id}>
            <div className="project-text-container">
              <h4 className="project-number">0{project.id}</h4>
              <h2 className="project-title">{project.name}</h2>
              <p className="project-minitext">{project.info}</p>

              <Link className="button button-2" to={`/projects/${project.id}`}>
                Daugiau <FaArrowRight />
              </Link>
            </div>
            <div className="project-image-container">
              <img
                className="project-img"
                src={project.img}
                alt={project.name}
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
export default ProjectsListPage;

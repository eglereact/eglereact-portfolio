import { FaArrowRight } from "react-icons/fa6";
import { FaGripLines } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <div className="flex flex-col lg:flex-row mb-16 lg:my-28 justify-center gap-10 w-full">
      <div className="project-text-container lg:w-2/5">
        <h4 className="project-number">
          <span className="number-icon">
            <FaGripLines />
          </span>
          0{project.id}
        </h4>
        <h2 className="text-3xl lg:text-4xl tracking-widest">{project.name}</h2>
        <p className="project-minitext">{project.info}</p>

        <Link className="button button-2" to={`/projects/${project.id}`}>
          Daugiau <FaArrowRight />
        </Link>
      </div>
      <div className="screen">
        <img className="project-img" src={project.img} alt={project.name} />
      </div>
    </div>
  );
};
export default Project;

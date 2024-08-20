import { FaArrowRight } from "react-icons/fa6";
import { FaGripLines } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <div className="project-container">
      <div className="project-text-container">
        <h4 className="project-number">
          <span className="number-icon">
            <FaGripLines />
          </span>
          0{project.id}
        </h4>
        <h2 className="project-title">{project.name}</h2>
        <p className="project-minitext">{project.info}</p>

        <Link className="button button-2" to={`/projects/${project.id}`}>
          Daugiau <FaArrowRight />
        </Link>
      </div>
      <div className="project-image-container">
        <img className="project-img" src={project.img} alt={project.name} />
      </div>
    </div>
  );
};
export default Project;

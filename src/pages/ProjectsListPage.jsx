import { Link } from "react-router-dom";

const ProjectsListPage = () => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <div>
      {projects.map((project) => (
        <Link key={project} to={`/projects/${project}`}>
          Project {project}
        </Link>
      ))}
    </div>
  );
};
export default ProjectsListPage;

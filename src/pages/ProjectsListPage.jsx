import Navigation from "../Component/Navigation";
import Project from "../Component/Project";
import { projects } from "../Data/projectsData";

const ProjectsListPage = () => {
  return (
    <>
      <Navigation />
      <section className="project-list-container">
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </section>
    </>
  );
};
export default ProjectsListPage;

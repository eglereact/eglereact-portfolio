import { useParams } from "react-router-dom";
import { projects } from "../Data/projectsData";
import Navigation from "../Component/Navigation";

const ProjectPage = () => {
  const params = useParams();

  const videoUrl =
    "https://drive.google.com/file/d/1afvlQvcGNVil1mODBbTlhiTpd2o-G82W/preview";

  const project = params.projectId
    ? projects.find((p) => p.id === +params.projectId)
    : projects[0];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Navigation />
      <section className="project-page-container">
        <div className="project-page-info">
          <div className="project-page-maintext">
            <h1>{project.name}</h1>
            <h1>{project.id}</h1>
            <p>{project.info}</p>
          </div>
          <div className="project-page-otherinfo"></div>
        </div>
        <div>
          <div>
            <iframe
              src={videoUrl}
              width="1096"
              height="685"
              allow="autoplay"
              title="Google Drive Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProjectPage;

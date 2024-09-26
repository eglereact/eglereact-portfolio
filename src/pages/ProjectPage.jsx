import { useParams } from "react-router-dom";
import { projects } from "../Data/projectsData";
import Navigation from "../Component/Navigation";

const ProjectPage = () => {
  const params = useParams();

  // const videoUrl =
  //   "https://drive.google.com/file/d/1afvlQvcGNVil1mODBbTlhiTpd2o-G82W/preview";

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
        <div className="w-4/5 flex p-20 gap-20">
          <div className=" w-1/2 p-6">
            <h2 className="text-3xl uppercase font-bold text-[#2ba84a]">
              Projekto informacija:
            </h2>
            <h3 className="text-2xl py-6">{project.name}</h3>
            <p className="text-xl">{project.description}</p>
          </div>
          <div className="w-1/2 p-6 card">
            <h2 className="text-3xl uppercase font-bold text-[#2ba84a] pb-6">
              Projekte naudojau:
            </h2>
            {project.used && (
              <ul className="pl-6 list-disc ">
                {project.used.map((item, index) => (
                  <li className="text-xl pb-2" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div>
          <div>
            <iframe
              src={project.videoUrl}
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

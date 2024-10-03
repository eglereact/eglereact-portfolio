import { useParams } from "react-router-dom";
import { projects } from "../Data/projectsData";
import Navigation from "../Component/Navigation";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const ProjectPage = () => {
  const params = useParams();

  const [loading, setLoading] = useState(true);

  const handleVideoLoad = () => {
    setLoading(false);
  };

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
        <div className="w-4/5 flex p-20 gap-20 ">
          <div className=" w-1/2 p-10 custom-card">
            <h2 className="text-3xl uppercase font-bold text-[#2ba84a]">
              Projekto informacija:
            </h2>
            <h3 className="text-2xl py-6">{project.name}</h3>
            <p className="text-xl">{project.description}</p>
            <div>
              {" "}
              <a
                href={project.github}
                className="text-xl uppercase hover:text-[#2ba84a] flex items-center py-4"
              >
                <FaGithub size={40} />{" "}
                <span className="ml-2">Github nuoroda</span>
              </a>
            </div>
          </div>
          <div className="w-1/2 p-10 custom-card">
            <h2 className="text-3xl uppercase font-bold text-[#2ba84a] pb-6">
              Projekte naudojau:
            </h2>
            {project.used && (
              <ul className="pl-6">
                {project.used.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 mb-4 text-xl"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="custom-card w-4/5 flex flex-col items-center">
          <h2 className="text-3xl uppercase font-bold text-[#2ba84a] pb-6">
            Projekto vaizdo įrašas
          </h2>
          {loading && (
            <div className="">
              <div className="loader"></div>
            </div>
          )}

          <div className={`${loading ? "hidden" : "block"}`}>
            <iframe
              src={project.videoUrl}
              width="1096"
              height="685"
              allow="autoplay"
              title="Google Drive Video"
              allowFullScreen
              onLoad={handleVideoLoad}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProjectPage;

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
        <div className="w-full lg:w-4/5 flex flex-col lg:flex-row lg:py-10 gap-10 ">
          <div className="w-full lg:w-1/2 p-10 custom-card">
            <h2 className="text-3xl uppercase font-bold text-[#357358]">
              Projekto informacija:
            </h2>
            <h3 className="text-2xl py-6">{project.name}</h3>
            <p className="text-xl">{project.description}</p>
            <div>
              {" "}
              <a
                href={project.github}
                className="text-xl uppercase hover:text-[#357358] flex items-center py-4"
              >
                <FaGithub size={40} />{" "}
                <span className="ml-2">Github nuoroda</span>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-10 custom-card">
            <h2 className="text-3xl uppercase font-bold text-[#357358] pb-6">
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

        <div className="custom-card w-full lg:w-4/5 flex flex-col items-center mt-10 lg:mt-0">
          <h2 className="text-3xl uppercase font-bold text-[#357358] pb-6">
            Projekto vaizdo įrašas
          </h2>
          {loading && (
            <div className="">
              <div className="loader"></div>
            </div>
          )}

          <div
            className={`${
              loading ? "hidden" : "block"
            } relative pb-[56.25%] h-0 w-full`}
          >
            <iframe
              src={project.videoUrl}
              className="absolute top-0 left-0 w-full h-full"
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

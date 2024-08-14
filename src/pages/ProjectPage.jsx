import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const params = useParams();

  return <div>ProjectPage {params.projectId}</div>;
};
export default ProjectPage;

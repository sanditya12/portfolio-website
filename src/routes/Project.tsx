import { useParams } from "react-router-dom";

function Project() {
  const { projectSlug } = useParams();
  return (
    <div>
      <h1>{projectSlug}</h1>
    </div>
  );
}

export default Project;

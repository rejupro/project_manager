import { useContext, useState } from "react";
import { ProjectContext } from "../contexts";
import ProjectAction from "./ProjectAction";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ProjectBoard() {
  const { datas } = useContext(ProjectContext);
  const [projectModal, setProjectModal] = useState(false);
  const [projectUpdate, setProjectUpdate] = useState(null);

  // Group data by category
  const groupedData = datas.reduce((acc, data) => {
    if (!acc[data.category]) {
      acc[data.category] = [];
    }
    acc[data.category].push(data);
    return acc;
  }, {});

  const editProject = (project) => {
    setProjectUpdate(project);
  };

  const clickProjectModal = () => {
    setProjectModal(true);
  };
  const closeProjectModal = () => {
    setProjectModal(false);
    setProjectUpdate(null);
  };

  return (
    <div className="mx-auto max-w-7xl p-6">
      {projectModal && (
        <ProjectModal
          closeProjectModal={closeProjectModal}
          projectUpdate={projectUpdate}
        />
      )}
      <ProjectAction clickProjectModal={clickProjectModal} />

      <div className="-mx-2 mb-6 flex flex-wrap">
        {Object.keys(groupedData).map((category) => (
          <ProjectCard
            key={category}
            category={category}
            categoryData={groupedData[category]}
            projectUpdate={editProject}
            clickProjectModal={clickProjectModal}
          />
        ))}
      </div>
    </div>
  );
}

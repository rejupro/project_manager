import ProjectSingle from "./ProjectSingle";

export default function ProjectCard({
  category,
  categoryData,
  projectUpdate,
  clickProjectModal,
}) {
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div
        className={`rounded-lg p-4 ${
          category === "To-Do"
            ? "bg-indigo-600"
            : category === "On-Progress"
            ? "bg-yellow-500"
            : category === "Done"
            ? "bg-teal-500"
            : category === "Revise"
            ? "bg-red-500"
            : "bg-gray-300" // Default color
        }`}
      >
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            {category} ({categoryData.length})
          </h3>
        </div>
        {categoryData.map((data) => (
          <ProjectSingle
            key={data.id}
            data={data}
            projectUpdate={projectUpdate}
            clickProjectModal={clickProjectModal}
          />
        ))}
      </div>
    </div>
  );
}

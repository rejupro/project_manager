import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { ProjectContext } from "../contexts";
export default function ProjectModal({ closeProjectModal, projectUpdate }) {
  const { datas, dispatch } = useContext(ProjectContext);
  const [errors, setErrors] = useState({});
  const [isAdd, setIsAdd] = useState(Object.is(projectUpdate, null));

  const [project, setProject] = useState(
    projectUpdate
      ? projectUpdate
      : {
          id: Math.floor(Math.random() * 10000),
          title: "",
          text: "",
          date: "",
          category: "",
        }
  );

  const validateForm = () => {
    const newErrors = {};
    if (!project.title || project.title.split(" ").length < 2) {
      newErrors.title = "Title is required and must be at least 2 words.";
    }
    if (!project.text) {
      newErrors.text = "Text is required.";
    }
    if (!project.date) {
      newErrors.date = "Date is required.";
    }
    if (!project.category) {
      newErrors.category = "Category is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (isAdd) {
        closeProjectModal();
        dispatch({
          type: "added",
          payload: project,
        });
        toast.success(`Project Added Successfully !`, {
          position: "top-right",
        });
      } else {
        closeProjectModal();
        dispatch({
          type: "changed",
          task: project,
        });
        toast.success(`Project Updated Successfully !`, {
          position: "top-right",
        });
      }
    }
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[420px] sm:max-w-[500px] lg:max-w-[500px] p-4 max-h-[90vh] overflow-auto w-full rounded-lg bg-gray-800 shadow-xl">
        <div className="p-6">
          <h2 className="mb-6 text-2xl font-bold text-green-400">
            {isAdd ? "Create Task" : "Update Task"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-300"
              >
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={project.title}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.title && <p className="text-red-500">{errors.title}</p>}
            </div>
            <div className="mb-4">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-300"
              >
                Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                value={project.date}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.date && <p className="text-red-500">{errors.date}</p>}
            </div>
            <div className="mb-4">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-300"
              >
                Description
              </label>
              <textarea
                id="text"
                name="text"
                value={project.text}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.text && <p className="text-red-500">{errors.text}</p>}
            </div>
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-300"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={project.category}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select a category</option>
                <option value="To-Do">To-Do</option>
                <option value="On-Progress">On Progress</option>
                <option value="Done">Done</option>
                <option value="Revise">Revise</option>
              </select>
              {errors.category && (
                <p className="text-red-500">{errors.category}</p>
              )}
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={closeProjectModal}
                className="mr-3 rounded-md bg-gray-500 px-4 py-2 text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-green-500 px-4 py-2 text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

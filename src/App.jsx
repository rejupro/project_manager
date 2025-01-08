import { useReducer } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ProjectContext } from "./contexts";
import { initialData } from "./data/Data";
import Page from "./Page";
import { projectReducer } from "./reducers/tasksReducer";

function App() {
  const [datas, dispatch] = useReducer(projectReducer, initialData);

  return (
    <>
      <ProjectContext.Provider value={{ datas, dispatch }}>
        <Page />
        <ToastContainer />
      </ProjectContext.Provider>
    </>
  );
}

export default App;

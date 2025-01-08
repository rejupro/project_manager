import Aside from "./components/Aside";
import Header from "./components/Header";
import ProjectBoard from "./components/ProjectBoard";

export default function Page() {
  return (
    <div className="bg-gray-900 text-white ">
      <div className="flex h-screen">
        <Aside />
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <Header />
          <ProjectBoard />
        </main>
      </div>
    </div>
  );
}

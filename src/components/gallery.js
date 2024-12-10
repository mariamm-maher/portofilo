import Carousel from "./Carousel";
import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Fixit",
    describe: "Home service app",
    image: [
      "images/fixit/1.png",
      "images/fixit/2.png",
      "images/fixit/3.png",
      "images/fixit/4.png",
      "images/fixit/5.png",
    ],
  },
  {
    id: 2,
    name: "Email App",
    describe: "A simple email client app",
    image: [
      "images/gmail/1.png",
      "images/gmail/2.png",
      "images/gmail/3.png",
      "images/gmail/4.png",
      "images/gmail/5.png",
    ],
  },
  {
    id: 3,
    name: "Cinema App",
    describe: "A cinema booking and movie streaming app",
    image: [
      "images/cinema/1.png",
      "images/cinema/2.png",
      "images/cinema/3.png",
    ],
  },
  {
    id: 4,
    name: "Doctor Dashboard",
    describe: "Doctor's appointment and patient management dashboard",
    image: ["images/doctor_dashboard/1.png", "images/doctor_dashboard/2.png"],
  },
];

export default function MyGallery() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="px-8 py-12">
      <div className="mb-8 border-l-4 border-purple-500 pl-4">
        <h1 className="text-5xl font-bold text-[#da4cb3] leading-tight">
          My Work
        </h1>
        <p className="text-lg text-gray-600 mt-2">Selected Projects</p>
      </div>

      {/* Project Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group cursor-pointer bg-gray-50 border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image[0]}
              alt={project.name}
              className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-indigo-600">
                {project.name}
              </h2>
              <p className="text-gray-500 mt-2">{project.describe}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded View with Carousel */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              {selectedProject.name}
            </h2>
            <p className="text-gray-600 mb-6">{selectedProject.describe}</p>
            <Carousel images={selectedProject.image} />
            <a
              href="https://github.com/your-github-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              Project on GitHub
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

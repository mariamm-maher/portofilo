import Carousel from "./Carousel";
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
export default function MyWork() {
  return (
    <div className="px-8 py-12">
      <div className="mb-8 border-l-4 border-purple-500 pl-4">
        <h1 className="text-5xl font-bold text-[#da4cb3] leading-tight">
          My Work
        </h1>
        <p className="text-lg text-gray-600 mt-2">Selected Projects</p>
      </div>
      {projects.map((p) => (
        <Project project={p} key={p.id} />
      ))}
    </div>
  );
}

function Project({ project }) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg m-4">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        <span className="text-indigo-600 mr-1"> 0{project.id} </span>
        {project.name}
      </h2>
      <a href="www.google.com" className="text-black">
        project in github
      </a>
      <p className="text-gray-600 text-lg mb-6">{project.describe}</p>
      <Carousel images={project.image} />
    </div>
  );
}

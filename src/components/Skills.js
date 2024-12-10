export default function Skills() {
  return (
    <div className="px-8 py-12">
      <div className="mb-8 border-l-4 border-purple-500 pl-4">
        <h1 className="text-5xl font-bold text-[#da4cb3] leading-tight">
          My Skills
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function Skill({ skill }) {
  return (
    <div className="">
      <div className="border-4 border-transparent rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-2 flex items-center justify-center transform transition-all duration-300 ease-in-out">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-purple-100">
          {/* Use the skill icon dynamically */}
          <span className="text-xl font-semibold text-[#da4cb3] group-hover:text-purple-600">
            {skill.icon}
          </span>
        </div>
      </div>

      <div className="  flex items-center justify-center mt-2">
        <div className="text-l text-gray-500 text-sm px-3 py-1 rounded-md shadow-md font-semibold">
          {skill.name}
        </div>
      </div>
    </div>
  );
}

// Define the skills array with name and icon
const skills = [
  {
    name: "HTML",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        id="html"
        fill="#da4cb3"
      >
        <path d="M19.5 7.5c-.4-.4-.9-.7-1.4-.7H5.9c-.5 0-1.1.2-1.4.7-.4.5-.5 1-.5 1.6l1.4 10.1c.1.6.4 1.1.9 1.4l4.7 2.7c.3.2.6.3 1 .3.3 0 .7-.1 1-.3l4.7-2.7c.5-.3.9-.8.9-1.4L20 9.1c0-.6-.1-1.1-.5-1.6zM16 11.1H8.5l.4 2.6h7l.1.1.1.1v.3l-.4 3.1c0 .1-.1.3-.2.3l-3.1 1.8c-.1 0-.2.1-.2.1s-.2 0-.2-.1l-3.1-1.8c-.1-.1-.2-.2-.2-.3l-.1-1c0-.3.1-.5.4-.5.3 0 .5.1.5.4l-.2.8 2.7 1.5 2.7-1.5.3-2.4H8.2s-.1 0-.1-.1v-.1s0-.1-.1-.1v-.2l-.5-3.6c0-.1 0-.3.1-.4.1-.1.2-.2.4-.2h8c.3 0 .5.2.5.5 0 .4-.2.7-.5.7zM5 5.8c.3 0 .5-.2.5-.5V3.6h1.2v1.7c0 .3.2.5.5.5s.5-.2.5-.5V1c0-.3-.2-.5-.5-.5s-.4.2-.4.5v1.7H5.5V1c0-.3-.2-.5-.5-.5s-.4.2-.4.5v4.4c0 .2.2.4.4.4zM8.6 1.5h.6v3.9c0 .3.2.5.5.5s.5-.2.5-.5V1.5h.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H8.6c-.3 0-.5.2-.5.5 0 .2.2.5.5.5zM12.1 5.8c.3 0 .5-.2.5-.5V1.5H14v3.9c0 .3.2.5.5.5s.5-.2.5-.5V1.5h1.4v3.9c0 .3.2.5.5.5H19c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-1.7V1c0-.3-.2-.5-.5-.5h-4.6c-.3 0-.5.2-.5.5v4.4c-.1.2.2.4.4.4z"></path>
      </svg>
    ),
  },
  {
    name: "CSS",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        id="css"
        fill="currentColor"
        height="2em"
        width="2em"
      >
        <path d="m1 0 1.275 14.4L8 16l5.723-1.599L15 0H1zm11.274 4.709-.161 1.809-.485 5.424L8 12.944l-.002.001-3.625-1.004-.254-2.836h1.776l.132 1.472 1.971.532.002-.002 1.973-.532.269-2.451-6.208.017-.176-1.677 6.533-.076.132-1.795-6.84.019-.115-1.668h8.864l-.158 1.765z"></path>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 750 750"
        id="java-script"
        fill="currentColor"
        height="2em"
        width="2em"
      >
        <path d="M493.81,127.87H256.19a74,74,0,0,0-74,77.81l14.12,277.73a20,20,0,0,0,7.34,14.5l138.1,112.41a52.82,52.82,0,0,0,66.59-.11L545.52,497.87a20,20,0,0,0,7.3-14.4L567.76,205.9a74.05,74.05,0,0,0-73.95-78Zm34,75.88L513.35,472.51,383,579.27a12.69,12.69,0,0,1-16,0L235.84,472.5,222.18,203.65a34.05,34.05,0,0,1,34-35.78H493.81a34,34,0,0,1,34,35.88Z"></path>
        <path d="M335 232.26a20 20 0 00-20 20V438l-31.94-22.71a20 20 0 10-23.18 32.6L323.44 493A20 20 0 00355 476.74V252.26A20 20 0 00335 232.26zM480.92 259.5a20 20 0 00-15.07-37.06L384 255.74a20 20 0 00-12.47 18.52V396a20 20 0 0027.18 18.67l53.48-20.58-1.26 31-73.34 33.43a20 20 0 1016.59 36.39l84.53-38.53A20 20 0 00490.37 439l3-73.71a20 20 0 00-27.17-19.48l-54.7 21.05V287.72z"></path>
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" height="2em" width="2em">
        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg fill="none" viewBox="0 0 15 15" height="2em" width="2em">
        <path
          fill="currentColor"
          d="M4.5 4.5l.405-.293A.5.5 0 004 4.5h.5zm3 9.5A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zM5 12V4.5H4V12h1zm-.905-7.207l6.5 9 .81-.586-6.5-9-.81.586zM10 4v6h1V4h-1z"
        />
      </svg>
    ),
  }, // Replace with Next.js icon or custom icon
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" height="2em" width="2em">
        <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 01-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.06.04-.16.04-.23 0L10 19.65c-.08-.03-.16-.04-.21-.01-.53.3-.63.36-1.12.51-.12.04-.31.11.07.32l2.48 1.47c.24.14.5.21.78.21s.54-.07.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2M14 8c-2.12 0-3.39.89-3.39 2.39 0 1.61 1.26 2.08 3.3 2.28 2.43.24 2.62.6 2.62 1.08 0 .83-.67 1.18-2.23 1.18-1.98 0-2.4-.49-2.55-1.47a.226.226 0 00-.22-.18h-.96c-.12 0-.21.09-.21.22 0 1.24.68 2.74 3.94 2.74 2.35 0 3.7-.93 3.7-2.55 0-1.61-1.08-2.03-3.37-2.34-2.31-.3-2.54-.46-2.54-1 0-.45.2-1.05 1.91-1.05 1.5 0 2.09.33 2.32 1.36.02.1.11.17.21.17h.97c.05 0 .11-.02.15-.07.04-.04.07-.1.05-.16C17.56 8.82 16.38 8 14 8z" />
      </svg>
    ),
  },
  {
    name: "Express",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" height="2em" width="2em">
        <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
      </svg>
    ),
  }, // Express doesn't have a direct icon in react-icons
  {
    name: "MongoDB",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 12L12 2l10 10-10 10-10-10z" fill="#da4cb3" />
      </svg>
    ),
  }, // Example MongoDB icon
  {
    name: "PostgreSQL",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          fill="#da4cb3"
        />
      </svg>
    ),
  }, // Example PostgreSQL icon
  {
    name: "GraphQL",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2c-.55 0-1 .45-1 1v7.29l-4.53-4.53c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41L10.59 12l-5.53 5.53c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L11 13.71V21c0 .55.45 1 1 1s1-.45 1-1v-7.29l4.53 4.53c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L13.41 12l5.53-5.53c.39-.39.39-1.02 0-1.41s-1.02-.39-1.41 0L13 10.29V2c0-.55-.45-1-1-1z"
          fill="#E535AB"
        />
      </svg>
    ),
  }, // Example GraphQL icon
  {
    name: "UI/UX",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          fill="#da4cb3"
        />
      </svg>
    ),
  }, // Example UI/UX icon
];
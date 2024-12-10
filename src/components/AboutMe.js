export default function AboutMe() {
  return (
    <div className="bg-black flex flex-col lg:flex-row items-center p-8 space-y-8 lg:space-y-0 lg:space-x-16 mt-40 mb-9">
      <div className="text-white lg:w-2/3">
        <p className="text-5xl font-bold">
          Hi there,
          <span className="text-gradient bg-gradient-to-br from-purple-500 to-pink-500 p-1  rounded-3xl m-2">
            I am a Software Engineer
          </span>
        </p>
        <p className="mt-14 text-3xl leading-8">
          I specialize in
          <span className="text-gradient bg-gradient-to-br from-purple-500 to-pink-500 p-1 ">
            MERN stack
          </span>
        </p>
      </div>

      <div className="border-4 border-transparent rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 m-2 ">
        <img
          src="me.jpeg"
          alt="Mariam Maher"
          className="w-96 h-96 rounded-full object-cover"
        />
      </div>
    </div>
  );
}

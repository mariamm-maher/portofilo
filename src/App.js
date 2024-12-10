import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import MyGallery from "./components/gallery";
import MyWork from "./components/MyWork";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="flex flex-col items-center bg-black text-white">
      <NavBar />
      <div>
        <AboutMe />
        <Skills />
        {/* <MyWork /> */}
        <MyGallery />
      </div>
      <Footer />
    </div>
  );
}

export default App;

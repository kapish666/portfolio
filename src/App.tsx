import "./App.css";
import Available from "./components/Available";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import MainIntro from "./components/MainIntro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  const owner = "Kapish Malviya";
  const ownerTitle = "Developer,ui/ux designer";
  const navbarOpt = ["work", "about", "contact"];

  return (
    <div className="bg-black text-[#f1cca1] relative">
      <div
        className=" fixed top-0 left-0 w-full h-20
    bg-black/10 backdrop-blur-[12px]
    z-50 p-10 pt-0 pb-0"
      >
        <Navbar name={owner} title={ownerTitle} navoptions={navbarOpt} />
      </div>
      <div className=" p-10 pt-0 pb-0 flex flex-col relative">
        <Available name={"Kapish"} isAvailable={true} />
        <Intro />
        <MainIntro />
        <Projects />
        <Footer/>
      </div>
    </div>
  );
}
export default App;

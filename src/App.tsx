import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AboutMe from "./components/AboutMe";
import { MainSection } from "./components/MainSection";
import MoreWorks from "./components/MoreWorks";
import NavBar from "./components/NavBar";
import RecentWorks from "./components/RecentWorks";
import SecondVideo from "./components/SecondVideo";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <MainSection />

      <AboutMe />
      <RecentWorks />

      <SecondVideo />
      <MoreWorks />
    </main>
  );
};

export default App;

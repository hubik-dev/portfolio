import AboutMe from "./AboutMe/AboutMe";
import TechStack from "./TechStack/TechStack";
import Work from "./Work/Work";
import Contact from "./Contact/Contact";

const MainContent = () => {
  return (
    <main className="container">
      <AboutMe />
      <TechStack />
      <Work />
      <Contact />
    </main>
  );
};

export default MainContent;

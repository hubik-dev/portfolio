import ContentTop from "./ContentTop/ContentTop";
import TechStack from "./TechStack/TechStack";
import Work from "./Work/Work";

const MainContent = () => {
  return (
    <div className="container">
      <ContentTop />
      <TechStack />
      <Work />
    </div>
  );
};

export default MainContent;

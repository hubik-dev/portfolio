import ContentTop from "./ContentTop/ContentTop";
import TechStack from "./TechStack/TechStack";
import Work from "./Work/Work";
import Contact from "./Contact/Contact";

import styles from "./MainContent.module.scss";

const MainContent = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <ContentTop />
        <TechStack />
        <Work />
        <Contact />
      </div>
    </main>
  );
};

export default MainContent;

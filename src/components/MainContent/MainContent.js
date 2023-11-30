import ContentTop from "./ContentTop/ContentTop";
import TechStack from "./TechStack/TechStack";
import Work from "./Work/Work";

import styles from "./MainContent.module.scss";

const MainContent = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <ContentTop />
        <TechStack />
        <Work />
      </div>
    </main>
  );
};

export default MainContent;

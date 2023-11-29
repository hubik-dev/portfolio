import WorkTextContent from "./WorkTextContent/WorkTextContent";
import WorkGrid from "./WorkGrid/WorkGrid";
import styles from "./Work.module.scss";

const Work = () => {
  return (
    <div className={styles.work}>
      <WorkTextContent />
      <WorkGrid />
    </div>
  );
};

export default Work;

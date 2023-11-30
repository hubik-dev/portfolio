import styles from "./TechStack.module.scss";
import TechStackTextContent from "./TechStackTextContent/TechStackTextContent";
import TechStackGrid from "./TechStackGrid/TechStackGrid";

const TechStack = () => {
  return (
    <div className={styles.techStack} id="techStack">
      <TechStackTextContent />
      <TechStackGrid />
    </div>
  );
};

export default TechStack;

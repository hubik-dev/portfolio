import WorkGridItem from "./WorkGridItem/WorkGridItem";
import { workData } from "../../../../data/workData";
import styles from "./WorkGrid.module.scss";

const WorkGrid = () => {
  return (
    <div className={styles.workGrid}>
      <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 gy-5 gx-sm-5">
        {Object.entries(workData).map(([key, value]) => (
          <WorkGridItem
            key={key}
            src={value.src}
            alt={value.alt}
            title={value.title}
            desc={value.desc}
            techStack={value.techStack}
            live={value.live}
            github={value.github}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkGrid;

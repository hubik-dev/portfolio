import styles from "./WorkGridItem.module.scss";
import linkIcon from "../../../../../assets/main/work/misc/link-icon.svg";
import githubIcon from "../../../../../assets/main/work/misc/github-logo.svg";

const WorkGridItem = (props) => {
  return (
    <div className="col d-flex justify-content-center">
      <div className={styles.workGridItem}>
        <div className={styles.projectImgWrapper}>
          <img src={props.src} alt={props.alt} className={styles.projectImg} />
        </div>
        <div className={styles.textContent}>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
          <div
            className={styles.techStack}
          >{`Built with: ${props.techStack}`}</div>
          <div className={styles.linkWrapper}>
            <a href={props.live}>
              <img src={linkIcon} alt="Link Icon" />
              Live Prewiew
            </a>
            <a href={props.github}>
              <img src={githubIcon} alt="Github Icon" />
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkGridItem;

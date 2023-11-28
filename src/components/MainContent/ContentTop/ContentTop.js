import ContentTopLeft from "./ContentTopLeft/ContentTopLeft";
import ContentTopRight from "./ContentTopRight/ContentTopRight";
import styles from "./ContentTop.module.scss";

const ContentTop = () => {
  return (
    <div className={styles.contentTop}>
      <div className="row align-items-center gy-5 gy-md-0">
        <ContentTopLeft />
        <ContentTopRight />
      </div>
    </div>
  );
};

export default ContentTop;

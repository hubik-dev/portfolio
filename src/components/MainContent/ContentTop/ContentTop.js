import ContentTopLeft from "./ContentTopLeft/ContentTopLeft";
import ContentTopRight from "./ContentTopRight/ContentTopRight";
import styles from "./ContentTop.module.scss";

const ContentTop = () => {
  return (
    <div className={styles.contentTop}>
      <div className="row">
        <ContentTopLeft />
        <ContentTopRight />
      </div>
    </div>
  );
};

export default ContentTop;

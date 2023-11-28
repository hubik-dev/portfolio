import styles from "./TechStackGridItem.module.scss";

const TechStackGridItem = (props) => {
  return (
    <div className="col">
      <div className={styles.techStackGridItem}>
        <img src={props.src} alt={props.alt} />
      </div>
    </div>
  );
};

export default TechStackGridItem;

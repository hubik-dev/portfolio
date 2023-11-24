import styles from "./MenuItem.module.scss";

const MenuItem = (props) => {
  return (
    <li>
      <a href={props.href} className={styles.a}>
        {props.name}
      </a>
    </li>
  );
};

export default MenuItem;

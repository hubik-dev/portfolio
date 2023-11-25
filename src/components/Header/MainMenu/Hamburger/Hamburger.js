import styles from "./Hamburger.module.scss";
import { useMenu } from "../../../../context/MenuContext";

const Hamburger = () => {
  const { isMenuOpen, toggleMenu } = useMenu();

  const hamburgerClasses = isMenuOpen
    ? `${styles.hamburger} ${styles.open}`
    : styles.hamburger;

  return (
    <div className={hamburgerClasses} onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;

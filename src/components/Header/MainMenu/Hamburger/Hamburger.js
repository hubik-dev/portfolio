import { useState } from "react";
import styles from "./Hamburger.module.scss";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const hamburgerClasses = isOpen
    ? `${styles.hamburger} ${styles.open}`
    : styles.hamburger;

  return (
    <div className={hamburgerClasses} onClick={handleToggle}>
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

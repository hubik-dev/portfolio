import MenuItem from "./MenuItem/MenuItem";
import SocialsList from "./SocialsList/SocialsList";
import Hamburger from "./Hamburger/Hamburger";
import { useMenu } from "../../../context/MenuContext";
import styles from "./MainMenu.module.scss";

const MainMenu = () => {
  const { isMenuOpen } = useMenu();
  const menuClasses = isMenuOpen
    ? `${styles.menu} ${styles.open} row flex-column flex-xl-row`
    : `${styles.menu} row flex-column flex-xl-row`;

  return (
    <div className={"col-4 col-sm-5 col-md-6 col-lg-7 col-xl-9"}>
      <Hamburger />
      <div className={menuClasses}>
        <div className={"col-xl-9"}>
          <ul className={styles.ul}>
            <MenuItem href="#aboutMe" name="about_me" />
            <MenuItem href="#techStack" name="tech_stack" />
            <MenuItem href="#work" name="work" />
            <MenuItem href="#contact" name="contact" />
          </ul>
        </div>
        <SocialsList />
      </div>
    </div>
  );
};

export default MainMenu;

import MenuItem from "../MenuItem/Menutem";
import styles from "./MainMenu.module.scss";

const MainMenu = () => {
  return (
    <div className={"col-7"}>
      <ul className={styles.ul}>
        <MenuItem href="#" name="about_me" />
        <MenuItem href="#" name="tech_stack" />
        <MenuItem href="#" name="work" />
        <MenuItem href="#" name="contact" />
      </ul>
    </div>
  );
};

export default MainMenu;

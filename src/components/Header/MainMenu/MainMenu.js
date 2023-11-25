import MenuItem from "./MenuItem/MenuItem";
import SocialsList from "./SocialsList/SocialsList";
import Hamburger from "./Hamburger/Hamburger";
import styles from "./MainMenu.module.scss";

const MainMenu = () => {
  return (
    <div className={"col-4 col-sm-5 col-md-6 col-lg-7 col-xl-9"}>
      <Hamburger />
      <div className={`${styles.menu} row flex-column flex-xl-row`}>
        <div className={"col-xl-9"}>
          <ul className={styles.ul}>
            <MenuItem href="#" name="about_me" />
            <MenuItem href="#" name="tech_stack" />
            <MenuItem href="#" name="work" />
            <MenuItem href="#" name="contact" />
          </ul>
        </div>
        <SocialsList />
      </div>
    </div>
  );
};

export default MainMenu;

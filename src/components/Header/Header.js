import styles from "./Header.module.scss";
import Logo from "./Logo/Logo";
import MainMenu from "./MainMenu/MainMenu";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row align-items-center">
          <Logo />
          <MainMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;

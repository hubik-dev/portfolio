import styles from "./Header.module.scss";
import Logo from "./Logo/Logo";
import MainMenu from "./MainMenu/MainMenu";

const Header = () => {
  return (
    <header className={`${styles.header} row align-items-center`}>
      <Logo />
      <MainMenu />
    </header>
  );
};

export default Header;

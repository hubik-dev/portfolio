import styles from "./Header.module.scss";
import SocialsList from "./SocialsList/SocialsList";
import Logo from "./Logo/Logo";
import MainMenu from "./MainMenu/MainMenu";

const Header = () => {
  return (
    <header className={`${styles.header} row align-items-center`}>
      <Logo />
      <MainMenu />
      <SocialsList />
    </header>
  );
};

export default Header;

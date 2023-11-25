import logo from "../../../assets/header/hubikdev-logo.svg";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={"col-8 col-sm-7 col-md-6 col-lg-5 col-xl-3"}>
      <div className={styles.imgContainer}>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Logo;

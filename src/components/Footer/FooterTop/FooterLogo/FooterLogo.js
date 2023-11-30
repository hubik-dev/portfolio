import logo from "../../../../assets/footer/hubikdev-logo.svg";
import styles from "./FooterLogo.module.scss";

const FooterLogo = () => {
  return (
    <div className={"col-6 col-sm-4 col-md-3 col-lg-2"}>
      <div className={styles.imgContainer}>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default FooterLogo;

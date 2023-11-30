import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom/FooterBottom";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <FooterTop />
      <hr />
      <FooterBottom />
    </footer>
  );
};

export default Footer;

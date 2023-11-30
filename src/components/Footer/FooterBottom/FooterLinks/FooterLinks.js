import styles from "./FooterLinks.module.scss";

const FooterLinks = () => {
  return (
    <div className="col-auto flex-grow-1">
      <div className={styles.footerLinks}>
        <a href="">about_me</a>
        <a href="">tech_stack</a>
        <a href="">work</a>
        <a href="">contact</a>
      </div>
    </div>
  );
};

export default FooterLinks;

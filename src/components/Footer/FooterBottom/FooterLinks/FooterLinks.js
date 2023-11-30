import styles from "./FooterLinks.module.scss";

const FooterLinks = () => {
  return (
    <div className="col-auto flex-grow-1">
      <div className={styles.footerLinks}>
        <a href="#aboutMe">about_me</a>
        <a href="#techStack">tech_stack</a>
        <a href="#work">work</a>
        <a href="#contact">contact</a>
      </div>
    </div>
  );
};

export default FooterLinks;

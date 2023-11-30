import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2>Feel free to contact me via email or DM me on one of my socials.</h2>
      <a href="mailto:hi@hubik.dev">hi@hubik.dev</a>
    </div>
  );
};

export default Contact;

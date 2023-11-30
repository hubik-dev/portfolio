import styles from "./SocialLogo.module.scss";

const SocialLogo = (props) => {
  return (
    <a href={props.href}>
      <img src={props.src} alt={props.alt} className={styles.img} />
    </a>
  );
};

export default SocialLogo;

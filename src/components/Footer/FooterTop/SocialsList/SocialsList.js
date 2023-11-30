import SocialLogo from "./SocialLogo/SocialLogo";
import githubLogo from "../../../../assets/footer/github-logo.svg";
import linkedInLogo from "../../../../assets/footer/linkedin-logo.svg";
import instagramLogo from "../../../../assets/footer/instagram-logo.svg";
import styles from "./SocialsList.module.scss";

const SocialsList = () => {
  return (
    <div className={"col-auto"}>
      <ul className={styles.ul}>
        <li>
          <SocialLogo src={githubLogo} alt="Github Logo" />
        </li>
        <li>
          <SocialLogo src={linkedInLogo} alt="LinkedIn Logo" />
        </li>
        <li>
          <SocialLogo src={instagramLogo} alt="Instagram Logo" />
        </li>
      </ul>
    </div>
  );
};

export default SocialsList;

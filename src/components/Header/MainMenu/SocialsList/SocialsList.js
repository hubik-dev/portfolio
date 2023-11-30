import SocialLogo from "./SocialLogo/SocialLogo";
import githubLogo from "../../../../assets/header/github-logo.svg";
import linkedInLogo from "../../../../assets/header/linkedin-logo.svg";
import instagramLogo from "../../../../assets/header/instagram-logo.svg";
import styles from "./SocialsList.module.scss";

const SocialsList = () => {
  return (
    <div className={"col-xl-3"}>
      <ul className={styles.ul}>
        <li>
          <SocialLogo
            src={githubLogo}
            alt="Github Logo"
            href="https://github.com/hubik-dev/"
          />
        </li>
        <li>
          <SocialLogo
            src={linkedInLogo}
            alt="LinkedIn Logo"
            href="https://www.linkedin.com/in/bence-hubik/"
          />
        </li>
        <li>
          <SocialLogo
            src={instagramLogo}
            alt="Instagram Logo"
            href="https://www.instagram.com/hubik.dev/"
          />
        </li>
      </ul>
    </div>
  );
};

export default SocialsList;

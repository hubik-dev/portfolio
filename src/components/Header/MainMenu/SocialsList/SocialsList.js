import SocialLogo from "./SocialLogo/SocialLogo";
import githubLogo from "../../../../assets/header/github-logo.svg";
import githubLogoHover from "../../../../assets/header/github-logo-hover.svg";
import linkedInLogo from "../../../../assets/header/linkedin-logo.svg";
import linkedInLogoHover from "../../../../assets/header/linkedin-logo-hover.svg";
import instagramLogo from "../../../../assets/header/instagram-logo.svg";
import instagramLogoHover from "../../../../assets/header/instagram-logo-hover.svg";

import styles from "./SocialsList.module.scss";

const SocialsList = () => {
  return (
    <div className={"col-xl-3"}>
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

import SocialLogo from "../SocialLogo/SocialLogo";
import githubLogo from "../../../assets/header/github-logo.svg";
import githubLogoHover from "../../../assets/header/github-logo-hover.svg";
import linkedInLogo from "../../../assets/header/linkedin-logo.svg";
import linkedInLogoHover from "../../../assets/header/linkedin-logo-hover.svg";
import instagramLogo from "../../../assets/header/instagram-logo.svg";
import instagramLogoHover from "../../../assets/header/instagram-logo-hover.svg";

import styles from "./SocialsList.module.scss";

const SocialsList = () => {
  return (
    <div className={"col-2"}>
      <ul className={styles.ul}>
        <li>
          <SocialLogo
            src={githubLogo}
            hoverSrc={githubLogoHover}
            alt="Github Logo"
          />
        </li>
        <li>
          <SocialLogo
            src={linkedInLogo}
            hoverSrc={linkedInLogoHover}
            alt="LinkedIn Logo"
          />
        </li>
        <li>
          <SocialLogo
            src={instagramLogo}
            hoverSrc={instagramLogoHover}
            alt="Instagram Logo"
          />
        </li>
      </ul>
    </div>
  );
};

export default SocialsList;

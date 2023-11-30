import AboutMeLeft from "./AboutMeLeft/AboutMeLeft";
import AboutMeRight from "./AboutMeRight/AboutMeRight";
import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <div className={styles.aboutMe} id="aboutMe">
      <div className="row align-items-center gy-5 gy-md-0">
        <AboutMeLeft />
        <AboutMeRight />
      </div>
    </div>
  );
};

export default AboutMe;

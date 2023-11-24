import React, { useState } from "react";
import styles from "./SocialLogo.module.scss";

const SocialLogo = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={props.href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? props.hoverSrc : props.src}
        alt={props.alt}
        className={styles.img}
      />
    </a>
  );
};

export default SocialLogo;

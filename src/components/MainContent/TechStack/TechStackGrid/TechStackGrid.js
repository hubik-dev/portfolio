import React from "react";
import TechStackGridItem from "./TechStackGridItem/TechStackGridItem";

import bootstrapLogo from "../../../../assets/main/TechStack/bootstrap-logo.png";
import chatgptLogo from "../../../../assets/main/TechStack/chatgpt-logo.svg";
import cssLogo from "../../../../assets/main/TechStack/css-logo.svg";
import elementorLogo from "../../../../assets/main/TechStack/elementor-logo.svg";
import gitLogo from "../../../../assets/main/TechStack/git-logo.svg";
import githubLogo from "../../../../assets/main/TechStack/github-logo.svg";
import htmlLogo from "../../../../assets/main/TechStack/html-logo.svg";
import jsLogo from "../../../../assets/main/TechStack/js-logo.svg";
import reactLogo from "../../../../assets/main/TechStack/react-logo.svg";
import sassLogo from "../../../../assets/main/TechStack/sass-logo.svg";
import vscodeLogo from "../../../../assets/main/TechStack/vscode-logo.svg";
import wordpressLogo from "../../../../assets/main/TechStack/wordpress-logo.png";

const TechStackGrid = () => {
  const images = {
    html: { src: htmlLogo, alt: "HTML Logo" },
    css: { src: cssLogo, alt: "CSS Logo" },
    js: { src: jsLogo, alt: "JavaScript Logo" },
    react: { src: reactLogo, alt: "React Logo" },
    sass: { src: sassLogo, alt: "Sass Logo" },
    bootstrap: { src: bootstrapLogo, alt: "Bootstrap Logo" },
    wordpress: { src: wordpressLogo, alt: "WordPress Logo" },
    elementor: { src: elementorLogo, alt: "Elementor Logo" },
    git: { src: gitLogo, alt: "Git Logo" },
    github: { src: githubLogo, alt: "GitHub Logo" },
    vscode: { src: vscodeLogo, alt: "VS Code Logo" },
    chatgpt: { src: chatgptLogo, alt: "ChatGPT Logo" },
  };

  return (
    <div className="row g-5 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
      {Object.entries(images).map(([key, value]) => (
        <TechStackGridItem key={key} src={value.src} alt={value.alt} />
      ))}
    </div>
  );
};

export default TechStackGrid;

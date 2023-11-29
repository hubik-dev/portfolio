import React from "react";
import TechStackGridItem from "./TechStackGridItem/TechStackGridItem";
import { images } from "../../../../data/techStackData";

import styles from "./TechStackGrid.module.scss";

const TechStackGrid = () => {
  return (
    <div className={styles.techStackGrid}>
      <div className="row gy-5 gx-sm-5 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
        {Object.entries(images).map(([key, value]) => (
          <TechStackGridItem key={key} src={value.src} alt={value.alt} />
        ))}
      </div>
    </div>
  );
};

export default TechStackGrid;

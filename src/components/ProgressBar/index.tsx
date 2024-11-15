import React, { LegacyRef, useEffect, useRef } from "react";

import styles from "./ProgressBar.module.scss";

export const ProgressBar: React.FC = () => {
  const progressRef = useRef<HTMLProgressElement>(null);
  const progress = 3;

  useEffect(() => {
    if (progressRef.current) {
      const progressPercentage = (progress / 10) * 100;
      progressRef.current.style.setProperty(
        "--progress-value",
        `${progressPercentage}%`
      );
      progressRef.current.setAttribute("data-value", `${progress}`);
    }
  }, [progress]);

  return (
    <div className={styles.root}>
      <label htmlFor="test" className={styles.root__range}>
        <span>0</span>
        <span>10</span>
      </label>
      <progress
        ref={progressRef}
        id="test"
        max={10}
        value={progress}
        data-value={progress}
        className={styles.root__progress}
      >
        {progress}
      </progress>
    </div>
  );
};

import React from "react";

import styles from "./CustomBtn.module.scss";

type CustomBtn = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const CustomBtn: React.FC<CustomBtn> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.root}>
      {children}
    </button>
  );
};

import React from "react";

import styles from "./CustomBtn.module.scss";

type CustomBtn = {
  children: React.ReactNode;
};

export const CustomBtn: React.FC<CustomBtn> = ({ children }) => {
  return <button className={styles.root}>{children}</button>;
};

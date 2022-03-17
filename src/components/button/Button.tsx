import React from "react";
import styles from "./Button.module.scss";
function Button({
  children,
  style,
}: {
  children: React.ReactNode;
  style: React.CSSProperties;
}) {
  return (
    <button className={styles.btn} style={style}>
      {children}
    </button>
  );
}

export default Button;

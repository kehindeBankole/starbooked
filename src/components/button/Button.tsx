import React from "react";
import styles from "./Button.module.scss";
function Button({
  children,
  style,
  className,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className: string;
}) {
  return <button className={`${styles.btn}`}>{children}</button>;
}

export default Button;

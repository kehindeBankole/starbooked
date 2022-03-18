import styles from "./Button.module.scss";
interface Props {
  text: string;
  width: string;
  height: string;
}
function Button(props: Props) {
  return <button className={`uppercase ${styles.btn}`}>{props.text}</button>;
}

export default Button;

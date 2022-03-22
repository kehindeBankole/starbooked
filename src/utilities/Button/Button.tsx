import styles from "./Button.module.scss";
interface Props {
  text: string;
  width?: string;
  height?: string;
  radius?:any;
  style?:React.CSSProperties;
}
function Button(props: Props) {
  return <button className={`uppercase ${styles.btn} `} style={{borderRadius:props.radius?props.radius:"0px",...props.style}}>{props.text}</button>;
}

export default Button;

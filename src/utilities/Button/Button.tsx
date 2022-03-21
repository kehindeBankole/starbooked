import styles from "./Button.module.scss";
interface Props {
  text: string;
  width: string;
  height: string;
  radius?:any;
}
function Button(props: Props) {
  return <button className={`uppercase h-[${props.height}] ${styles.btn} w-[${props.width}]`} style={{borderRadius:props.radius?props.radius:"0px"}}>{props.text}</button>;
}

export default Button;

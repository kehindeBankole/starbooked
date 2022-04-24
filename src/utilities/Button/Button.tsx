import styles from "./Button.module.scss";
interface Props {
  text: string;
  width?: string;
  height?: string;
  radius?:any;
  style?:React.CSSProperties;
  submit?:boolean
  clear?:any
}
function Button(props: Props) {
  return (
    <>
{props.submit?<button type="submit" onClick={props.clear} className={`uppercase ${styles.btn} `} style={{borderRadius:props.radius?props.radius:"0px",...props.style}}>{props.text}</button>:<button className={`uppercase ${styles.btn} `} style={{borderRadius:props.radius?props.radius:"0px",...props.style}}>{props.text}</button>

}



 </>
  )
}

export default Button;

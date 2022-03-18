import styles from "./button.module.scss"
interface Props{
  text:string;
  width:string;
  height:string;
}
function Button(props:Props) {
  return (
    <button className={`uppercase ${styles.btn} w-[${props.width}] h-[${props.height}]`}>
      {props.text} 
    </button>
  )
}

export default Button
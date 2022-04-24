import styles from "./TextArea.module.scss";
interface Props {
  label?: string;
  height?: string;
  width?: string;
  onChange?:any;
  value?:string
}
function TextArea(props: Props) {
  return (
    <div>
      <label htmlFor="message">{props.label}</label>
      <textarea name="message" onChange={(e)=>props.onChange(e.target.value)} value={props.value} className={`${styles.textarea} `}></textarea>
    </div>
  );
}

export default TextArea;

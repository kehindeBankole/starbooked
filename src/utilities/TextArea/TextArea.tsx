import styles from "./TextArea.module.scss";
interface Props {
  label: string;
  height: string;
  width: string;
}
function TextArea(props: Props) {
  return (
    <div>
      <label htmlFor="message">{props.label}</label>
      <textarea
        name="message"
        className={`${styles.textarea} w-[${props.width}] h-[${props.height}] `}
      ></textarea>
    </div>
  );
}

export default TextArea;

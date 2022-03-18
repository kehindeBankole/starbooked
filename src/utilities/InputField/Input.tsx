import styles from "./Input.module.scss";
interface Props {
  label: string;
  height: string;
  width: string;
}
function Input(props: Props) {
  return (
    <div>
      <div>
        <label htmlFor={props.label}>{props.label}</label>
      </div>
      <div>
        <input type="text" className={styles.input} />
      </div>
    </div>
  );
}

export default Input;

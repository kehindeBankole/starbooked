import { useState } from "react";
import styles from "./Input.module.scss";
interface Props {
  label: string;
  height: string;
  width: string;
  type?:string;
  clearForm?:any
  value?:any;
  onChange?:any
  important?:boolean;
}
function Input(props: Props) {



  return (
    <div>
      <div>
        <label htmlFor={props.label}>{props.label}{props.important&&"*"}</label>
      </div>
      <div>
        <input type={props.type} value={props.value} onChange={(e)=>props.onChange(e.target.value)} name={props.label} className={styles.input} />
      </div>
    </div>
  );
}

export default Input;

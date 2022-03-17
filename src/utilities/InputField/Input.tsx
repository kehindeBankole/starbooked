import "./input.module.scss"
interface Props{
    label:string;
    height:string;
    width:string;
}
function Input(props:Props){
  return (
    <div>
        <div>
        <label htmlFor={props.label}>{props.label}</label>
        </div>
        <div>
        <input type="text" style={{height:props.height,width:props.width}} />
        </div>

    </div>
  )
}

export default Input
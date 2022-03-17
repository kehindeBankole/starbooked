import React from 'react'
interface Props{
  text:string;
  width:string;
  height:string;
}
function Button(props:Props) {
  return (
    <button className={`w-[${props.width}] h-[${props.height}]`}>
      {props.text}
    </button>
  )
}

export default Button
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ServicesCard.module.scss"

interface Props{
id?:number;
img:any;
text:string;
title:any;
help?:any;
keyEntertainment?:any;
moreText?:any;
moreTextHeader?:any;
}

function ServicesCard(props:Props) {
const [showMore,setShowMore]=useState(true)
// console.log(props.text.substring(0,100))
const navigate = useNavigate()
return (
    // <div className={`${styles.card} w-[397px]`}>
      <div className={`${styles.card}   lg:w-[350px] md:w-[50%]   md:mr-[24px]`}>
      <img src={props.img} className=" lg:h-[420px] md:w-[100%] mx-auto h-auto" alt="" />
      <p className={`text-center ${styles.card_title} uppercase`}>{props.title}</p>
        <p className={` ${styles.card_text} `}>{props.text.substring(0,200)}...</p>


        {/* <div className={showMore?"hidden":"block"}>
          <div>
          <h2 className="capitalize font-bold">{props.moreTextHeader}</h2>
<p>{props.moreText}</p>
          </div>

          <div>
          <h2 className="capitalize font-bold">Unsure? We Are Here to Help</h2>
          {props.help}
          </div>

          <div>
          <h2 className="capitalize font-bold">Turn-Key Entertainment</h2>
          {props.keyEntertainment}
          </div>

        </div> */}
        <div className="flex"><button onClick={()=>{navigate(`/services/${props.title}`);window.scroll(0,0)}} className={`${styles.card_footer}  capitalize`} >read more </button><span className={`${styles.hr} ml-[10px] mt-5`}></span></div>        
      </div>

    // </div>
  )
}

export default ServicesCard
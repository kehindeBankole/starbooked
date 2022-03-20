import styles from "./ServicesCard.module.scss"

interface Props{
img:any;
text:string;
title:any;
}

function ServicesCard(props:Props) {
  return (
    // <div className={`${styles.card} w-[397px]`}>
      <div className={`${styles.card} lg:w-[30%] md:w-[50%] md:mr-[24px] `}>
      <img src={props.img} className=" lg:h-[420px] md:w-[100%] mx-auto h-auto" alt="" />
      <p className={`text-center ${styles.card_title} uppercase`}>{props.title}</p>
        <p className={`text-center ${styles.card_text}`}>{props.text}</p>
        <p className={`${styles.card_footer} capitalize`}>learn more <hr /></p>
      </div>

    // </div>
  )
}

export default ServicesCard
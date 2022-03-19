import styles from "./ServicesCard.module.scss"

interface Props{
img:any;
text:string;
title:any;
}

function ServicesCard(props:Props) {
  return (
    // <div className={`${styles.card} w-[397px]`}>
      <div className={`${styles.card} w-[397px] m-auto `}>
      <img src={props.img} className="mx-auto h-[420px]" alt="" />
      <p className={`text-center ${styles.card_title} uppercase`}>{props.title}</p>
        <p className={`text-center ${styles.card_text}`}>{props.text}</p>
        <p className={`${styles.card_footer}`}>learn more <hr /></p>
      </div>

    // </div>
  )
}

export default ServicesCard
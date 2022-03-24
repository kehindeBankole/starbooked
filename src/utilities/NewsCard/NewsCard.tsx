import React from 'react'
import styles from "./NewsCard.module.scss"
interface Props{
    img:any;
    text:string;
    title:any;
    }
    
function NewsCard(props:Props) {
  return (
    <div className={`${styles.card} p-[20px] sm:p-[0] mb-[30px] lg:w-[397px] md:w-[50%] sm:w-[70%] md:mr-[24px]`}>
    <img src={props.img} className=" mx-auto w-[100%] " alt="" />
   <p className='capitalize '> <span className={`${styles.news} text-[0.8rem] sm:text-[1rem]`}>news</span> <hr className='mr-[22px] ml-[53px]'/> <span id='date' className='text-[0.8rem] sm:text-[1rem]'>11 march 2022</span> </p>
    <p className={`${styles.card_title} sm:text-[1.5rem] uppercase`}>{props.title}</p>
      <p className={` ${styles.card_text}`}>{props.text}</p>
    </div>

  )
}

export default NewsCard
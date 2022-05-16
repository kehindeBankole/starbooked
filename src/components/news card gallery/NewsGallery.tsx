import React from 'react'
import styles from "./NewsGallery.module.scss"
import {ManReading,PostedNews,News,Phone} from "../../assets/images"

interface Props{
  image:any;
  title:any;
  description:any;
  articleLink:any;
  date:any
}

function NewsGallery(props:Props) {


  return (    <>

     <div className={`${styles.card} p-[20px] sm:p-[0] mb-[30px] lg:w-[397px] md:w-[50%] sm:w-[70%] md:mx-[8px]`}>
     <img src={props.image} className=" mx-auto w-[100%] h-[250px]" alt="" />
    <p className='capitalize '> <span className={`${styles.news} text-[0.8rem] sm:text-[1rem]`}>news</span> <hr className='mr-[22px] ml-[53px]'/> <span id='date' className='text-[0.8rem] sm:text-[1rem]'>{new Date(props.date).toDateString() }</span> </p>
     <p className={`${styles.card_title} sm:text-[1.5rem] uppercase`}>{props.title}</p>
       <p className={` ${styles.card_text}`}>{props.title}</p>
       <button className='capitalize text-[orange]'><a href={props.articleLink} target="_blank">read more</a> </button>
     </div>




  </>
  )
}

export default NewsGallery
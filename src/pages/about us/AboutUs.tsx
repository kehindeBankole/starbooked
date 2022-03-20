import React from 'react'
import styles from "./AboutUs.module.scss"
import { Button } from '../../utilities'
import { OurService} from '../../components'
import {About} from "../../assets/images"
function AboutUs() {
  return (
    <section className={`${styles.hero}  mt-[30px]`}>
  
  <div className={`pb-[159px] flex ${styles.hero_content} container justify-between items-center`}>
 
 <div className={`${styles.hero_text_container} md:w-[60%] lg:w-[47%] m-auto lg:p-[0] p-[20px] lg:ml-[61px]`}>
  <header className=' text-center lg:text-left lg:text-[4rem] text-[1.5rem] md:text-[2rem]'>
  about starbooked
  </header>
  <div className={`${styles.hero_text} `}>
<p className='lg:text-[1.5rem] text-[1.1rem]'> At Starbooked we connect talent, brands and businesses, enabling them to stage memorable events, share remarkable music, tell significant stories, and, through it all, reach new audiences.</p>
<p className=''>At Starbooked we connect talent, brands and businesses, enabling them to stage memorable events, share remarkable music, tell significant stories, and, through it all, reach new audiences.</p> 

  </div>


        </div>
   
 <div className='lg:mr-[57px] lg:w-auto  mx-auto lg:px-[0px] px-[20px] '>
 <img src={About} className=" lg:h-[296px] lg:w-[503px]" alt="" />

 </div>
  

    </div>


  <OurService/>
    
    </section>
  )
}

export default AboutUs
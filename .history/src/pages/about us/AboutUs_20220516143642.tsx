import React from 'react'
import styles from "./AboutUs.module.scss"
import { Button } from '../../utilities'
import { OurService,Booking} from '../../components'
import {About} from "../../assets/images"
import Marquee from "react-fast-marquee";
import {
  Talent,
  Booking as BookingImg,
  BrandPartner,
  LabelService,
  Management,
  PR,
  Marquee1,Marquee2,Marquee3,Marquee4,Marquee5,Marquee6
} from "../../assets/images";

function AboutUs() {
  const MarqueeImg=[Marquee1,Marquee2,Marquee3,Marquee4,Marquee5,Marquee6]

  return (
    <section className={`${styles.hero}  mt-[0px]`}>
  
  <div className={`pb-[159px] flex ${styles.hero_content} container justify-between items-center`}>
 
 <div className={`${styles.hero_text_container} md:w-[60%] lg:w-[47%] m-auto lg:p-[0] p-[20px] lg:ml-[61px]`}>
  <header className=' text-center lg:text-left lg:text-[4rem] text-[1.5rem] md:text-[2rem]'>
  about starbook
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
  <div className="ml-[61px] mr-[57px]">
<Marquee speed={80} gradient={false} className="overflow-hidden mb-[4rem] ">
{MarqueeImg.map((item,index)=>(
	<div key={index} className="text-center mx-[3rem] uppercase  md:text-[1.5rem]">
	<img src={item}  alt="slider img" />
</div>
))}
</Marquee>
</div>

<Booking title="get in touch" subtitle="Please feel free to fill out the entertainment request form and your assigned agent will contact you to see how Star Book can assist you.
"/>

    </section>
  )
}

export default AboutUs
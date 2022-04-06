import React from 'react'
import styles from "./AboutUs.module.scss"
import { Button } from '../../utilities'
import { OurService,OurMission,OurVision} from '../../components'
import {About} from "../../assets/images"
import Marquee from "react-fast-marquee";
import {
  Talent,
  Booking as BookingImg,
  BrandPartner,
  LabelService,
  Management,
  PR
} from "../../assets/images";
function AboutUs() {
  return (
    <section className={`${styles.hero}  mt-[0px]`}>
  
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
  <div className="ml-[61px] mr-[57px]">
<Marquee speed={80} gradient={false} className="overflow-hidden mb-[4rem] ">
<div className="text-center uppercase mx-[3rem] md:text-[1.5rem]">
            <img src={Talent} alt="talent management" />
          </div>

          <div className="text-center uppercase mx-[3rem] md:text-[1.5rem]">
            <img src={Talent} alt="talent management" />
          </div>

          <div className="text-center uppercase mx-[3rem] md:text-[1.5rem]">
            <img src={Talent} alt="talent management" />
          </div>

          <div className="text-center uppercase mx-[3rem] md:text-[1.5rem]">
            <img src={Talent} alt="talent management" />
          </div>
</Marquee>
</div>
    </section>
  )
}

export default AboutUs
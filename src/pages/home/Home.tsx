import React from "react";
import { Booking, OurService,Explore } from "../../components";
import BannerSlider from "../../components/bannerSlider/BannerSlider";
import Marquee from "react-fast-marquee";
import {
  Talent,
  Booking as BookingImg,
  BrandPartner,
  LabelService,
  Management,
  PR
} from "../../assets/images";
import img1 from "../../assets/images/1.png";
import { one,two,three,four,five } from "../../assets/images";
import styles from "./Home.module.scss";
const sliderInfo=[{
  image:one,
  text:"From the biggest bands to top solo artists, from comedians to social media influencers, Star Book is YOUR booking agency."
  },
  {
    image:two,
    text:"Our in-house entertainment production team will make sure that every aspect of the entertainment for your corporate or private event runs perfectly."
    },
    {
      image:three,
      text:"Let one of our veteran booking agents help you find the perfect band, entertainer or celebrity for your demographic and budget."
      },
      {
        image:four,
        text:"We work with some of the biggest wedding and event planners to help them add booking big name entertainment to their list of entertainment services."
        },
        {
          image:five,
          text:"We work with some of the biggest wedding and event planners to help them add booking big name entertainment to their list of entertainment services."
          },
          {
            image:four,
            text:"Use our booking agency's relationships and experience to make buying ANY big name entertainer anywhere in the world easy and hassle free."
            },
            {
              image:one,
              text:"Star Book makes buying top name entertainment for corporate events and private parties accessible to anyone around the world."
              },
  ]
function Home() {
  return (
    <section className={`${styles.homeContainer} `}>
     <div className="bg-five pt-[5rem]">
     <div className={`${styles.banner} container`}>
        <BannerSlider img1={img1} bookBtn={true} sliderInfo={sliderInfo}/> 
      </div>
     </div>

     <Explore/>
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


      <Booking title="get in touch" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu duis donec non fames tellus."/>
    </section>
  );
}

export default Home;

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

import styles from "./Home.module.scss";
function Home() {
  return (
    <section className={`${styles.homeContainer} `}>
     <div className="bg-five pt-[5rem]">
     <div className={`${styles.banner} container`}>
        <BannerSlider />
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

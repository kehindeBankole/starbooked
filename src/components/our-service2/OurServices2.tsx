import styles from "./OurServices2.module.scss";
import { ServicesCard } from "../../utilities";
import {
  Talent2,
  BrandPartner2,
  Booking2,
  PR2,
  Management2,
  LabelService2,
  Social,
  Label,
} from "../../assets/images";
import React from "react";
function OurServices2() {
  const data:{title:string , text:string , img:any}[] = [
    {
      title: "talent management",
      text: "Ability to book a celebrity from anywhere in the world",
      img: Talent2,
    },
    {
      title: "Bookings",
      text: "Ability to book a celebrity from anywhere in the world",
      img: Booking2,
    },
    {
      title: "brand patnership",
      text: "Ability to book a celebrity from anywhere in the world",
      img: BrandPartner2,
    },
    {
      title: "PR",
      text: "Ability to book a celebrity from anywhere in the world",
      img: PR2,
    },
    {
      title: "social media management",
      text: "Ability to book a celebrity from anywhere in the world",
      img: Social,
    },
    {
      title: "label services",
      text: "Ability to book a celebrity from anywhere in the world",
      img: LabelService2,
    },
  ];
  return (
    <div>
      <div className="container">
        <header
          className={`uppercase ${styles.header} text-[2rem] sm:text-[3rem] lg:text-[4rem] text-center`}
        >
          Our services
        </header>

        <div className="md:flex px-[20px] flex-wrap justify-center">
          {data.map((item, index) => (
           <React.Fragment key={index}>
              <ServicesCard title={item.title} text={item.text} img={item.img} />
           </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurServices2;
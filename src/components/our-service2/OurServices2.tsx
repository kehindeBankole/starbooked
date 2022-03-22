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
      text: "Amet minim mollit non deserunt ullamco est  sit aliqua dolor do amet sint. Velit officia  duis enim velit mollit. Exercitation veniam  sunt nostrud amet............",
      img: Talent2,
    },
    {
      title: "Bookings",
      text: "Amet minim mollit non deserunt ullamco est  sit aliqua dolor do amet sint. Velit officia  duis enim velit mollit. Exercitation veniam  sunt nostrud amet............",
      img: Booking2,
    },
    {
      title: "brand patnership",
      text: "Amet minim mollit non deserunt ullamco est  sit aliqua dolor do amet sint. Velit officia  duis enim velit mollit. Exercitation veniam  sunt nostrud amet............",
      img: BrandPartner2,
    },
    {
      title: "PR",
      text: "Amet minim mollit non deserunt ullamco est  sit aliqua dolor do amet sint. Velit officia  duis enim velit mollit. Exercitation veniam  sunt nostrud amet............",
      img: PR2,
    },
    {
      title: "social media management",
      text: "Amet minim mollit non deserunt ullamco est  sit aliqua dolor do amet sint. Velit officia  duis enim velit mollit. Exercitation veniam  sunt nostrud amet............",
      img: Social,
    },
    {
      title: "label services",
      text: "Amet minim mollit non deserunt ullamco est  sit aliqua dolor do amet sint. Velit officia  duis enim velit mollit. Exercitation veniam  sunt nostrud amet............",
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
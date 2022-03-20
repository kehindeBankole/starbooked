import styles from "./OurService.module.scss";
import {
  Talent,
  Booking,
  BrandPartner,
  LabelService,
  Management,
  PR,
} from "../../assets/images";
function OurServices() {
  return (
    <section id="services" className={`${styles.services} `}>
      <div className="container pt-[42px]">
        <h2 className=" text-[1.8rem] sm:text-[3rem] lg:text-[4rem]">
          our services
        </h2>
        <div className={`flex flex-wrap justify-center ${styles.service}`}>
          <div className="text-center uppercase md:text-[1.5rem]">
            <img src={Talent} alt="talent management" />
            <p className="lg:mb-[72px] mb-[20px]">Talent management</p>
          </div>

          <div className="text-center uppercase md:text-[1.5rem]">
            <img src={Booking} alt="booking" />
            <p className="lg:mb-[72px] mb-[20px]">bookings</p>
          </div>

          <div className="text-center uppercase md:text-[1.5rem]">
            <img src={BrandPartner} alt="brand-partner" />
            <p className="lg:mb-[72px] mb-[20px]">brand partnership</p>
          </div>

          <div className="text-center uppercase md:text-[1.5rem]">
            <img src={PR} alt="PR" />
            <p className="lg:mb-[72px] mb-[20px]">PR</p>
          </div>

          <div className="text-center uppercase md:text-[1.5rem]">
            <img src={Management} alt="social media management" />
            <p className="lg:mb-[72px] mb-[20px]">
              Social media <br /> management
            </p>
          </div>

          <div className="text-center uppercase md:text-[1.5rem]">
            <img src={LabelService} alt="label service" />
            <p className="lg:mb-[72px] mb-[20px]">label services</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;

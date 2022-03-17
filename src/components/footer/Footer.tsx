import styles from "./footer.module.scss"
import logoWhite from "../../assets/images/logowhite.svg"
function Footer() {
  return <footer className={`${styles.footer} relative bottom-0 p-[20px] flex-wrap`}>
    <div className="flex flex-wrap justify-between mx-auto w-[80%]">
    <div className="lg:w-[30%] w-[100%] my-[20px] sm:my-[0]">
<img src={logoWhite} alt="" />
<div className="">
Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Lectus non sit libero tellus.
</div>
    </div>


<div id="links" className="my-[20px] md:my-[0] px-[5px]">
<h2 className="uppercase">quick links</h2>
    <ul>
      <li className="capitalize">
about
      </li>
      <li className="capitalize">
        news
      </li>
      <li className="capitalize">
        bookings
      </li>
      <li className="capitalize">
        services
      </li>
    </ul>
</div>

<div id="services" className=" my-[20px] md:my-[0] px-[5px]">
<h2 className="uppercase">our services</h2>
    <ul>
      <li className="capitalize">
      About
      </li>
      <li className="capitalize">
        news
      </li>
      <li className="capitalize">
        bookings
      </li>
      <li className="capitalize">
        services
      </li>
    </ul>
</div>

<div id="contact" className="my-[20px] md:my-[0] px-[5px]">
<h2 className="uppercase">contact us</h2>
    <ul>
      <li id="phone-number" className="capitalize">
      +234 0000 00000 00
      </li>
      <li id="address" className="capitalize">
      59, ram avenue, plam nut, central, usk
      </li>
     
    </ul>
</div>


    </div>
  

  </footer>;
}

export default Footer;

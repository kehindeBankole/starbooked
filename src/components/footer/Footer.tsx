import styles from "./footer.module.scss";
import logoWhite from "../../assets/images/logowhite.svg";
import { Facebook, Twitter, Linkdin, Instagram } from "../../assets/images";
function Footer() {
  return (
    <footer className={`${styles.footer} relative bottom-0 flex-wrap`}>
      <div className={`flex flex-wrap justify-between  ${styles.foot_border}`}>
        <div className="md:w-[35%] sm:w-[45%] w-[100%] my-[20px] xlg:my-[0]">
          <div>
            <img src={logoWhite} alt="" />
          </div>

          <div className="mt-[25px]">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Lectus non sit libero tellus.
          </div>
        </div>

        <div id="links" className="my-[20px] xlg:my-[0] p-[3px]">
          <h2 className="uppercase">quick links</h2>
          <ul>
            <li className="capitalize">about</li>
            <li className="capitalize">news</li>
            <li className="capitalize">bookings</li>
            <li className="capitalize">services</li>
          </ul>
        </div>

        <div id="services" className=" my-[20px] xlg:my-[0] p-[3px]">
          <h2 className="uppercase">our services</h2>
          <ul>
            <li className="capitalize">About</li>
            <li className="capitalize">news</li>
            <li className="capitalize">bookings</li>
            <li className="capitalize">services</li>
          </ul>
        </div>

        <div id="contact" className="my-[20px] xlg:my-[0] p-[3px]">
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

      <div
        className={`flex flex-wrap justify-between  pt-[25px] capitalize ${styles.bottom_footer}`}
      >
        <p id="copyrights">&copy;starbooked 2022. all rights reserved.</p>
        <div className="icons flex">
          <span className="mx-[25px]">
            <img src={Instagram} alt="" />
          </span>
          <span className="mx-[25px]">
            <img src={Linkdin} alt="" />
          </span>
          <span className="mx-[25px]">
            <img src={Facebook} alt="" />
          </span>
          <span className="ml-[25px]">
            <img src={Twitter} alt="" />
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

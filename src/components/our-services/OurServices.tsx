import styles from "./ourservice.module.scss"
import {Talent,Booking,BrandPartner,LabelService,Management,PR} from "../../assets/images"
function OurServices() {
  return (
  <section id='services' className={`${styles.services} font-[700] text-[2rem] sm:text-[3rem] md:text-[4rem]`}>
      <div className='container'>
      <h2 className=''>our services</h2>
      <div className={`flex flex-wrap justify-center ${styles.service}`}>
<div className="">
<img src={Talent} alt="" />
</div>

<div className="">
<img src={Booking} alt="" />
</div>

<div className="">
<img src={BrandPartner} alt="" />
</div>

<div className="">
<img src={PR} alt="" />
</div>

<div className="">
<img src={Management} alt="" />
</div>

<div className="">
<img src={LabelService} alt="" />
</div>

      </div>
      </div>
     
  </section>
  )
}

export default OurServices
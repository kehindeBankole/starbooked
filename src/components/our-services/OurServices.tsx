import styles from "./ourservice.module.scss"
import {Talent,Booking,BrandPartner,LabelService,Management,PR} from "../../assets/images"
function OurServices() {
  return (
  <section id='services' className={`${styles.services} `}>
      <div className='container pt-[42px]'>
      <h2 className=' text-[2rem] sm:text-[3rem] md:text-[4rem]'>our services</h2>
      <div className={`flex flex-wrap justify-center ${styles.service}`}>
<div className="text-center uppercase md:text-[1.5rem]">
<img src={Talent} alt="" />
<p className=" ">Talent management</p>
</div>

<div className="text-center uppercase md:text-[1.5rem]">
<img src={Booking} alt="" />
<p >bookings</p>

</div>

<div className="text-center uppercase md:text-[1.5rem]">
<img src={BrandPartner} alt="" />
<p >brand partnership</p>

</div>

<div className="text-center uppercase md:text-[1.5rem]">
<img src={PR} alt="" />
<p >PR</p>

</div>

<div className="text-center uppercase md:text-[1.5rem]">
<img src={Management} alt="" />
<p >Social media <br /> management</p>

</div>

<div className="text-center uppercase md:text-[1.5rem]">
<img src={LabelService} alt="" />
<p >label services</p>

</div>

      </div>
      </div>
     
  </section>
  )
}

export default OurServices
import styles from "./OurServices2.module.scss"
import {ServicesCard} from "../../utilities"
import {Talent2,BrandPartner2,Booking2,PR2,Management2,LabelService2} from "../../assets/images"
function OurServices2() {
  return (
      <div>
          <div className="container">
          <header className={`uppercase ${styles.header} text-[2rem] sm:text-[3rem] lg:text-[4rem] text-center`}>Our services</header>
      
          
           <div className="md:flex px-[20px] flex-wrap justify-center">
             
           <ServicesCard
              title="talent management" 
             text="Amet minim mollit non deserunt ullamco est 
sit aliqua dolor do amet sint. Velit officia 
 duis enim velit mollit. Exercitation veniam 
 sunt nostrud amet............" 
 img={Talent2}/>

<ServicesCard
              title="Bookings" 
             text="Amet minim mollit non deserunt ullamco est 
sit aliqua dolor do amet sint. Velit officia 
 duis enim velit mollit. Exercitation veniam 
 sunt nostrud amet............" 
 img={Booking2}/>

<ServicesCard
              title="brand patnership" 
             text="Amet minim mollit non deserunt ullamco est 
sit aliqua dolor do amet sint. Velit officia 
 duis enim velit mollit. Exercitation veniam 
 sunt nostrud amet............" 
 img={BrandPartner2}/>

<ServicesCard
              title="PR" 
             text="Amet minim mollit non deserunt ullamco est 
sit aliqua dolor do amet sint. Velit officia 
 duis enim velit mollit. Exercitation veniam 
 sunt nostrud amet............" 
 img={PR2}/>

<ServicesCard
              title="social media management" 
             text="Amet minim mollit non deserunt ullamco est 
sit aliqua dolor do amet sint. Velit officia 
 duis enim velit mollit. Exercitation veniam 
 sunt nostrud amet............" 
 img={Management2}/>


<ServicesCard
              title="label services" 
             text="Amet minim mollit non deserunt ullamco est 
sit aliqua dolor do amet sint. Velit officia 
 duis enim velit mollit. Exercitation veniam 
 sunt nostrud amet............" 
 img={PR2}/>


 
           </div> 
      
          </div>
       
      </div>
   
  )
}

export default OurServices2
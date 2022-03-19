import styles from "./OurServices2.module.scss"
import {ServicesCard} from "../../utilities"
import {Talent2,BrandPartner2,Booking2,PR2,Management2,LabelService2} from "../../assets/images"
function OurServices2() {
  return (
      <div>
          <div className="container">
          <header className={`uppercase ${styles.header} text-[2rem] sm:text-[3rem] lg:text-[4rem] text-center`}>Our services</header>
      
          
           <div className=" sm:w-[95% ]w-[80%] m-auto flex justify-center flex-wrap">
             <div className="md:mr-[24px] ">
             <ServicesCard
              title="talent management" 
             text="Amet minim mollit non deserunt ullamco est 
sit aliqua dolor do amet sint. Velit officia 
 duis enim velit mollit. Exercitation veniam 
 sunt nostrud amet............" 
 img={Talent2}/>

             </div>
            
           
             <div className="md:mr-[24px] ">
             <ServicesCard 
             title="bookings" 
             text="Amet minim mollit non deserunt ullamco est 
sit aliqua dolor do amet sint. Velit officia 
 duis enim velit mollit. Exercitation veniam 
 sunt nostrud amet............" 
 img={Booking2}/>

             </div>
            
            
           
             <div className="md:mr-[24px]" >
             <ServicesCard 
             title="brand partnership"
              text="Amet minim mollit non deserunt ullamco est 
sit aliqua dolor do amet sint. Velit officia 
 duis enim velit mollit. Exercitation veniam 
 sunt nostrud amet............" 
 img={BrandPartner2}/>

             </div>

             
             <div className="md:mr-[24px]  ">
             <ServicesCard 
             title="PR" 
             text="Amet minim mollit non deserunt ullamco est 
sit aliqua dolor do amet sint. Velit officia 
 duis enim velit mollit. Exercitation veniam 
 sunt nostrud amet............"
  img={PR2}/>

             </div>

             
             <div className="md:mr-[24px]  ">
             <ServicesCard title="social media management" 
             text="Amet minim mollit non deserunt ullamco est 
sit aliqua dolor do amet sint. Velit officia 
 duis enim velit mollit. Exercitation veniam 
 sunt nostrud amet............" 
 img={Management2}/>

             </div>

             
             <div className="md:mr-[24px]  ">
             <ServicesCard title="label services" 
             text="Amet minim mollit non deserunt ullamco est 
sit aliqua dolor do amet sint. Velit officia 
 duis enim velit mollit. Exercitation veniam 
 sunt nostrud amet............" 
 img={LabelService2}/>

             </div>
            
           </div>
        
            
      
          </div>
       
      </div>
   
  )
}

export default OurServices2
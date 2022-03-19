import React from 'react'
import { Button } from '../../utilities'
import {Talent2,BrandPartner2,Booking2,PR2,Management2,LabelService2} from "../../assets/images"
import {ServicesCard} from "../../utilities"


import styles from "./Bookings.module.scss"
function Bookings() {
  return (
      <section className={`${styles.hero}  my-[30px]`}>
      
     <div className={`flex ${styles.hero_content} container justify-between`}>
 
     <div className=' md:w-[60%] lg:w-[38%] m-auto lg:p-[0] p-[20px] lg:ml-[61px]'>
      <header className=' lg:text-[2.25rem] text-[1.8rem] md:text-[2rem]'>
      bookings: djs, celebrity talent & live acts
      </header>
      <div className={`${styles.hero_text} `}>
<p className=''> Book world-renowned and rising music artists, DJs and celebrity talent for commercial or private events around the world. Our booking agents can help you bring top talent to audiences almost anywhere.
</p>
<p className='mt-[50px]'>If you need any help, ask us. We are happy to answer any questions you have regarding our talent or the booking process.</p> 

      </div>
      <Button text='booking >' width="156px" height='60px' radius="15px"/>

    
            </div>
       
     <div className='lg:mr-[57px] lg:w-auto md:w-[50%] mx-auto lg:px-[0px] px-[20px] '>
     <img src={Booking2} className=" lg:h-[344px] w-[100%]" alt="" />

     </div>
      

        </div>
      
        
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
        
            
      
   
       
     
    </section>
  )
}

export default Bookings
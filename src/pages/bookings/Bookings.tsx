import React from 'react'
import { Button } from '../../utilities'

import { Booking2 } from '../../assets/images'
import styles from "./Bookings.module.scss"
function Bookings() {
  return (
      <section className={`${styles.hero} my-[30px]`}>
    <div className='container'>   
     <div className="flex flex-wrap m-auto sm:w-[60%] w-[80%] md:w-[90%]  justify-between ">
     <div className='lg:w-[45%] md:w-[55%]  m-auto'>
      <header className=' lg:text-[2.25rem] text-[1.8rem] md:text-[2rem]'>
      bookings: djs, celebrity talent & live acts
      </header>
      <div className={`${styles.hero_text} `}>
<p className=''> Book world-renowned and rising music artists, DJs and celebrity talent for commercial or private events around the world. Our booking agents can help you bring top talent to audiences almost anywhere.
</p>
<p className='mt-[50px]'>If you need any help, ask us. We are happy to answer any questions you have regarding our talent or the booking process.</p> 

      </div>
      <Button text='booking >' width="156px" height='60px' radius="15px"/>

      {/* <div className="flex">
          <div className=''>

          </div>

      </div> */}

            </div>
       
       <div  className={`mx-auto lg:w-auto md:w-[55%] w-[100%] ${styles.bookImg}`}>
<img src={Booking2} className="w-[100%] lg:w-[344px] lg:h-[344px]" alt="" />
       </div>

        </div>
      
    </div>
    </section>
  )
}

export default Bookings
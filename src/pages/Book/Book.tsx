import React from 'react'
import { Input, Button,TextArea } from "../../utilities";
import styles from "./Book.module.scss"
function Book() {
  return (
   <section className={`${styles.book_container}`}>
       <div className='container'>
           <header className='text-center uppercase pt-[181px] mb-[107px]  lg:text-[2.25rem] text-[1.5rem] md:text-[2rem] font-[700]'>Book now</header>
       <div className="w-[80%] md:w-[60%] lg:w-[40%] mx-auto">
          <div className="">
            <Input label="name*" height="50px" width="100%" />
          </div>
          <div className="mt-[40px]">
            <Input label="email" height="50px" width="100%" />
          </div>
          <div className="mt-[40px]">
            <Input label="phone*" height="50px" width="100%" />
          </div>
          <div className="mt-[40px]">
            <Input label="location*" height="50px" width="100%" />
          </div>

          <div className="mt-[40px]">
            <TextArea label="message*" />
          </div>

          <div className="mt-[40px]">
            <Button text="Send a message" height="68px" width="100%" />
          </div>
        </div>
       </div>
         
   </section>
  )
}

export default Book
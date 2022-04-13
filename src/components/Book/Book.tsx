import  { useContext } from 'react'
import { Input, Button,TextArea } from "../../utilities";
import * as BI from "react-bootstrap-icons"
import styles from "./Book.module.scss"
import {GlobalContext} from "../../GlobalContext/GlobalContext"




function Book() {
  
  const context=useContext(GlobalContext)
  const {show}:any=context
  const {showForm}:any=context.showForm
  
  return (
   <section className={`${styles.book_container} overflow-auto z-[100] top-[0] left-[0] h-[100%] fixed`} style={{width:showForm?"100%":"0%", transition:"all .5s"}} >
       <div className='container relative'>
           <header className='text-center uppercase pt-[181px] pb-[107px]  lg:text-[2.25rem] text-[1.5rem] md:text-[2rem] font-[700]'>Book now</header>
       <div className="mb-[428px] w-[80%] md:w-[60%] lg:w-[40%] mx-auto">
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
        <button onClick={()=>show()} className='absolute top-[-20%] text-light right-[0] text-[2.5rem] font-[700]'><BI.X/></button>
       </div>
         
   </section>
  )
}

export default Book
import React from 'react'
import styles from "./BookGallery.module.scss"
import {Link,useNavigate} from "react-router-dom"
import {useContext,useState,useRef} from "react"
import {GlobalContext} from "../../GlobalContext/GlobalContext"
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Input, Button,TextArea } from "../../utilities";
import * as BI from "react-bootstrap-icons"
import sendingEmail from "../../utilities/Email";
import Swal from 'sweetalert2'

interface Props{
    category_img:any;
handle1:any;
handle2:any;
handle3:any;
stars:any;
title:string;
url:string;


}

type Show={
  show?:any
}

function BookGallery(props:Props) {
const context=useContext(GlobalContext)
// console.log(context);
const {show}:Show=context


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color:"white",

};
const navigate= useNavigate() 

const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const [name,setName]=useState("")
const [location,setLocation]=useState("")
const [phone,setPhone]=useState("")
const [email,setEmail]=useState("")
const [message,setMessage]=useState("")
const form:any = useRef();



const sendEmail = (e:any) => {
  e.preventDefault();
handleClose()
  if(name&&location&&phone&&email){
sendingEmail(form.current,"contact_form")


    clearForm()
  }

  else{
    Swal.fire({
      title: 'Error',
      text: 'Mail not sent, fill all fields',
      icon: 'error',
      confirmButtonText: 'ok'
    })
  }


};


const clearForm=()=>{
  setName("")
  setLocation("")
  setPhone("")
  setEmail("")
  // setMessage("")
  }
  
  
  return (
  
      <>
    <div className={`${styles.card_container} sm:mb-[35px] m-auto lg:w-[32%] md:w-[100%] p-[20px] lg:p-[0]`}>
    <div className={` ${styles.card}  flex md:h-[350px] justify-center`}>
         
         <div className='relative'> <img className='sm:w-[316px] w-[316px] h-[100%] rounded-[20px]' src={props.category_img} alt="" />
   <button  className={`${styles.book_btn} uppercase w-[100%] bottom-[0px] absolute text-[1.125rem] md:h-[70px] h-[60px] rounded-[20px]`} onClick={handleOpen}>book</button>
         
         </div>
     
     <div className={`px-[8px] pt-[50px]  sm:text-[.9rem] text-[0.8rem] capitalize ${styles.infos}`}>
<div className='flex justify-between mb-[7px]'>Award <span id='award_number' className='text-right'>20</span></div>
<div className='flex justify-between mb-[7px] items-center'>Ratings<span className='flex' id='stars'>{props.stars.map((item:any,index:number)=><img key={index} src={item} className="sm:w-[10px] sm:h-[10px] w-[8px] h-[8px]" alt="stars" />)}
    </span></div>
<div className='flex justify-between mb-[22px]'>Active years<span id='act_yrs'>20</span></div>
<div className={`text-[0.75rem] mb-[37px] flex justify-between ${styles.handles}`}>
<div className=''>
  <button className='m-auto'><img src={props.handle1} className="w-[14.88px] h-[14.88px]" alt="facebook" /></button>
<p className='mt-[5px] text-[.75rem]'>380k</p>
</div> 
<div className=''>
  <button className='m-auto'><img src={props.handle2}  className="w-[14.88px] h-[14.88px]"  alt="twitter" /></button>
  <p className='mt-[5px] text-[.75rem]'>380k</p>
  </div> 
<div className=''>
<button className='m-auto w-[10px]'><img src={props.handle3}  className="w-[14.88px] h-[14.88px]"  alt="instagram" /></button>
<p className='mt-[5px] text-[.75rem]'>380k</p>
</div>   
 </div>
<button onClick={()=>{navigate(`${props.url}`)}} className={`capitalize ${styles.read}`}>read more.....</button>



     </div>
     <div className='absolute bottom-[0]  shadow-lg rounded-[20px] w-[100%]'>
   </div>
   </div>     
  

   <div className='text-center font-[700] lg:text-[2.25rem] md:text-[1.8rem] text-[1.5rem] uppercase mt-[24px] mb-[73px]'>
     {props.title}
 </div>
          </div>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
  <form ref={form} onSubmit={sendEmail} className="relative capitalize">
    <div className=' '>

            <Input type="text" onChange={setName} value={name} label="name" important={true} height="50px" width="100%" />
    </div>
          <div className="mt-[10px]">
            <Input type="text" onChange={setEmail} value={email} label="email" important={true} height="50px" width="100%" />
          </div>
          <div className="mt-[10px]">
            <Input type="text" onChange={setPhone} value={phone} label="phone" height="50px"  width="100%" />
          </div>
          <div className="mt-[10px]">
            <Input type="text" onChange={setLocation} value={location} label="location" important={true} height="50px" width="100%" />
          </div>

          <div className="mt-[10px]">
            <TextArea label="message" important={true}/>
          </div>

          <div className="mt-[10px]">
            <Button submit={true}  text="Send a message" height="68px" width="100%" />
          </div>
          <button onClick={()=>handleClose()} className='absolute top-[-5%] right-[-10%] text-light  text-[2.5rem] font-[700]'><BI.X/></button>
    </form>

  </Box>
</Modal>
 </>
      
     
 
     
    
  )
}

export default BookGallery
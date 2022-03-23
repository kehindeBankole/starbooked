import React from 'react'
import styles from "./BookGallery.module.scss"
import {Link,useNavigate} from "react-router-dom"
interface Props{
    category_img:any;
handle1:any;
handle2:any;
handle3:any;
stars:any;
title:string;
url:string
}

function BookGallery(props:Props) {
const navigate= useNavigate() 
  return (
  
      <>
    <div className=' mb-[35px]     p-[20px] lg:p-[0]  m-auto'>
    <div className={`relative ${styles.card}  flex md:h-[400px] w-auto`}>
         
         <div className=''> <img className='sm:w-[316px] h-[100%] rounded-[20px]' src={props.category_img} alt="" /></div>
     
     <div className={`px-[15px] sm:pt-[50px] pt-[20px] sm:text-[1.125rem] text-[0.8rem] capitalize ${styles.infos}`}>
<div className='flex justify-between mb-[7px]'>Award <span id='award_number' className='text-right'>20</span></div>
<div className='flex justify-between mb-[7px] items-center'>Ratings<span className='flex' id='stars'>{props.stars.map((item:any)=><img src={item} className="sm:w-[13px] sm:h-[13px] w-[8px] h-[8px]" />)}
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
 <Link to={props.url}>
<button className={`capitalize ${styles.read}`}>read more.....</button>

 </Link>

     </div>
     <div className='absolute bottom-[0]  shadow-lg rounded-[20px] w-[100%]'>
   <button className={`${styles.book_btn} uppercase w-[100%] text-[1.125rem] md:h-[99px] h-[60px] rounded-[20px]`} onClick={()=>navigate("/book")}>book</button>
   </div>
   </div>     
  

   <div className='text-center font-[700] lg:text-[2.25rem] md:text-[1.8rem] text-[1.5rem] uppercase mt-[24px] mb-[73px]'>
     {props.title}
 </div>
          </div>
    
 </>
      
     
 
     
    
  )
}

export default BookGallery
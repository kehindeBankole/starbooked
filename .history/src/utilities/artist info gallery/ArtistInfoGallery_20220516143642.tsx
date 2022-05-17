import React from 'react';
import styles from "./ArtistInfo.module.scss"
import {Button} from "../../utilities"
interface Props{
    img:any;
    about:any;
    header:string;
    handle1:any;
handle2:any;
handle3:any;
handleOpen?:any;
}



function ArtistInfoGallery(props:Props) {
  return (<>
    <div className={`p-[20px] md:p-[0] flex flex-wrap justify-between md:mr-[57px] md:ml-[61px] sm:mt-[105px] mt-[20px]`}>
    <div className='lg:w-[42%] sm:w-[80%] mx-auto lg:m-[0]'>
 <h2 className='mb-[41px] font-[700] md:text-[2.25rem] sm:text-[1.5rem] md:text-left  uppercase'>about</h2>
 <div className='text-[.85rem] sm:text-[1rem]'>
 <p>{props.about}</p>
 <div className={`text-[0.75rem] mb-[37px]  ${styles.handles}`}>
<div className=''>
  <button className='m-auto'><img src={props.handle1} className="w-[14.88px] h-[14.88px]" alt="facebook" /></button>
<p className='mt-[5px] text-[.75rem]'>380k</p>
</div> 
<div className=''>
  <button className='m-auto'><img src={props.handle2}  className="w-[14.88px] h-[14.88px]"  alt="twitter" /></button>
  <p className='mt-[5px] text-[.75rem]'>380k</p>
  </div> 
<div className=''>
<button className='m-auto'><img src={props.handle3}  className="w-[14.88px] h-[14.88px]"  alt="instagram" /></button>
<p className='mt-[5px] text-[.75rem]'>380k</p>
</div>   
 </div>
 </div>
 
    </div>
 
 <div className='relative mt-[60px] mx-auto lg:mx-[0]'>
 <img src={props.img} className="mx-auto my-[40px] lg:m-[0]" alt="band info" />
<div className={`${styles.label} absolute w-[42px] h-[102px] top-[-5%] lg:top-[-10%] z-[-1] left-[50%] translate-x-[-50%] `}></div>
 </div>
 
       </div>

        <button onClick={()=>props.handleOpen()} className={`${styles.btn} rounded-[20px] sm:w-[503px] w-[100%] sm:h-[99px] w-[78%] h-[50px] font-[700] sm:text-[1.125rem] text-[.8rem] mb-[110px] sm:mt-[159px] mt-[100px] shadow-lg  uppercase mx-auto`}>book {props.header}</button>
       </>
  )
}

export default ArtistInfoGallery
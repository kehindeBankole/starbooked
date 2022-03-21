import React from 'react'
import {Band1,Band2,Star} from "../../assets/images"
import styles from "./BookBand.module.scss"
import {Button} from "../../utilities"
function BookBand() {

    const stars=Array(5).fill(Star)
    console.log(stars)
  return (
    <section className='mt-[76px]'>
    <div className='container p-[20px]'>
      <header className='text-center uppercase  lg:text-[4rem] text-[1.5rem] md:text-[2rem] font-[700]'>
        book your favourites
      </header>

      <div className='flex flex-wrap justify-between md:mr-[57px] md:ml-[61px] mt-[105px]'>
      
      <div className='relative mb-[35px] m-auto'>
      <div className=' flex '>
           
           <div className=''> <img className='w-[100%]' src={Band1} alt="" /></div>
       
       <div className={`px-[15px] pt-[50px] text-[1.125rem] capitalize ${styles.infos}`}>
<div className='flex justify-between mb-[7px]'>Award <span id='award_number' className='text-right'>20</span></div>
<div className='flex justify-between mb-[7px] items-center'>Ratings<span className='flex' id='stars'>{stars.map(item=><img src={item} className="w-[13px] h-[13px]" />)}</span></div>
<div className='flex justify-between mb-[22px]'>Active years<span id='act_yrs'>20</span></div>
<div className='flex text-[0.75rem]' id='handles'>
   <button></button>
   <button></button>
   <button></button>
   
   </div>
<button className='capitalize'>read more.....</button>

       </div>
     </div>     
     <div className='absolute bottom-[0] shadow-lg rounded-[20px] w-[100%]'>
     <Button width="100%" height="99px" text="book" radius="20px"/>

     </div>

            </div>
       
            <div className='relative lg:w-[45%] mb-[35px] m-auto '>
      <div className=' flex '>
           
           <div className=''> <img className='w-[100%]' src={Band1} alt="" /></div>
       
       <div className={`px-[15px] pt-[50px] text-[1.125rem] capitalize ${styles.infos}`}>
<div className='flex justify-between mb-[7px]'>Award <span id='award_number' className='text-right'>20</span></div>
<div className='flex justify-between mb-[7px] items-center'>Ratings<span className='flex' id='stars'>{stars.map(item=><img src={item} className="w-[13px] h-[13px]" />)}</span></div>
<div className='flex justify-between mb-[22px]'>Active years<span id='act_yrs'>20</span></div>
<div className='flex text-[0.75rem]' id='handles'>
   <button></button>
   <button></button>
   <button></button>
   
   </div>
<button className='capitalize'>read more.....</button>

       </div>
     </div>     
     <div className='absolute bottom-[0] shadow-lg rounded-[20px] w-[100%]'>
     <Button width="100%" height="99px" text="book" radius="20px"/>

     </div>

            </div>
       
   
       
      </div>
<div>

</div>
    </div>
  </section>
  )
}

export default BookBand
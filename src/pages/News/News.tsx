import React from 'react'
import {News as NewsPic} from "../../assets/images"
import styles from "./News.module.scss";
import {NewsGallery} from "../../components"
import { Button } from '../../utilities';
function News() {
  return (
    <section className={`${styles.News} mt-[76px]`}>
        <div className='mb-[166px] '>
        <div className='container lg:p-[0] p-[20px] '>
            <header className='text-center  lg:text-[4rem] text-[1.5rem] md:text-[2rem]'>
                Lastest news
            </header>
<div className='flex flex-wrap mb-[166px] mt-[61px] justify-between'>

    <div className='lg:ml-[61px] lg:w-[38%] mx-auto md:w-[50%] w-auto '>
    <img src={NewsPic} className="mx-auto md:w-[100%] sm:w-[75%] w-[100%]" alt="" />
    </div>

    <div className='lg:w-[39%]  sm:w-[60%] mx-auto lg:mr-[57px]'>
<p className={`${styles.lat_news} capitalize`}>latest news</p>

<header className={`${styles.headline} text-[1rem] lg:text-[2.25rem]`}>
Amet minim mollit non 
deserunt ullamco est sit  
dolor do amet sint. Velit 
officia consequat duis enim velit mollit. 
</header>

<div className='lg:pr-[140px]'>
Amet minim mollit non 
deserunt ullamco est sit  
dolor do amet sint. Velit 
officia consequat duis enim velit mollit. 
</div>

<button className={`${styles.full_story} capitalize mt-[35px]`}>
full story
</button>
    </div>

</div>

<div className='flex flex-wrap justify-center'>
<NewsGallery/>
</div>

<div className='flex mt-[123px]'>
<div className={`${styles.load_more} m-auto`}>
<Button text="load more +" width="171px" height="20px" radius={"15px"}/>
</div>
</div>
        </div>
        </div>

    </section>
  )
}

export default News
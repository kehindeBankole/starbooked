import React from 'react'
import {Band1,Band2,Star,FB,Insta,Twitter2} from "../../assets/images"
import styles from "./BookPages.module.scss"
import {BookGallery} from "../../utilities"
import {Book} from "../../components"



  

function BookBand() {

// console.log(show);


  const Bands:{category_img:any;handle1:any,handle2:any,handle3:any,stars:any,title:string;url:string;}[]=[
{category_img:Band1,
handle1:FB,
handle2:Twitter2,
handle3:Insta,
stars:Array(5).fill(Star),
title:"the band hitz",
url:"about"

},

{category_img:Band2,
  handle1:FB,
  handle2:Twitter2,
  handle3:Insta,
  stars:Array(5).fill(Star),
  title:"the band hitz",
url:"about"  
}
  ,

{category_img:Band2,
  handle1:FB,
  handle2:Twitter2,
  handle3:Insta,
  stars:Array(5).fill(Star),
  title:"the band hitz",
url:"about"  
}
  ,

{category_img:Band2,
  handle1:FB,
  handle2:Twitter2,
  handle3:Insta,
  stars:Array(5).fill(Star),
  title:"the band hitz",
url:"about"  
}
  ,

{category_img:Band2,
  handle1:FB,
  handle2:Twitter2,
  handle3:Insta,
  stars:Array(5).fill(Star),
  title:"the band hitz",
url:"about"  
}
,
  {category_img:Band2,
    handle1:FB,
    handle2:Twitter2,
    handle3:Insta,
    stars:Array(5).fill(Star),
    title:"the band hitz",
  url:"about"  
  }

  ]

    
    
  return (
    <section className='mt-[0px]'>
    <div className='container sm:pl-[61px] sm:pr-[57px]'>
      <header className='text-center uppercase  lg:text-[4rem] text-[1.5rem] md:text-[2rem] font-[700]'>
        book a live band
      </header>

      <div className={`${styles.bands} flex flex-wrap justify-between  sm:mt-[105px] mt-[40px]`}>
    {Bands.map((item,index)=>(
      <BookGallery key={index} url={item.url} category_img={item.category_img} handle1={item.handle1} handle2={item.handle2} handle3={item.handle3} stars={item.stars} title={item.title} />

    ))}
      </div>
<div>
<Book/>
</div>

    </div>
  </section>
  )
}

export default BookBand
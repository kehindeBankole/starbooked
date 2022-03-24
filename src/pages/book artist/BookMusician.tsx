import React from 'react'
import {DJS,Star,FB,Insta,Twitter2, Musicians} from "../../assets/images"
import styles from "./BookPages.module.scss"
import {BookGallery} from "../../utilities"
import {Book} from "../../components"

function BookMusician() {

  const Bands:{category_img:any;handle1:any,handle2:any,handle3:any,stars:any,title:string,url:string}[]=[
{category_img:Musicians,
handle1:FB,
handle2:Twitter2,
handle3:Insta,
stars:Array(5).fill(Star),
title:"Musician",
url:"about"

},

{category_img:Musicians,
  handle1:FB,
  handle2:Twitter2,
  handle3:Insta,
  stars:Array(5).fill(Star),
  title:"Musician",
  url:"about"
  }
  ,

{category_img:Musicians,
  handle1:FB,
  handle2:Twitter2,
  handle3:Insta,
  stars:Array(5).fill(Star),
  title:"Musician",
  url:"about"
  }
  ,

{category_img:Musicians,
  handle1:FB,
  handle2:Twitter2,
  handle3:Insta,
  stars:Array(5).fill(Star),
  title:"Musician",
  url:"about"
  }
  ,

{category_img:Musicians,
  handle1:FB,
  handle2:Twitter2,
  handle3:Insta,
  stars:Array(5).fill(Star),
  title:"Musician",
  url:"about"
  },

  {category_img:Musicians,
    handle1:FB,
    handle2:Twitter2,
    handle3:Insta,
    stars:Array(5).fill(Star),
    title:"Musician",
    url:"about"
    }

  ]

    
    
  return (
    <section className=''>
    <div className='container '>
      <header className='text-center uppercase  lg:text-[4rem] text-[1.5rem] md:text-[2rem] font-[700]'>
        book your favourites
      </header>

      <div className={`${styles.bands} flex flex-wrap justify-between md:mr-[57px] md:ml-[61px] mt-[105px]`}>
    {Bands.map(item=>(
      <BookGallery url={item.url} category_img={item.category_img} handle1={item.handle1} handle2={item.handle2} handle3={item.handle3} stars={item.stars} title={item.title} />

    ))}
      </div>
<div>
<Book/>
</div>
    </div>
  </section>
  )
}

export default BookMusician
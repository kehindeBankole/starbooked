import React from 'react'
import {Band1,Band2,Band3,Star,FB,Insta,Twitter2,BookComedian as Comedians,BookDj as DJS,Influencers,BookMc as MCS,BookMusician as Musicians} from "../../assets/images"
import styles from "./BookPages.module.scss"
import {BookGallery} from "../../utilities"
import {Book} from "../../components"
import { useParams } from 'react-router-dom'

const Bands=Array(6).fill({category_img:Band3,
    handle1:FB,
    handle2:Twitter2,
    handle3:Insta,
    stars:Array(5).fill(Star),
    title:"the band hitz",
    url:"about the band hitz"
    
    })
    
    const Mc=Array(6).fill({category_img:MCS,
        handle1:FB,
        handle2:Twitter2,
        handle3:Insta,
        stars:Array(5).fill(Star),
        title:"mc",
        url:"about mc laughs"
        
        })

        const Dj=Array(6).fill({category_img:DJS,
            handle1:FB,
            handle2:Twitter2,
            handle3:Insta,
            stars:Array(5).fill(Star),
            title:"Djs name",
            url:"about dj rock"
            
            })

            const Influencer=Array(6).fill({category_img:Influencers,
                handle1:FB,
                handle2:Twitter2,
                handle3:Insta,
                stars:Array(5).fill(Star),
                title:"influencer",
                url:"about good vibes"
                
                })

                const Musician=Array(6).fill({category_img:Musicians,
                    handle1:FB,
                    handle2:Twitter2,
                    handle3:Insta,
                    stars:Array(5).fill(Star),
                    title:"musician",
                    url:"about big dom whiz"
                    
                    })

                    const Comedian=Array(6).fill(  {category_img:Comedians,
                      handle1:FB,
                      handle2:Twitter2,
                      handle3:Insta,
                      stars:Array(5).fill(Star),
                      title:"comedian",
                      url:"about arole"
                      
                      })
                  
function BookArtist() {
    const params=useParams()
    const {artist}=params
    
  return (
    
    <section className='mt-[0px]'>
    <div className='container sm:pl-[61px] sm:pr-[57px]'>
     
      <div className={`${styles.bands} flex flex-wrap justify-between  sm:mt-[105px] mt-[40px]`}>
    {artist==="liveband"&&(
   <>
   <header className='text-center uppercase w-full lg:text-[4rem] text-[1.5rem] md:text-[2rem] font-[700]'>
     book a Live band
   </header>
      {Bands.map((item,index)=>(

      <BookGallery key={index} url={item.url} category_img={item.category_img} handle1={item.handle1} handle2={item.handle2} handle3={item.handle3} stars={item.stars} title={item.title} />
   
    ))
    }
    </>
    )
    }
    {artist==="dj"&&(
   <>
   <header className='text-center uppercase w-full lg:text-[4rem] text-[1.5rem] md:text-[2rem] font-[700]'>
     book a dj
   </header>
      {Dj.map((item,index)=>(

      <BookGallery key={index} url={item.url} category_img={item.category_img} handle1={item.handle1} handle2={item.handle2} handle3={item.handle3} stars={item.stars} title={item.title} />
   
    ))
    }
    </>
    )
    }

 {artist==="musician"&&(
   <>
   <header className='text-center uppercase w-full lg:text-[4rem] text-[1.5rem] md:text-[2rem] font-[700]'>
     book a musician
   </header>
      {Musician.map((item,index)=>(

      <BookGallery key={index} url={item.url} category_img={item.category_img} handle1={item.handle1} handle2={item.handle2} handle3={item.handle3} stars={item.stars} title={item.title} />
   
    ))
    }
    </>
    )
    }
 {artist==="comedian"&&(
   <>
   <header className='text-center uppercase w-full lg:text-[4rem] text-[1.5rem] md:text-[2rem] font-[700]'>
     book a comedian
   </header>
      {Comedian.map((item,index)=>(

      <BookGallery key={index} url={item.url} category_img={item.category_img} handle1={item.handle1} handle2={item.handle2} handle3={item.handle3} stars={item.stars} title={item.title} />
   
    ))
    }
    </>
    )
    }

{artist==="mc"&&(
   <>
   <header className='text-center uppercase w-full lg:text-[4rem] text-[1.5rem] md:text-[2rem] font-[700]'>
     book a mc
   </header>
      {Mc.map((item,index)=>(

      <BookGallery key={index} url={item.url} category_img={item.category_img} handle1={item.handle1} handle2={item.handle2} handle3={item.handle3} stars={item.stars} title={item.title} />
   
    ))
    }
    </>
    )
    }
 {artist==="influencer"&&(
   <>
   <header className='text-center uppercase w-full lg:text-[4rem] text-[1.5rem] md:text-[2rem] font-[700]'>
     book a influencer
   </header>
      {Influencer.map((item,index)=>(

      <BookGallery key={index} url={item.url} category_img={item.category_img} handle1={item.handle1} handle2={item.handle2} handle3={item.handle3} stars={item.stars} title={item.title} />
   
    ))
    }
    </>
    )
    }
      </div>
<div>
<Book/>
</div>

    </div>
  </section>
  )
}

export default BookArtist
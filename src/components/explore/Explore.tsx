import styles from "./Explore.module.scss"
import {ExploreBand,ExploreComedian,ExploreDjs,ExploreMusician} from "../../assets/images"
import {useNavigate} from "react-router-dom"
import { ReactComponent as ChevronSmall } from "../../assets/images/small.svg";

import { useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'


const exploreArr=[
{
  img:ExploreBand,
  title:"liveband"
},
{
  img:ExploreDjs,
  title:"Djs"
},
{
  img:ExploreMusician,
  title:"musician"
},
{
  img:ExploreComedian,
  title:"comedian"
}


]
function Explore() {
  const navigate=useNavigate()


//     function pageScroll() {
//       window.scrollBy(0,300);
//       setTimeout(pageScroll,10);
//   }
// pageScroll()



// useEffect(()=>{

        
//       setTimeout(()=>{
//         const slider=document.getElementById("explore-slider");

//         if(slider) {
//           slider.style.transition="all 1s"
//           setInterval(()=>{
//             // 505.5555725097656
//           console.log(slider)

//             if(slider.scrollLeft===505.5555725097656){
//               slider.scrollTo(0,0);
//             }
//             else{
//               slider.scrollTo(276.66668701171875,0);
//               // slider.scrollBy(400,0);

//             }
//              console.log(slider.scrollLeft);
//           },3000);
          
//         }
//   //             (function() {
      
//   //     setInterval(()=>slider.scrollBy(1,0),10);
//   // })()

//   //       }
    
    
//     },3000);
  
// pageScroll()
// console.log(slider);




// },[])

  return (
    <section className=''>
        <div className='container sm:pr-[57px] sm:pl-[61px]'>
            <div className='flex lg:flex-row flex-col flex-wrap'>
<div className="lg:w-[40%]  lg:text-left text-center ">
 <header className="font-[700] lg:text-[4rem] sm:text-[2rem] text-[1.4rem] lg:w-[30%]  uppercase ">explore our roosters</header>

<button  onClick={()=>navigate("/bookings")} className={`${styles.btn} md:w-[156px] text-[1.125rem] md:h-[60px] hidden lg:block uppercase`}>booking <ChevronSmall className="inline ml-[12px]"/> </button>

</div>

<div id="explore-slider" className={`${styles.exploreSlider} w-[100%] my-[2rem] flex-1 overflow-x-auto `}>
  
<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      autoplay={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => swiper}
      onSlideChange={() => "slider change"}
    >

  <SwiperSlide className={`hidden lg:block ${styles.linkSlide}`}>
  <div className="pt-[46px] pb-[41px] mb-[24px]  w-[218px] rounded-[40px] bg-[#D8D7D7]">
  <ul className="font-[700] ml-[49px]">
    <li><button  className="font-bold uppercase mb-[20px]" onClick={()=>navigate("bookings/liveband")}>live band</button> </li>
    <li ><button className="font-bold mb-[20px]" onClick={()=>navigate("bookings/dj")}> DJs</button></li>
    <li ><button className="font-bold uppercase mb-[20px]" onClick={()=>navigate("bookings/musician")}>Musician</button> </li>
    <li ><button className="font-bold uppercase mb-[20px]" onClick={()=>navigate("bookings/comedian")}>comedian</button> </li>
    <li ><button className="font-bold mb-[20px]" onClick={()=>navigate("bookings/mc")}>Mcs</button> </li>
    <li ><button className="font-bold uppercase " onClick={()=>navigate("bookings/influencer")}>influencer</button> </li>
</ul>
  </div>
  </SwiperSlide>



      
     
    <div className="invisible">...</div>  
    
{exploreArr.map((item,index)=>(
  <SwiperSlide key={index} className="self-end">
  <div className=" relative mr-[24px] mb-[24px] w-[100%]" key={index}>
  <img src={item.img}  alt={item.title} />
<p className="absolute bottom-[16px] left-[50%] text-[.8rem] text-[white] translate-x-[-50%]  font-[700] uppercase">{item.title}</p>
  </div>
  </SwiperSlide>
))}
</Swiper>
</div>
<div className="w-[100%]">

<button onClick={()=>{navigate("/bookings");window.scroll(0,0)}} className={`${styles.btn} lg:hidden m-auto lg:w-[156px] lg:h-[60px] w-[7rem] h-[3rem] text-[.8rem] uppercase`}> booking <ChevronSmall className="inline w-[7%] ml-[12px]"/> </button>


</div>

 </div>
        </div>
    </section>
  )

}

export default Explore
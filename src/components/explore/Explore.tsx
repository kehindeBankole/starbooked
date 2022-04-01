import styles from "./Explore.module.scss"
import {ExploreBand,ExploreComedian,ExploreDjs,ExploreMusician} from "../../assets/images"
import {useNavigate} from "react-router-dom"
import { ReactComponent as ChevronSmall } from "../../assets/images/small.svg";

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
  return (
    <section className='mt-[180px] mb-[176px]'>
        <div className='container sm:pr-[57px] sm:pl-[61px]'>
            <div className='flex lg:flex-row flex-col flex-wrap'>
<div className="lg:w-[40%]  lg:text-left text-center ">
 <header className="font-[700] lg:text-[4rem] sm:text-[2rem] text-[1.4rem] lg:w-[30%]  uppercase ">explore our roosters</header>
<button  onClick={()=>navigate("/bookings")} className={`${styles.btn} md:w-[156px] text-[1.125rem] md:h-[60px] hidden lg:block uppercase`}>booking <ChevronSmall className="inline ml-[12px]"/> </button>
</div>

<div id="explore-slider" className={`${styles.exploreSlider} my-[2rem] flex-1 flex overflow-x-auto snap-x items-end`}>
  <div className="pt-[46px] pb-[41px] snap-center ml-[24px] mb-[24px] flex-shrink-0 mr-[45px] w-[218px] rounded-[40px] bg-[#D8D7D7]">
  <ul className="font-[700] ml-[49px]">
    <li className="uppercase mb-[20px]">live band</li>
    <li className="mb-[20px]">DJs</li>
    <li className="uppercase mb-[20px]">Musician</li>
    <li className="uppercase mb-[20px]">comedian</li>
    <li className="mb-[20px]">Mcs</li>
    <li className="uppercase ">influencer</li>
</ul>
  </div>

{exploreArr.map((item,index)=>(
  <div className="flex-shrink-0 relative snap-center mr-[24px] mb-[24px]" key={index}>
  <img src={item.img}  alt={item.title} />
<p className="absolute bottom-[16px] left-[50%] text-[white] translate-x-[-50%]  font-[700] uppercase">{item.title}</p>
  </div>
))}

</div>
<div className="w-[100%]">
<button onClick={()=>navigate("/bookings")} className={`${styles.btn} lg:hidden m-auto lg:w-[156px] lg:h-[60px] w-[7rem] h-[3rem] text-[.8rem] uppercase`}> booking <ChevronSmall className="inline w-[7%] ml-[12px]"/> </button>

</div>

 </div>
        </div>
    </section>
  )

}

export default Explore
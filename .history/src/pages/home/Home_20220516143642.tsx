import React from 'react';
import { Booking, OurService, Explore } from '../../components';
import BannerSlider from '../../components/bannerSlider/BannerSlider';
import Marquee from 'react-fast-marquee';
import { Talent, Booking as BookingImg, BrandPartner, LabelService, Management, PR, Chairs } from '../../assets/images';
import img1 from '../../assets/images/1.png';
import { one, two, three, four, five,viewingLappy,Piano,Marquee1,Marquee2,Marquee3,Marquee4,Marquee5,Marquee6 } from '../../assets/images';
import styles from './Home.module.scss';
import { ReactComponent as ChevronSmall } from "../../assets/images/small.svg";
import { useNavigate } from "react-router-dom";



const MarqueeImg=[Marquee1,Marquee2,Marquee3,Marquee4,Marquee5,Marquee6]
const sliderInfo = [
	{
		image: two,
		text:
			'From the biggest bands to top solo artists, from comedians to social media influencers, Star Book is YOUR booking agency.'
	},
	{
		image: Piano,
		text:
			'Our in-house entertainment production team will make sure that every aspect of the entertainment for your corporate or private event runs perfectly.'
	},
	{
		image: viewingLappy,
		text:
			'Let one of our veteran booking agents help you find the perfect band, entertainer or celebrity for your demographic and budget.'
	},
	{
		image: Chairs,
		text:
			'We work with some of the biggest wedding and event planners to help them add booking big name entertainment to their list of entertainment services.'
	},

	{
		image: four,
		text:
			"Use our booking agency's relationships and experience to make buying ANY big name entertainer anywhere in the world easy and hassle free."
	},
	{
		image: five,
		text:
			'Star Book makes buying top name entertainment for corporate events and private parties accessible to anyone around the world.'
	}
];
function Home() {
	const navigate=useNavigate()

	return (
		<section className={`${styles.homeContainer} `}>
			<div className="bg-five pt-[5rem]">
				<div className={`${styles.banner} container`}>
					<BannerSlider img1={img1} bookBtn={true} sliderInfo={sliderInfo} />
					<div className="w-[100%]">
            <button onClick={()=>{navigate("bookings"); window.scroll(0,0)}} className={`m-auto ${styles.btn}`}>
              booking <ChevronSmall />
            </button>
            </div>
				</div>
			</div>
			<div className="md:mt-[180px] md:mb-[176px] my-[2rem]">
				<Explore />
			</div>
			<OurService />
			<div className="">
				<Marquee speed={80} gradient={false} className="overflow-hidden mb-[4rem] ">

{MarqueeImg.map((item,index)=>(
	<div key={index} className="text-center mx-[3rem] uppercase  md:text-[1.5rem]">
	<img src={item}  alt="slider img" />
</div>
))}

				

				
				</Marquee>
			</div>

			<Booking
				title="get in touch"
				subtitle="Please feel free to fill out the entertainment request form and your assigned agent will contact you to see how Star Book can assist you."
			/>
		</section>
	);
}

export default Home;

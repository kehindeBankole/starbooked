import styles from './OurServices.module.scss';
import { Talent, Booking, BrandPartner, LabelService, Management, PR,Coporate,Concerts,PrivateParties,Birthday,Wedding,Fairs, Celeb } from '../../assets/images';
import { useNavigate } from 'react-router-dom';
function OurServices() {

	const navigate=useNavigate()
const services=[{
	title:<>corporate <br /> entertainment</>,img:Coporate,
url:"/services/Corporate Entertainment",
},
	{
		title:"private parties",img:PrivateParties,
		url:"/services/Private Parties",
	},
		{
			title:<>wedding <br /> entertainment</>,img:Wedding,
			url:"/services/Wedding Entertainment",
		},
		{
			title:"birthday parties",img:Birthday,
			url:"/services/Birthday Party Entertainment",
		},
		{
			title:"celebrity appearances",img:Celeb,
			url:"/services/Celebrity Appearances",
		},
	{
		title:"public concerts",img:Concerts,
		url:"/services/Public Concerts",
	},



	{
		title:<>FAIRS, CARNIVALS, <br /> AND FESTIVALS</>,
		img:Fairs,
	url:"/services/Fairs, Carnivals, and Festivals",
	}

]

	return (
		<section id="services" className={`${styles.services} `}>
			<div className="container pt-[42px]">
				<h2 className=" text-[1.8rem] sm:text-[3rem] lg:text-[4rem]">our services</h2>
				<p className='font-bold text-center max-w-[887px] m-auto uppercase md:text-[1rem] text-[.8rem] p-[1rem]'>Whether it's a private party or a corporate event, we can handle the entire process from booking 
the acts to coordinating the logistics and production.</p>
				<div className={`flex flex-wrap justify-center sm:pt-[65px] pt-[20px] ${styles.service}`}>
					{services.map((item,index)=>(
<div onClick={()=>{navigate(item.url); window.scroll(0,0);}} key={index} className="text-center uppercase md:text-[1.5rem]">
						<img src={item.img} alt="service image" />
						<p className="lg:mb-[72px] mb-[20px]">{item.title}</p>
					</div>
					))}
					
				</div>
			</div>
		</section>
	);
}

export default OurServices;

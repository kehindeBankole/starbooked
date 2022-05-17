import styles from './OurService.module.scss';
import { Talent, Booking, BrandPartner, LabelService, Management, PR,Coporate,Concerts,PrivateParties,Birthday,Wedding,Fairs, Celeb } from '../../assets/images';
function OurServices() {
const services=[{
	title:<>coporate <br /> entertainment</>,img:Coporate},
	{
		title:"private parties",img:PrivateParties},
		{
			title:<>wedding <br /> entertainment</>,img:Wedding
		},
		{
			title:"birthday parties",img:Birthday
		},
		{
			title:"celebrity appearances",img:Celeb
		},
	{
		title:"public concerts",img:Concerts
	},



	{
		title:<>FAIRS, CARNIVALS, <br /> AND FESTIVALS</>,
		img:Fairs}

]

	return (
		<section id="services" className={`${styles.services} `}>
			<div className="container pt-[42px]">
				<h2 className=" text-[1.8rem] sm:text-[3rem] lg:text-[4rem]">our services</h2>
				<p className='font-bold text-center max-w-[887px] m-auto uppercase md:text-[1rem] text-[.8rem] p-[1rem]'>Whether it's a private party or a corporate event, we can handle the entire process from booking 
the acts to coordinating the logistics and production.</p>
				<div className={`flex flex-wrap justify-center sm:pt-[65px] pt-[20px] ${styles.service}`}>
					{services.map((item,index)=>(
						<div key={index} className="text-center uppercase md:text-[1.5rem]">
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

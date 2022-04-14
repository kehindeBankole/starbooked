import styles from './OurService.module.scss';
import { Talent, Booking, BrandPartner, LabelService, Management, PR } from '../../assets/images';
function OurServices() {
const services=[{
	title:"coporate entertainment",img:Talent},
	{
		title:"public concerts",img:Booking
	},
{
	title:"private parties",img:BrandPartner},
{
	title:"birthday parties",img:PR},
{
	title:"wedding entertainment",img:LabelService},

]

	return (
		<section id="services" className={`${styles.services} `}>
			<div className="container pt-[42px]">
				<h2 className=" text-[1.8rem] sm:text-[3rem] lg:text-[4rem]">our services</h2>
				<div className={`flex flex-wrap justify-center ${styles.service}`}>
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

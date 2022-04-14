import styles from './OurService.module.scss';
import { Talent, Booking, BrandPartner, LabelService, Management, PR } from '../../assets/images';
function OurServices() {
const services=[{
	title:"talent management",img:Talent},
{
	title:"bookings",img:Booking},
{
	title:"pr",img:PR},
{
	title:<>Social media <br /> management</>,img:Management},
{
	title:"label services",img:LabelService
},
{
	title:"brand patnership",img:BrandPartner
}
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

import styles from './footer.module.scss';
import logoWhite from '../../assets/images/logowhite.svg';
import { Facebook, Twitter, Linkdin, Instagram } from '../../assets/images';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ChevronUp } from '../../assets/images/chevronup.svg';
import { Link, animateScroll as scroll } from 'react-scroll';
const services = [
	{
		title: 'Corporate Entertainment'
	},
	{
		title: 'Private Parties'
	},
	{
		title: 'Wedding Entertainment'
	},
	{
		title: 'Birthday Party Entertainment'
	},
	{
		title: 'Celebrity Appearances'
	},
	{
		title: 'Public Concerts'
	},
	{
		title: 'Fairs, Carnivals, and Festivals'
	}
];

const quickLinks = [
	{
		title: 'about'
	},
	{
		title: 'news'
	},
	{
		title: 'bookings'
	},
	{
		title: 'services'
	}
];

function Footer() {
	const navigate = useNavigate();
	return (
		<footer className={`${styles.footer} relative bottom-0 p-[20px] flex-wrap`}>
			<div className={`flex flex-wrap justify-between ${styles.foot_border}`}>
				<div className="md:w-[35%] sm:w-[45%] w-[100%] my-[20px] xlg:my-[0]">
					<div>
						<img src={logoWhite} className="w-[40%]  sm:w-[60%]" alt="logo" />
					</div>

					<div className="mt-[34px]" style={{ fontSize: '18px' }}>
					From the biggest bands to top solo artists, from comedians to social media influencers, <br /> <br/>
Star Book is YOUR booking agency.					</div>
				</div>

				<div id="links" className="my-[10px] xlg:my-[0] p-[3px]">
					<h2 className="uppercase">quick links</h2>
					<ul>
						{quickLinks.map((item, index) => (
							<li key={index}>
								<button
									className="capitalize"
									onClick={() => {
										item.title === 'about'
											? navigate(`company/${item.title}`)
											: navigate(`/${item.title}`);
										window.scroll(0, 0);
									}}
								>
									{item.title}
								</button>
							</li>
						))}
					</ul>
				</div>

				<div id="services" className=" my-[10px] xlg:my-[0] p-[3px]">
					<h2 className="uppercase">our services</h2>
					<ul>
						{services.map((item, index) => (
							<li key={index}>
								<button
									className="capitalize"
									onClick={() => {
										navigate(`services/${item.title}`);
										window.scroll(0, 0);
									}}
								>
									{item.title}
								</button>
							</li>
						))}
					</ul>
				</div>

				<div id="contact" className="my-[10px] xlg:my-[0] p-[3px]">
					<h2 className="uppercase">contact us</h2>
					<ul>
						<li id="phone-number" className="capitalize">
							07459649070, +234 814 3291 757.
						</li>
						<li id="address" className="capitalize">
							lagos, nigeria.
						</li>
						<li id="address" className="capitalize">
							E-mail: <a  href="mailto:info@starbook.ng"> Info@Starbook.Ng</a> (For General Inquiry)
						</li>
						<li id="address" className="capitalize">
							 <a href="mailto:booking@starbook.ng">Booking@Starbook.Ng</a>.
						</li>
					</ul>
				</div>
			</div>
			<div className="flex justify-end w-[100%] z-[5] fixed right-[2%] bottom-[5%]">
				<Link activeClass="active" to="top" spy={true} smooth={true} offset={-6000} duration={2000}>
					<button className="bg-[#F9A61B]  flex w-[50px] h-[50px] rounded-full  ">
						<ChevronUp className="m-[auto] h-[20%]" />
					</button>
				</Link>
			</div>
{/* e-mail: info@starbook.ng (for general inquiry)
booking@starbook.ng (for bookings) */}
			<div className={`flex flex-wrap justify-between  mt-[26px] capitalize ${styles.bottom_footer}`}>
				<p id="copyrights" className="w-[100%] md:w-[50%]">
					<span>&copy;</span>starbook 2022. all rights reserved.
				</p>
				<div className="icons flex md:my-[0] my-[25px]">
				<button className="mr-[25px]">
				<a href="https://instagram.com" target="_blank"><img src={Instagram} alt="instagram" /></a>		
					</button>
					<button className="mx-[25px]">
						<a href="https://linkedin.com" target="_blank"><img src={Linkdin} alt="linkedin" /></a>
					</button>
					<button className="mx-[25px]">
						<a href="https://facebook.com" target="_blank"><img src={Facebook} alt="facebook" /></a>
					</button>
					<button className="ml-[25px]">
						<a href="https://twitter.com" target="_blank"><img src={Twitter} alt="twitter" /></a>
					</button>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

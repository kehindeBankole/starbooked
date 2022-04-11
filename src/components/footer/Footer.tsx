import styles from './footer.module.scss';
import logoWhite from '../../assets/images/logowhite.svg';
import { Facebook, Twitter, Linkdin, Instagram } from '../../assets/images';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ChevronUp } from "../../assets/images/chevronup.svg";

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
						A platform to promote celebrities and also book them for their services
					</div>
				</div>

				<div id="links" className="my-[10px] xlg:my-[0] p-[3px]">
					<h2 className="uppercase">quick links</h2>
					<ul>
						<li>
							<button className="capitalize" onClick={() => navigate('company/aboutus')}>
								about
							</button>
						</li>

						<li>
							<button className="capitalize" onClick={() => navigate('/news')}>
								news
							</button>{' '}
						</li>

						<li>
							<button className="capitalize" onClick={() => navigate('/bookings')}>
								booking
							</button>
						</li>

						<li>
							<button className="capitalize" onClick={() => navigate('/services')}>
								services
							</button>
						</li>
					</ul>
				</div>

				<div id="services" className=" my-[10px] xlg:my-[0] p-[3px]">
					<h2 className="uppercase">our services</h2>
					<ul>
						<li>
							<button className="capitalize">corperate entertainment</button>
						</li>
						<li>
							<button className="capitalize">private parties</button>
						</li>
						<li>
							<button className="capitalize">wedding entertainment</button>
						</li>
						<li>
							<button className="capitalize">Birthday party entertainment</button>
						</li>

						<li>
							<button className="capitalize">celebrity appearance</button>
						</li>

						<li>
							<button className="capitalize">fairs, carnivals and festivals</button>
						</li>
					</ul>
				</div>

				<div id="contact" className="my-[10px] xlg:my-[0] p-[3px]">
					<h2 className="uppercase">contact us</h2>
					<ul>
						<li id="phone-number" className="capitalize">
							+234 0000 00000 00
						</li>
						<li id="address" className="capitalize">
							59, ram avenue, plam nut, central, usk
						</li>
					</ul>
				</div>
			</div>
      <div className='flex justify-end w-[100%] mt-[10px]'>
      <button className="bg-[#F9A61B]  flex lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] rounded-full  ">
  <ChevronUp className="m-[auto] h-[30%]"/>

  </button>
      </div>
    
			<div className={`flex flex-wrap justify-between  mt-[26px] capitalize ${styles.bottom_footer}`}>
				<p id="copyrights" className="w-[100%] md:w-[50%]">
					<span>&copy;</span>starbook 2022. all rights reserved.
				</p>
				<div className="icons flex md:my-[0] my-[25px]">
					<button className="mr-[25px]">
						<img src={Instagram} alt="" />
					</button>
					<button className="mx-[25px]">
						<img src={Linkdin} alt="" />
					</button>
					<button className="mx-[25px]">
						<img src={Facebook} alt="" />
					</button>
					<button className="ml-[25px]">
						<img src={Twitter} alt="" />
					</button>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

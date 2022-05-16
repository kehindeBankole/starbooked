import React from 'react';
import { DJS, Comedians, MCS, LiveBands, Musicians, Influencers } from '../../assets/images';
import { Link } from 'react-router-dom';
import styles from './Bookings.module.scss';
function Bookings_page() {
	const Booking_Items: { img: any; title: string; url: string }[] = [
		{
			img: LiveBands,
			title: 'live bands',
			url: 'liveband'
		},
		{
			img: DJS,
			title: 'djs',
			url: 'dj'
		},
		{
			img: Musicians,
			title: 'musicians',
			url: 'musician'
		},
		{
			img: Comedians,
			title: 'comedian',
			url: 'comedian'
		},
		{
			img: MCS,
			title: 'mcs',
			url: 'mc'
		},
		{
			img: Influencers,
			title: 'influencers',
			url: 'influencer'
		}
	];

	return (
		<section className="mt-[0px]">
			<div className="container">
				<header className="text-center uppercase  lg:text-[4rem] text-[1.5rem] md:text-[2rem] font-[700]">
					book your favourites
				</header>

				<div className="uppercase font-[700] text-center lg:text-[2.25rem] sm:text-[1.8rem] text-[1.2rem] flex flex-wrap justify-between mr-[57px] ml-[61px] mt-[105px]">
					{Booking_Items.map((item, index) => (
						<div key={index} className=" lg:w-[38%] md:w-[60%] sm:w-[70%] w-[100%] lg:m-[0] m-auto">
							<Link to={`${item.url}`}>
								<div className={`${styles.img} relative`}>
									<img className="w-[100%]" src={item.img} alt="" />
									<div
										className={`${styles.overText} absolute rounded-[15px] capitalize  overflow-hidden text-xl flex text-[white] top-[0] w-[100%] opacity-[.7]  bg-[black]`}
									>
										<p className="m-auto">
											Whether it's a private party or a corporate event, we can handle the entire
											process from booking the acts to coordinating the logistics and production.
										</p>
									</div>
								</div>
							</Link>

							<p className="mb-[125px] mt-[24px]">{item.title}</p>
						</div>
					))}
				</div>
				<div />
			</div>
		</section>
	);
}

export default Bookings_page;

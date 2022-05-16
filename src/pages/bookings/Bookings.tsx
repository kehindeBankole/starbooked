import React from 'react';
import { Explore } from '../../components';
import { ReactComponent as ChevronSmall } from '../../assets/images/small.svg';

import { Booking3, Wedding2,Coporate2,PrivateParties2,Birthday2,Celeb2,Concerts2,Fairs2} from '../../assets/images';
import { ServicesCard } from '../../utilities';
import styles from './Bookings.module.scss';
import { useNavigate } from 'react-router-dom';

const data: {
	id: number;
	title: string;
	img: any;
	text: any;
	help: any;
	keyEntertainment: any;
	moreText: any;
	moreTextHeader: any;
}[] = [
	{
		id: 1,
		title: 'Corporate Entertainment',
		text:
			'Maybe you would like a high profile musician such as Burna Boy to get your attendees out on the dance floor and create a sense of fun camaraderie. Or, maybe you’d like a comedian such as Basket Mouth to set a light and humorous tone for your evening, helping to break the ice for your attendees. Ultimately, your choice of entertainment will reflect the level of professionalism you put into planning your corporate event and—if done right—impress those in attendance beyond measure.',
		img: Coporate2,
		moreText:
			'Coming up with unique entertainment ideas for corporate events may indeed seem among the biggest challenges you’ll face in this endeavor. And that would be no surprise since it’s clear that while the right entertainment choice could make the event one of the most memorable for those in attendance, the wrong choice of entertainment could also make the event one that the attendees would rather forget. And when your company’s reputation is riding on the line, it’s crucial that you select your entertainment carefully to avoid the latter. So during our first conversation, we’ll get to know more about you, your company, your style, and the message you want to convey through your event, and together we’ll come up with the perfect options for your event.',
		moreTextHeader: 'Corporate Entertainment Ideas',
		help:
			'You might be overwhelmed with the number of options available for your entertainment, or not even know where to begin the research process. Or, perhaps you fear that your limited budget will make securing a high-profile entertainment presence nearly impossible. But none of those fears are rooted in reality. The truth is, “Star Book” has been helping corporate event organizers such like yourself narrow down entertainment ideas for corporate events and secure those choices for a long time, and we would be delighted to help do the same for you.',
		keyEntertainment:
			'Whatever your choice, Star Book can help you narrow down that list of entertainment ideas for your corporate event and then also negotiate the deal with your chosen celebrity, band, or act. In addition, if you wish, we can also provide full turnkey service for your event, overseeing every aspect of the performance and the preparations involved to make it perfect. We can handle everything from accommodations to transportation for your chosen act and crew, to backline, sound, and lighting as needed for your corporate event. That’s our turn-key service, and it will ensure that your occasion is as perfect and stress-free as possible for you and your colleagues.'
	},
	{
		id: 2,
		title: 'Private Parties',
		text:
			'Are you under the impression that it would be impossible for someone like you to secure a deal with a well-known celebrity or performer for your private event? One that you might be able to afford? If so, you’d be wrong. Regardless of your resources, Star Book has hundreds of musicians, actors, comedians, and other celebrities to choose from, and we can negotiate your deal on your behalf so that you maximize your budget and secure the most appropriate entertainment for your private event.',
		img: PrivateParties2,
		moreText:
			'Maybe you want a star appearance by a live band such as Shuga or an influencer such as Lasisielenu to impress your guests and leave a lasting impression. Or, perhaps a DJ such as DJ Cuppy to lighten the evening and set the tone? Maybe you’d like to advertise in advance so that guests know that your private event will feature some high-profile entertainment, or perhaps you’d rather keep the identity of your performer a secret for the big reveal. Either way, we can help.',
		moreTextHeader: 'Private Party Entertainment Ideas',
		help:
			'And maybe you’re not yet sure what you’re looking for when it comes to your private party’s entertainment, and that’s fine. We can also help you explore your ideas and assist in narrowing down your best options for your private event’s entertainment. We might even have some ideas you’d not yet considered, and we can help you explore new entertainment choices. Then, once we’ve pinpointed your best options, Star Book can go beyond just negotiating your deal and securing your contracts.',
		keyEntertainment:
			'If you wish, Star Book can also provide you with full turnkey service, which would allow us to handle the entire entertainment portion of your private event. This means we will oversee all aspects of your entertainer’s needs, including sound and lighting, backline equipment, flights, and accommodations. We know how overwhelming these kinds of plans can be, but our decades of experience can allow us to make this one less thing you have to worry about in planning for your private event. After all, you deserve to enjoy your private party just as much as your guests do, and we can help ensure that’s exactly what happens.'
	},
	{
		id: 3,
		title: 'Wedding Entertainment',
		text:
			'Your wedding is perhaps the single most important event in your life. This milestone experience deserves only the most carefully planned celebration, and perhaps no other aspect of your wedding or rehearsal dinner deserves more attention and consideration than your chosen entertainment for the evening. Most brides and grooms assume that securing the biggest names in film, television, and music for their wedding or rehearsal dinner is nearly impossible. But nothing could be further from the truth.',
		img: Wedding2,
		moreText:
			'Star Book has been helping couples just like you narrow down their choices for unique wedding entertainment options and then negotiate those deals on their behalf for decades. Regardless of your entertainment genre, whether you’d like a traditional musician or band, or a more unusual choice such as a comedian, we are ready to put our time-tested years of experience to work for you. With thousands of acts at our fingertips, and already well-established relationships with hundreds of agents, we can negotiate with the high-profile names that might otherwise be beyond your reach.',
		moreTextHeader: 'Wedding Entertainers',
		help:
			'We know it seems like an impossible task, to narrow down the most unique wedding entertainment option that best suits your style. But even if you’re not sure which act you’d like to hire, or which type of entertainment is best for your event, we are here to help. Contact us today, and we would be delighted to get to know more about you, your families, and your personal tastes, so that we can review our catalogue of options together. We might even have some ideas you’d not yet considered!',
		keyEntertainment:
			'Star Book can not only help you to negotiate the deal with your chosen celebrity, band, or act; we can also provide full service to oversee and handle every nuance of the entertainment portion of your evening, right down to lighting, sound, backline equipment, and transportation and accommodations for your chosen artist. No one about to celebrate such an important life event wants to deal with the details and challenges that often come with booking big name acts for performance. But we can ensure that you don’t have to - with decades of well-established relationships and connections in the business, we are committed to a full turnkey experience for both you and the artist, eliminating any stress or worry that you might have going into such an important event.'
	}
];
function Bookings() {
	const navigate = useNavigate();
	return (
		<section className={`${styles.hero}`}>
			<div className={`flex ${styles.hero_content} container justify-between`}>
				<div className=" md:w-[60%] lg:w-[38%] m-auto lg:p-[0] p-[20px] lg:ml-[61px]">
					<header className=" lg:text-[2.25rem] text-[1.8rem] md:text-[2rem]">
						bookings: djs, celebrity talent & live acts
					</header>
					<div className={`${styles.hero_text} `}>
						<p className="">
							Book world-renowned and rising music artists, DJs and celebrity talent for commercial or
							private events around the world. Our booking agents can help you bring top talent to
							audiences almost anywhere.
						</p>
						<p className="mt-[50px]">
							If you need any help, ask us. We are happy to answer any questions you have regarding our
							talent or the booking process.
						</p>
					</div>
					<button
						onClick={() => navigate('/bookings')}
						className={`${styles.btn} lg:w-[156px] lg:h-[60px] lg:block hidden w-[7rem] h-[3rem] lg:text-[1rem] text-[.8rem] uppercase`}
					>
						booking <ChevronSmall className="inline w-[7%] ml-[12px]" />
					</button>
				</div>

				<div className="lg:mr-[57px] lg:w-auto md:w-[50%] mx-auto lg:px-[0px] px-[20px] ">
					<img src={Booking3} className=" lg:h-[344px] w-[100%]" alt="" />
				</div>
			</div>

			<div className="md:mt-[180px] md:mb-[176px] my-[2rem]">
				<Explore />
			</div>
			<div>
				<div className="container md:pl-[61px]">
					<header
						className={`uppercase ${styles.header} text-[2rem] mb-[4rem] sm:text-[3rem] lg:text-[4rem] text-center`}
					>
						Our services
					</header>

					<div className="md:flex px-[20px] flex-wrap lg:justify-between justify-center">
						{data.map((item) => (
							<React.Fragment key={item.id}>
								<ServicesCard
									id={item.id}
									title={item.title}
									text={item.text}
									img={item.img}
									keyEntertainment={item.keyEntertainment}
									help={item.help}
									moreText={item.moreText}
									moreTextHeader={item.moreTextHeader}
								/>
							</React.Fragment>
						))}
					</div>

					<div className="flex sm:my-[123px] my-[2rem] lg:justify-end justify-center w-[100%] pl-[61px] pr-[57px]">
						<button
							onClick={() => {
								navigate('/services2');
								window.scroll(0, 0);
							}}
							className={`${styles.load_more} sm:w-[171px] sm:h-[60px]  rounded-[15px] uppercase sm:text-[1.125rem] text-[.8rem] h-[40px] w-[120px] font-[700]`}
						>
							load more +
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Bookings;

import React from 'react';
import { MoreCoporate,MoreBirthday,MoreConcert,MorePrivate,MoreWedding,MoreFairs,MoreCeleb } from '../../assets/images';
import { ServicesCard } from '../../utilities';
import { ReactComponent as ChevronSmall } from '../../assets/images/small.svg';

import { useNavigate, useParams } from 'react-router-dom';
import styles from './ServiceMore.module.scss';

function ServiceLearnMore() {
	const navigate = useNavigate();
const params=useParams()


	const moreData: {
		id: number;
		title: string;
		img: any;
		text:string;
	
		moreText: any;
	
	}[] = [
		{
			id: 1,
			title: 'Corporate Entertainment',

			img: MoreCoporate,
			text:
				'Maybe you would like a high profile musician such as Burna Boy to get your attendees out on the dance floor and create a sense of fun camaraderie. Or, maybe you’d like a comedian such as Basket Mouth to set a light and humorous tone for your evening, helping to break the ice for your attendees. Ultimately, your choice of entertainment will reflect the level of professionalism you put into planning your corporate event and—if done right—impress those in attendance beyond measure.',

		moreText:<>
			<div className="text-[.85rem] sm:text-[1rem]">
		<h3 className="text-[1.8rem]">Corporate Entertainers</h3>
		<br />
		<p className="text-[.8rem]">
		Maybe you would like a high profile musician such as Burna Boy to get your attendees out on the dance floor and create a sense of fun camaraderie. Or, maybe you’d like a comedian such as Basket Mouth to set a light and humorous tone for your evening, helping to break the ice for your attendees. Ultimately, your choice of entertainment will reflect the level of professionalism you put into planning your corporate event and—if done right—impress those in attendance beyond measure.,
		</p>
		<br />
		<h3 className="text-[1.8rem]">Corporate Entertainment Ideas</h3> <br />
		<p className="text-[.8rem]">
		Coming up with unique entertainment ideas for corporate events may indeed seem among the biggest challenges you’ll face in this endeavor. And that would be no surprise since it’s clear that while the right entertainment choice could make the event one of the most memorable for those in attendance, the wrong choice of entertainment could also make the event one that the attendees would rather forget. And when your company’s reputation is riding on the line, it’s crucial that you select your entertainment carefully to avoid the latter. So during our first conversation, we’ll get to know more about you, your company, your style, and the message you want to convey through your event, and together we’ll come up with the perfect options for your event.,
		</p>
		<br />
		<h3 className="text-[1.8rem]">Unsure? We Are Here to Help</h3>
		<br />
		<p className="text-[.8rem]">
		You might be overwhelmed with the number of options available for your entertainment, or not even know where to begin the research process. Or, perhaps you fear that your limited budget will make securing a high-profile entertainment presence nearly impossible. But none of those fears are rooted in reality. The truth is, “Star Book” has been helping corporate event organizers such like yourself narrow down entertainment ideas for corporate events and secure those choices for a long time, and we would be delighted to help do the same for you.,
		</p>
	</div>
		</>
			},
		{
			id: 2,
			title: 'Private Parties',
			text:
			'Are you under the impression that it would be impossible for someone like you to secure a deal with a well-known celebrity or performer for your private event? One that you might be able to afford? If so, you’d be wrong. Regardless of your resources, Star Book has hundreds of musicians, actors, comedians, and other celebrities to choose from, and we can negotiate your deal on your behalf so that you maximize your budget and secure the most appropriate entertainment for your private event.',

moreText:<>
		<div className="text-[.85rem] sm:text-[1rem]">
		<h3 className="text-[1.8rem]">Private Party Entertainers</h3>
		<br />
		<p className="text-[.8rem]">
		Are you under the impression that it would be impossible for someone like you to secure a deal with a well-known celebrity or performer for your private event? One that you might be able to afford? If so, you’d be wrong. Regardless of your resources, Star Book has hundreds of musicians, actors, comedians, and other celebrities to choose from, and we can negotiate your deal on your behalf so that you maximize your budget and secure the most appropriate entertainment for your private event.,
		</p>
		<br />
		<h3 className="text-[1.8rem]">Private Party Entertainment Ideas</h3> <br />
		<p className="text-[.8rem]">
		Maybe you want a star appearance by a live band such as Shuga or an influencer such as Lasisielenu to impress your guests and leave a lasting impression. Or, perhaps a DJ such as DJ Cuppy to lighten the evening and set the tone? Maybe you’d like to advertise in advance so that guests know that your private event will feature some high-profile entertainment, or perhaps you’d rather keep the identity of your performer a secret for the big reveal. Either way, we can help.,
		</p>
		<br />
		<h3 className="text-[1.8rem]">Unsure? We Are Here to Help</h3>
		<br />
		<p className="text-[.8rem]">
		And maybe you’re not yet sure what you’re looking for when it comes to your private party’s entertainment, and that’s fine. We can also help you explore your ideas and assist in narrowing down your best options for your private event’s entertainment. We might even have some ideas you’d not yet considered, and we can help you explore new entertainment choices. Then, once we’ve pinpointed your best options, Star Book can go beyond just negotiating your deal and securing your contracts.,
		</p>
		<br />
		<h3 className="text-[1.8rem]">Turn-Key Entertainment</h3>
		<br />
		<p className="text-[.8rem]">
		If you wish, Star Book can also provide you with full turnkey service, which would allow us to handle the entire entertainment portion of your private event. This means we will oversee all aspects of your entertainer’s needs, including sound and lighting, backline equipment, flights, and accommodations. We know how overwhelming these kinds of plans can be, but our decades of experience can allow us to make this one less thing you have to worry about in planning for your private event. After all, you deserve to enjoy your private party just as much as your guests do, and we can help ensure that’s exactly what happens.
		</p>
	</div>
	</>,


			img: MorePrivate,
		},
		{
			id: 3,
			title: 'Wedding Entertainment',
			img: MoreWedding,
			text:
				'Your wedding is perhaps the single most important event in your life. This milestone experience deserves only the most carefully planned celebration, and perhaps no other aspect of your wedding or rehearsal dinner deserves more attention and consideration than your chosen entertainment for the evening. Most brides and grooms assume that securing the biggest names in film, television, and music for their wedding or rehearsal dinner is nearly impossible. But nothing could be further from the truth.',

		moreText:<>
			<div className="text-[.85rem] sm:text-[1rem]">
		<h3 className="text-[1.8rem]">Entertainment For Weddings</h3>
		<br />
		<p className="text-[.8rem]">
		Your wedding is perhaps the single most important event in your life. This milestone experience deserves only the most carefully planned celebration, and perhaps no other aspect of your wedding or rehearsal dinner deserves more attention and consideration than your chosen entertainment for the evening. Most brides and grooms assume that securing the biggest names in film, television, and music for their wedding or rehearsal dinner is nearly impossible. But nothing could be further from the truth.,
		</p>
		<br />
		<p>Star Book can help you book entertainment for all types of wedding entertainment including:</p>
		<br />
		<ul className='list-disc ml-[2rem]'>
	 
			<li>Proposal</li> <br />
			<li>	 Engagement Party</li> <br />
			<li> Rehearsal Dinner</li> <br />
			<li>Wedding Reception</li> <br />
			<li> Wedding After Party Wedding</li>
		</ul>
		<br /> <br />
		<h3 className="text-[1.8rem]">Wedding Entertainers</h3> <br />
		<p className="text-[.8rem]">
		Star Book has been helping couples just like you narrow down their choices for unique wedding entertainment options and then negotiate those deals on their behalf for decades. Regardless of your entertainment genre, whether you’d like a traditional musician or band, or a more unusual choice such as a comedian, we are ready to put our time-tested years of experience to work for you. With thousands of acts at our fingertips, and already well-established relationships with hundreds of agents, we can negotiate with the high-profile names that might otherwise be beyond your reach.,
		</p>
		<br />
		<h3 className="text-[1.8rem]">Unsure? We Are Here to Help</h3>
		<br />
		<p className="text-[.8rem]">
		'We know it seems like an impossible task, to narrow down the most unique wedding entertainment option that best suits your style. But even if you’re not sure which act you’d like to hire, or which type of entertainment is best for your event, we are here to help. Contact us today, and we would be delighted to get to know more about you, your families, and your personal tastes, so that we can review our catalogue of options together. We might even have some ideas you’d not yet considered!',
		</p>
		<br />
		<h3 className="text-[1.8rem]">Turn-Key Entertainment</h3>
		<br />
		<p className="text-[.8rem]">
		Star Book can not only help you to negotiate the deal with your chosen celebrity, band, or act; we can also provide full service to oversee and handle every nuance of the entertainment portion of your evening, right down to lighting, sound, backline equipment, and transportation and accommodations for your chosen artist. No one about to celebrate such an important life event wants to deal with the details and challenges that often come with booking big name acts for performance. But we can ensure that you don’t have to - with decades of well-established relationships and connections in the business, we are committed to a full turnkey experience for both you and the artist, eliminating any stress or worry that you might have going into such an important event.
		</p>
	</div>
		</>
			},
		{
			id: 4,
			title: 'Birthday Party Entertainment',
			img: MoreBirthday,
			text:
			'You might be wondering how it would be possible for someone like you to arrange for not just live entertainment, but real celebrity entertainment at your surprise party.  Whatever your choice, we can help you see your desire to fruition. And, whether you want to let your attendees know in advance that your birthday party will feature one of the biggest names in entertainment, or you choose instead to surprise everyone with the identity of your chosen celebrity, your choice will ultimately be a reflection of the appreciation you have for your guest of honour and participants.',

		moreText:<>
				<div className="text-[.85rem] sm:text-[1rem]">
		<h3 className="text-[1.8rem]">Birthday Party Entertainers</h3>
		<br />
		<p className="text-[.8rem]">
		In our current high-tech world, and with greater accessibility to options, entertainment ideas for surprise parties are as unique as the people planning the parties themselves. And, of course, the entertainment at your surprise party will be what you and your guests recall for years to come, so there’s no doubt that your choice of entertainment will set the tone for this special day and let your guests know just how much you appreciate their presence. We’ve got plenty of experience in this area, so let us put that experience to work for you. We might even come up with some ideas that had not crossed your mind.,
		</p>
		<br />
		<h3 className="text-[1.8rem]">Birthday Entertainment Ideas</h3> <br />
		<p className="text-[.8rem]">
		Coming up with unique entertainment ideas for corporate events may indeed seem among the biggest challenges you’ll face in this endeavor. And that would be no surprise since it’s clear that while the right entertainment choice could make the event one of the most memorable for those in attendance, the wrong choice of entertainment could also make the event one that the attendees would rather forget. And when your company’s reputation is riding on the line, it’s crucial that you select your entertainment carefully to avoid the latter. So during our first conversation, we’ll get to know more about you, your company, your style, and the message you want to convey through your event, and together we’ll come up with the perfect options for your event.,
		</p>
		<br />
		<h3 className="text-[1.8rem]">Unsure? We Are Here to Help</h3>
		<br />
		<p className="text-[.8rem]">
		Star Book has been helping people just like you arrange for celebrity entertainment at your birthday party. No one planning a birthday party wants to deal with the details and challenges that often come with booking big-name acts. But we can ensure that you don’t have to; with our time-tested connections and personal relationships in the business, we can provide a turnkey experience for both you and your celebrity, eliminating any stress or worry that you might have going into your surprise party.,
		</p>
		<br />
		<h3 className="text-[1.8rem]">Turn-Key Entertainment</h3>
		<br />
		<p className="text-[.8rem]">
		At Star Book, we can also go beyond simply negotiating your contract and deal with your chosen celebrity—we can also provide full, turnkey service and handle everything down to transportation, hotels, and any required staging, sound, or backline equipment. If you wish, our onsite team will ensure that your milestone birthday celebration is not only flawless but worry-free and stress-free, so that you can enjoy the birthday party just as much as all the special people you invited to join you for the event.
		</p>
	</div>
		</>
			},
		{
			id: 5,
			title: 'Celebrity Appearances',
		
			img: MoreCeleb,
			text:
			'Booking a celebrity will be a certain way to ensure that your event stands out from the rest. But are you under the impression that it would be impossible for someone like you to secure a deal with a well-known celebrity or performer for your event? If so, you’d be wrong. Star Book has well-established relationships with hundreds of celebrities, and so booking a celebrity appearance may actually be easiest part of the planning process for your occasion. In fact, Star Book has been helping people just like you secure some of the biggest names in music, television, and film for parties for a long time, and we can easily negotiate the deal on your behalf so that you maximize your budget and secure the most appropriate celebrity appearance for your event.',


	moreText:<>
	<div className="text-[.85rem] sm:text-[1rem]">
		<h3 className="text-[1.8rem]">Celebrity Entertainers</h3>
		<br />
		<p className="text-[.8rem]">
		Booking a celebrity will be a certain way to ensure that your event stands out from the rest. But are you under the impression that it would be impossible for someone like you to secure a deal with a well-known celebrity or performer for your event? If so, you’d be wrong. Star Book has well-established relationships with hundreds of celebrities, and so booking a celebrity appearance may actually be easiest part of the planning process for your occasion. In fact, Star Book has been helping people just like you secure some of the biggest names in music, television, and film for parties for a long time, and we can easily negotiate the deal on your behalf so that you maximize your budget and secure the most appropriate celebrity appearance for your event.,
		</p>
		<br />
		<h3 className="text-[1.8rem]">Celebrity Appearance Ideas</h3> <br />
		<p className="text-[.8rem]">
		Maybe you want a star appearance by a public figure such as Falz to leave a lasting impression. Or, Maybe you’d like to keep the identity of your celebrity a secret for the big reveal at the event, or perhaps you’d like to share with your guests in advance to build anticipation. Whatever your choice, we can help you see your desire to fruition.,
		</p>
		<br />
		<h3 className="text-[1.8rem]">Unsure? We Are Here to Help</h3>
		<br />
		<p className="text-[.8rem]">
		And maybe you’re not yet sure what celebrity would be best for the purpose and tone of your event, and that’s where we can help even further. We can assist in exploring your ideas and narrowing down the best options for your event’s entertainment. We might even have some names you’d not yet considered that might best suit your needs and budget. Regardless, once,
		</p>
		<br />
		<h3 className="text-[1.8rem]">Turn-Key Entertainment</h3>
		<br />
		<p className="text-[.8rem]">
		And, if you wish, Star Book can also provide you with full turnkey service, which would shift the responsibility for the entertainment portion of your event to our expert staff. This means we can take care of all your celebrity’s needs, from travel and accommodations to any lighting, sound, or backline required for his or her appearance. We know how overwhelming event plans can be, but our professional staff and well-established relationships can allow us to make this one less thing you have to worry at your event.
		</p>
	</div>
	</>
			},
		{
			id: 6,
			title: 'Public Concerts',
			img: MoreConcert,	
			text:
			'Headliners and Celebrity Entertainment for Fairs & Music Festivals Perhaps you’re early into the planning phase, and you’re trying to hire not only a world class headlining band for your music festival but also multiple acts to perform throughout the day. Maybe your festival is just one day, the line-up is nearly finished, and you just need to secure that headlining band. Or, perhaps your festival is multiple days with multiple stages, and you’re looking for some fairly big names to round out the line-up and appeal to a variety of tastes.Regardless of where you are in your decision-making process, Star Book has a massive catalogue of performers to choose from, as well as the already established entertainment industry relationship with their agents.',

				moreText:<>
				<div className="text-[.85rem] sm:text-[1rem]">
					<h3 className="text-[1.8rem]"> Headliners and Celebrity Entertainment for Fairs & Music Festivals</h3>
					<br />
					<p className="text-[.8rem]">
					Perhaps you’re early into the planning phase, and you’re trying to hire not only a world class headlining band for your music festival but also multiple acts to perform throughout the day. Maybe your festival is just one day, the line-up is nearly finished, and you just need to secure that headlining band. Or, perhaps your festival is multiple days with multiple stages, and you’re looking for some fairly big names to round out the line-up and appeal to a variety of tastes. Regardless of where you are in your decision-making process, Star Book has a massive catalogue of performers to choose from, as well as the already established entertainment industry relationship with their agents.					</p>
					<br />
					
					<h3 className="text-[1.8rem]">Unsure? We Are Here to Help</h3>
					<br />
					<p className="text-[.8rem]">
					'And maybe you’re not sure who you are looking for, and that’s okay, too. During our first contact, we’ll get to know more about you, your festival, your style, and your budget. Our live music booking agents with decades of experience helping festival and fair organizers just like you will help us to brainstorm ideas; you might even find that we have some ideas that had not yet crossed your mind. And then, when you’re ready, we can move forward to negotiating your contracts for the best rate possible, saving you up to twenty percent in costs in the process.',
					</p>
					<br />
					<h3 className="text-[1.8rem]">Turn-Key Entertainment</h3>
					<br />
					<p className="text-[.8rem]">
					'Once we’ve negotiated the best deal for you, if you wish, Star Book can also provide turnkey service for your headlining band or whatever bands we’ve helped to secure for you, ensuring a flawless and stress-free performance that will give you peace of mind. We can handle everything from transportation and accommodations for your chosen acts and crew members, to lighting, sound, and backline equipment as needed. With the overwhelming responsibilities that come with overseeing an entire music festival, having a few responsibilities taken off your plate will ensure a smooth, perfectly executed event from start to finish. Let us ensure that your event is the success you are hoping it will be.'
					</p>
				</div>
				</>
			},
		{
			id: 7,
			title: 'Fairs, Carnivals, and Festivals',
		
			img: MoreFairs,

			text:
			'Headliners and Celebrity Entertainment for Fairs & Music Festivals Perhaps you’re early into the planning phase, and you’re trying to hire not only a world class headlining band for your music festival but also multiple acts to perform throughout the day. Maybe your festival is just one day, the line-up is nearly finished, and you just need to secure that headlining band. Or, perhaps your festival is multiple days with multiple stages, and you’re looking for some fairly big names to round out the line-up and appeal to a variety of tastes.Regardless of where you are in your decision-making process, Star Book has a massive catalogue of performers to choose from, as well as the already established entertainment industry relationship with their agents.',

				moreText:<>
				<div className="text-[.85rem] sm:text-[1rem]">
					<h3 className="text-[1.8rem]"> Headliners and Celebrity Entertainment for Fairs & Music Festivals</h3>
					<br />
					<p className="text-[.8rem]">
					Perhaps you’re early into the planning phase, and you’re trying to hire not only a world class headlining band for your music festival but also multiple acts to perform throughout the day. Maybe your festival is just one day, the line-up is nearly finished, and you just need to secure that headlining band. Or, perhaps your festival is multiple days with multiple stages, and you’re looking for some fairly big names to round out the line-up and appeal to a variety of tastes. Regardless of where you are in your decision-making process, Star Book has a massive catalogue of performers to choose from, as well as the already established entertainment industry relationship with their agents.					</p>
					<br />
					
					<h3 className="text-[1.8rem]">Unsure? We Are Here to Help</h3>
					<br />
					<p className="text-[.8rem]">
					'And maybe you’re not sure who you are looking for, and that’s okay, too. During our first contact, we’ll get to know more about you, your festival, your style, and your budget. Our live music booking agents with decades of experience helping festival and fair organizers just like you will help us to brainstorm ideas; you might even find that we have some ideas that had not yet crossed your mind. And then, when you’re ready, we can move forward to negotiating your contracts for the best rate possible, saving you up to twenty percent in costs in the process.',
					</p>
					<br />
					<h3 className="text-[1.8rem]">Turn-Key Entertainment</h3>
					<br />
					<p className="text-[.8rem]">
					'Once we’ve negotiated the best deal for you, if you wish, Star Book can also provide turnkey service for your headlining band or whatever bands we’ve helped to secure for you, ensuring a flawless and stress-free performance that will give you peace of mind. We can handle everything from transportation and accommodations for your chosen acts and crew members, to lighting, sound, and backline equipment as needed. With the overwhelming responsibilities that come with overseeing an entire music festival, having a few responsibilities taken off your plate will ensure a smooth, perfectly executed event from start to finish. Let us ensure that your event is the success you are hoping it will be.'
					</p>
				</div>
				</>
			}
	];
	console.log(params.id===moreData[2].title)

	return (
		<div className="container  md:pl-[61px] md:pr-[57px] px-[20px]">
			<div className={` md:p-[0] flex flex-wrap justify-between   sm:mt-[105px] mt-[20px] `}>

{moreData.map(item=>item.title===params.id&&(<>
	<div className="lg:w-[42%] sm:w-[80%] mx-auto lg:m-[0]">
	<h2 className="mb-[41px] font-[700] md:text-[2.25rem] sm:text-[1.5rem] md:text-left  uppercase">
	{item.title}
	</h2>
	<br />
{item.moreText}
</div>
			<div className="relative  mx-auto lg:mx-[0]">
			<img src={item.img} className="mx-auto my-[40px] lg:m-[0]" alt="band info" />
		
			<div className="flex mt-[2rem]  lg:justify-end justify-center w-[100%] ">
				<button
					onClick={() => {
						navigate('/services2');
						window.scroll(0, 0);
					}}
					className={`${styles.load_more} sm:w-[171px] sm:h-[60px]  rounded-[15px] uppercase sm:text-[1.125rem] text-[.8rem] h-[40px] w-[120px] font-[700]`}
				>
					booking <ChevronSmall className="inline ml-[1rem]" />
				</button>
			</div>
		</div>
		</>
))}


				

	
			
			</div>

			<div className="md:mt-[13.313rem] mt-[5rem]">
				<div className="md:flex  items-start flex-wrap lg:justify-between justify-center  ">
					{params.id==="Wedding Entertainment"&&[moreData[3],moreData[4],moreData[6]].map((item: any) => (
						<React.Fragment key={item.id}>
							<ServicesCard
								id={item.id}
								title={item.title}
								text={item.text}
								img={item.img}
							
							/>
						</React.Fragment>
					))}

{params.id==="Public Concerts"&&[moreData[6],moreData[5],moreData[2]].map((item: any) => (
						<React.Fragment key={item.id}>
							<ServicesCard
								id={item.id}
								title={item.title}
								text={item.text}
								img={item.img}
							
							/>
						</React.Fragment>
					))}

{params.id==="Private Parties"&&[moreData[2],moreData[3],moreData[6]].map((item: any) => (
						<React.Fragment key={item.id}>
							<ServicesCard
								id={item.id}
								title={item.title}
								text={item.text}
								img={item.img}
							
							/>
						</React.Fragment>
					))}

{params.id==="Celebrity Appearances"&&[moreData[5],moreData[6],moreData[2]].map((item: any) => (
						<React.Fragment key={item.id}>
							<ServicesCard
								id={item.id}
								title={item.title}
								text={item.text}
								img={item.img}
							
							/>
						</React.Fragment>
					))}

{params.id==="Fairs, Carnivals, and Festivals"&&[moreData[5],moreData[2],moreData[0]].map((item: any) => (
						<React.Fragment key={item.id}>
							<ServicesCard
								id={item.id}
								title={item.title}
								text={item.text}
								img={item.img}
							
							/>
						</React.Fragment>
					))}

{params.id==="Birthday Party Entertainment"&&[moreData[4],moreData[5],moreData[6]].map((item: any) => (
						<React.Fragment key={item.id}>
							<ServicesCard
								id={item.id}
								title={item.title}
								text={item.text}
								img={item.img}
							
							/>
						</React.Fragment>
					))}
{params.id==="Corporate Entertainment"&&[moreData[1],moreData[2],moreData[6]].map((item: any) => (
						<React.Fragment key={item.id}>
							<ServicesCard
								id={item.id}
								title={item.title}
								text={item.text}
								img={item.img}
							
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
	);
}

export default ServiceLearnMore;

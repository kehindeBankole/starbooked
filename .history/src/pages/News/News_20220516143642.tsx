import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { News as NewsPic, Cheers } from '../../assets/images';
import { two, four, five, viewingLappy, Piano, Chairs } from '../../assets/images';

import styles from './News.module.scss';
import { NewsGallery, BannerSlider, Booking } from '../../components';
import { Button } from '../../utilities';
function News() {



	const [ news, setNews ]: any = useState([]);

	useEffect(() => {
		const gettingData = async () => {
			const getFetchedData = await fetchingData();
			setNews(getFetchedData);
		};
		gettingData();
	}, []);

	const fetchingData=async()=>{
		const res=await fetch(`https://gnews.io/api/v4/search?q=entertainment&token=${process.env.REACT_APP_API_KEY_NEWS}&lang=en&country=ng`)
	const data=await res.json()
	
	
return data
	}
	
	fetchingData()

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
	const navigate = useNavigate();

	return (
		<section className={`${styles.News} mt-[px]`}>
			<div className={`${styles.banner} container`}>
				<header className="text-center  lg:text-[4rem] sm:mb-[3.75rem] mb-[1rem] text-[1.5rem] md:text-[2rem]">
					Gallery
				</header>
				<BannerSlider bookBtn={false} img1={Cheers} sliderInfo={sliderInfo} />
			</div>

			<div className="sm:mb-[166px] sm:mt-[8.438rem]">
				<div className="container lg:p-[0] p-[20px] ">
					<header className="text-center  lg:text-[4rem] text-[1.5rem] md:text-[2rem]">Lastest news</header>
					<div className="flex items flex-wrap mb-[166px] mt-[61px] justify-between">
						<div className="lg:ml-[61px] lg:w-[38%] mx-auto md:w-[50%] w-auto ">
							<img
								src={news.articles ? news.articles[0].image : 'no news'}
								className="mx-auto md:w-[100%] sm:w-[75%] w-[100%]"
								alt=""
							/>
						</div>

						<div className="lg:w-[39%]  sm:w-[60%] mx-auto lg:mr-[57px]">
							<p className={`${styles.lat_news} capitalize`}>latest news</p>

							<header className={`${styles.headline} text-[1rem] lg:text-[2.25rem]`}>
								{news.articles ? news.articles[0].title : 'no news'}
							</header>

							<div className="lg:pr-[140px]">
								{news.articles ? news.articles[0].description : 'no news'}
							</div>
							<button className={`${styles.full_story} capitalize mt-[35px]`}>
								{' '}
								<a href={news.articles ? news.articles[0].url : '#'}>full story</a>{' '}
							</button>
						</div>
					</div>

					<div className="flex flex-wrap justify-center">
						{news.articles ? (
							news.articles.map((item: any, index: any) => (
								<NewsGallery
									key={index}
									date={item.publishedAt}
									articleLink={item.url}
									image={item.image}
									description={item.description}
									title={item.title}
								/>
							))
						) : (
							'no news'
						)}
					</div>

					<div
						className={`${styles.load_more} flex sm:my-[123px] my-[2rem] justify-center w-[100%] pl-[61px] pr-[57px]`}
					>
						<button
							onClick={() => {
								navigate('');
								window.scroll(0, 0);
							}}
							className={`${styles.load_more} sm:w-[171px] sm:h-[60px]  rounded-[15px] uppercase sm:text-[1.125rem] text-[.8rem] h-[40px] w-[120px] font-[700]`}
						>
							load more +
						</button>
					</div>
				</div>
			</div>

			<Booking
				title="be the first to know"
				subtitle="Sign up to get exclusive information about our new signings, rosters and labels. We only send you information that you tell us is relevant, and won’t share your email with anyone else."
			/>
		</section>
	);
}

export default News;

import React from 'react';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
const Handles=[{
	icons:<Instagram/>,
	url:"https://www.instagram.com",
title:"instagram"},
{
	icons:<LinkedIn/>,
	url:"https://www.linkedin.com",
title:"linkedin"},
{
	icons:<Facebook/>,
	url:"https://www.facebook.com",
title:"facebook"}
,
{
	icons:<Twitter/>,
	url:"https://www.twitter.com",
title:"twitter"}
]
function Contact() {
	return (
		<section className="container md:pl-[61px] md:pr-[57px]">
			<div>
				<header className='text-center  lg:text-[3rem] text-[2rem]  font-bold uppercase '> contact us</header>

<div className='md:flex justify-between my-[4rem]'>
	
	<div className='w-[300px] flex flex-col h-[200px]  text-center  m-auto'>
		<div className='m-auto md:m-[0]'>
		<header className='text-2xl font-bold capitalize text-3xl'>phone</header>
		<p className='font-bold'>You can call us on: </p>
<p>07459649070</p>
or <br />
<p>08143291757</p>
		</div>
	</div>

	<div className='w-[300px] flex flex-col h-[200px]  text-center  m-auto'>
		<div className='m-auto md:m-[0]'>
		<header className='text-2xl font-bold capitalize text-3xl'>Email</header>
		<p className='font-bold capitalize'>send a message: </p>
<p className='capitalize'>for general enquiry: </p> <a href="mailto:info@starbook.ng">info@starbook.ng</a>
<p>or</p>
<p className="capitalize">for bookings: </p> <a href="mailto:booking@starbook.ng">booking@starbook.ng</a>
		</div>
	</div>


	<div className='w-[300px] flex flex-col h-[200px]  text-center  m-auto'>
		<div className='m-auto md:m-[0]'>
		<header className='text-2xl font-bold capitalize text-3xl'>our handles</header>
		<div className='flex justify-between mt-[1rem]'>
{Handles.map((item,index)=>(
		<div key={index} className='mx-[.5rem]'>
		<a className={`text-2xl ${item.title==="instagram"?"text-[#e95950]":"text-[blue]"}`} href={item.url} target="_blank">
		{item.icons}

		</a>
	<p className='text-[.8rem] font-bold'>{}</p>	
	</div>
))}

		
		</div>
<div>

</div>
		</div>
	</div>


	<div>
			
	</div>

	

</div>
			</div>
		</section>
	);
}

export default Contact;

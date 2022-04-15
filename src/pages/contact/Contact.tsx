import React from 'react';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
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
			<div className='mx-[.5rem]'>
				<a href='#'>
				<Instagram className="text-2xl"/>

				</a>
			<p className='text-[.8rem] font-bold'>Instagram</p>	
			</div>

			<div className='mx-[.5rem]'>
				<a href="#"><LinkedIn className="text-2xl"/></a>
			<p className='text-[.8rem] font-bold'>LinkedIn</p>	
			</div>

			<div className='mx-[.5rem]'>
				<a href="#"><Facebook className="text-2xl"/></a>
			<p className='text-[.8rem] font-bold'>Facebook</p>	
			</div>

			<div className='mx-[.5rem]'>
				<a href="#"><Twitter className="text-2xl"/></a>
			<p className='text-[.8rem] font-bold'>Twitter</p>	
			</div>
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

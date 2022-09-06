import React from 'react';

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/pagination';

import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import './Testimonials.css';

const data = [
	{
		avatar: AVTR1,
		name: 'Tina Shaw',
		review:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quas commodi cumque cum architecto tenetur delectus incidunt ipsa. Voluptate, voluptates debitis vitae vero id nobis sapiente aut labore reiciendis dicta.'
	},
	{
		avatar: AVTR2,
		name: 'John Smith',
		review:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, laboriosam labore officia quae nesciunt aliquid neque, voluptates velit ab in incidunt voluptatem maiores corporis numquam ratione rem sint non ut?'
	},
	{
		avatar: AVTR3,
		name: 'Kwame Despite',
		review:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, voluptate! Expedita laudantium porro iste perspiciatis atque tenetur aspernatur numquam. Esse qui excepturi amet et laborum rerum iure neque enim mollitia!'
	},
	{
		avatar: AVTR4,
		name: 'Ama McBrown',
		review:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perspiciatis modi, cumque doloremque culpa accusantium architecto commodi recusandae, distinctio perferendis possimus reiciendis! Doloremque nihil impedit sed autem nobis quas rerum?'
	}
];

const Testimonials = () => {
	return (
		<section id='testimonials'>
			<h5>Review from Clients</h5>
			<h2>Testimonials</h2>
			<Swiper
				className='container testimonials__container'
				// install Swiper modules
				modules={[Navigation, Pagination]}
				navigation
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{data.map(({ avatar, name, review }, index) => {
					return (
						<SwiperSlide key={index} className='testimonial'>
							<div className='client__avatar'>
								<img src={avatar} alt='Avatar-1' />
							</div>
							<h5 className='client__name'>{name}</h5>
							<small className='client__review'>{review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;

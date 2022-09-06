import React from 'react';
import { BiCheck } from 'react-icons/bi';
import './Services.css';

const Services = () => {
	return (
		<section id='services'>
			<h5>What I Offer</h5>
			<h2>Services</h2>
			<div className='container services__container'>
				{/* UI/UX Design */}
				<article className='service'>
					<div className='service__head'>
						<h3>UI/UX Design</h3>
					</div>
					<ul className='service__list'>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
					</ul>
				</article>
				{/* Web Development */}
				<article className='service'>
					<div className='service__head'>
						<h3>Web Development</h3>
					</div>
					<ul className='service__list'>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
					</ul>
				</article>
				{/* End of Web Development */}
				<article className='service'>
					<div className='service__head'>
						<h3>Content creation</h3>
					</div>
					<ul className='service__list'>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
					</ul>
				</article>
				{/* End of Content Creation */}
			</div>
		</section>
	);
};

export default Services;

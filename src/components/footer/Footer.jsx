import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

import './Footer.css';

const Footer = () => {
	return (
		<footer id='footer'>
			Site made with 💖 by{' '}
			<a href='/' className='footer-logo'>
				Catevika.
			</a>
			<ul className='permalinks'>
				<li>
					<a href='/'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#experience'>Experience</a>
				</li>
				<li>
					<a href='#services'>Services</a>
				</li>
				<li>
					<a href='#portfolio'>Portfolio</a>
				</li>
				<li>
					<a href='#testimonials'>Testimonials</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>
			<div className='footer__socials'>
				<a
					href='https://facebook.com/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaFacebookF className='footer__socials-icon' />
				</a>
				<a
					href='https://instagram.com/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FiInstagram className='footer__socials-icon' />
				</a>
				<a
					href='https://twitter.com/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<IoLogoTwitter className='footer__socials-icon' />
				</a>
			</div>
			<div className='footer__copyright'>
				<small>&copy; EGATOR Tutorials - All rights reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;

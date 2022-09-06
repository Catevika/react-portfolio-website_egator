import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm(
			'service_c4qhhn8',
			'template_oe13wt5',
			form.current,
			'b8TCfT2FU9ipqwitU'
		);
		e.target.reset();
	};

	return (
		<section id='contact'>
			<h5>Get in Touch</h5>
			<h2>Contact Me</h2>
			<div className='container contact__container'>
				<div className='contact__options'>
					{/* END OF CONTACT OPTIONS */}
					<article className='contact__option'>
						<MdOutlineEmail className='contact__option-icon' />
						<h4>Email</h4>
						<h5>catevika.test@gmail.com</h5>
						<a
							href='mailto:catevika.test@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							Send a message
						</a>
					</article>
					<article className='contact__option'>
						<RiMessengerLine className='contact__option-icon' />
						<h4>Messenger</h4>
						<h5>Catevika</h5>
						<a
							href='https://m.me/catevika'
							target='_blank'
							rel='noopener noreferrer'
						>
							Send a message
						</a>
					</article>
					<article className='contact__option'>
						<BsWhatsapp className='contact__option-icon' />
						<h4>Whatsapp</h4>
						<h5>0123456789</h5>
						<a
							href='https://api.whatsapp.com/send?phone=0123456789'
							target='_blank'
							rel='noopener noreferrer'
						>
							Send a message
						</a>
					</article>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<input
						type='text'
						name='name'
						placeholder='Your Full Name'
						required
					/>
					<input
						type='text'
						name='subject'
						placeholder='The subject of your email'
					/>
					<input type='email' name='email' placeholder='Your Email' required />
					<textarea
						name='message'
						rows='3'
						placeholder='Your message'
						required
					></textarea>
					<button type='submit' className='btn btn-primary'>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;

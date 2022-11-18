import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const Contact = () => {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [errorMessage, setErrorMessage] = useState('');

	const { name, email, message } = formState;

	const handleChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		// validate email address
		if (!validateEmail(formState.email)) {
			setErrorMessage('Please enter a valid email address');
			alert(errorMessage);
			return;
		}
		alert(JSON.stringify(formState));
		setErrorMessage('');
		setFormState({ name: '', email: '', message: '' });
	};

	return (
		<section>
			{errorMessage && <div>{errorMessage}</div>}
			<h1>Contact Me</h1>
			<form id='contact-form' onSubmit={handleSubmit}>
				<div>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						name='name'
						required
						value={name}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='email'>Email address:</label>
					<input
						type='email'
						name='email'
						required
						value={email}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='message'>Message:</label>
					<textarea
						name='message'
						rows='5'
						required
						value={message}
						onChange={handleChange}
					/>
				</div>
				<button type='submit'>Submit</button>
			</form>
		</section>
	);
};

export default Contact;

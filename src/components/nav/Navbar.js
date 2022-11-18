import React from 'react';

const Navbar = () => {
	const categories = [
		{
			name: 'commercial',
			description:
				'Photos of grocery stores, food trucks, and other commercial projects',
		},
		{ name: 'portraits', description: 'Portraits of people in my life' },
		{ name: 'food', description: 'Delicious delicacies' },
		{
			name: 'landscape',
			description: 'Fields, farmhouses, waterfalls, and the beauty of nature',
		},
	];

	const categoryList = categories.map((category) => (
		<li key={category.name} className='mx-1'>
			<span
				onClick={() => {
					categorySelected(category.name);
				}}
			>
				{category.name}
			</span>
		</li>
	));

	const categorySelected = (name) => {
		console.log(`${name} clicked`);
	};

	return (
		<header data-testid='header' className='flex-row px-1'>
			<h2>
				<a href='/'>
					<span role='img' aria-label='camera'>
						📸
					</span>
					Oh Snap!
				</a>
			</h2>
			<nav>
				<ul className='flex-row'>
					<li className='mx-2'>
						<a href='#about'>About me</a>
					</li>
					<li>
						<span>Contact</span>
					</li>
					{categoryList}
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
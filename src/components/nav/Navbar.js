import { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

const Navbar = ({ categories = [], setCurrentCategory, currentCategory }) => {
	useEffect(() => {
		document.title = capitalizeFirstLetter(currentCategory.name);
	}, [currentCategory]);

	const categoryList = categories.map((category) => (
		<li
			key={category.name}
			className={`mx-1 ${
				currentCategory.name === category.name ? 'navActive' : ''
			}`}
		>
			<span
				onClick={() => {
					categorySelected(category.name);
				}}
			>
				{capitalizeFirstLetter(category.name)}
			</span>
		</li>
	));

	const categorySelected = (name) => {
		// find the index of the category that matches the name
		const categoryIndex = categories.findIndex(
			(category) => category.name === name
		);
		setCurrentCategory(categories[categoryIndex]);
	};

	console.log(currentCategory);

	return (
		<header data-testid='header' className='flex-row px-1'>
			<h2>
				<a data-testid='link' href='/'>
					<span role='img' aria-label='camera'>
						📸
					</span>
					Oh Snap!
				</a>
			</h2>
			<nav>
				<ul className='flex-row'>
					<li className='mx-2'>
						<a data-testid='about' href='#about'>
							About me
						</a>
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

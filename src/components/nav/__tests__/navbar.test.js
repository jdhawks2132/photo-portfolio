/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../Navbar';

const categories = [
	{ name: 'portraits', description: 'Portraits of people in my life' },
];
const currentCategory = {
	name: 'portraits',
	description: 'Portraits of people in my life',
};
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('<Navbar/>', () => {
	it('renders', () => {
		render(
			<Navbar
				categories={categories}
				setCurrentCategory={mockSetCurrentCategory}
				currentCategory={currentCategory}
			/>
		);
	});

	it('matches snapshot DOM node structure', () => {
		const { asFragment } = render(
			<Navbar
				categories={categories}
				setCurrentCategory={mockSetCurrentCategory}
				currentCategory={currentCategory}
			/>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

describe('emoji is visible', () => {
	it('inserts emoji into the h2', () => {
		const { getByLabelText } = render(
			<Navbar
				categories={categories}
				setCurrentCategory={mockSetCurrentCategory}
				currentCategory={currentCategory}
			/>
		);
		expect(getByLabelText('camera')).toHaveTextContent('📸');
	});
});

describe('links are visible', () => {
	it('inserts text into the links', () => {
		const { getByTestId } = render(
			<Navbar
				categories={categories}
				setCurrentCategory={mockSetCurrentCategory}
				currentCategory={currentCategory}
			/>
		);
		expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
		expect(getByTestId('about')).toHaveTextContent('About me');
	});
});

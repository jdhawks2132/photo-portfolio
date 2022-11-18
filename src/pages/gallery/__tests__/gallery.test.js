/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from '../Gallery';

afterEach(cleanup);

const portrait = {
	name: 'portraits',
	description: 'Portraits of people in my life',
};

describe('Gallery', () => {
	it('renders', () => {
		render(<Gallery currentCategory={portrait} />);
	});

	it('matches snapshot DOM node structure', () => {
		const { asFragment } = render(<Gallery currentCategory={portrait} />);
		expect(asFragment()).toMatchSnapshot();
	});

	it('renders h1', () => {
		const { getByTestId } = render(<Gallery currentCategory={portrait} />);
		expect(getByTestId('h1tag')).toHaveTextContent('Portraits');
	});
});

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoList from '../PhotoList';

afterEach(cleanup);

describe('PhotoList', () => {
	it('renders', () => {
		render(<PhotoList />);
	});

	it('matches snapshot DOM node structure', () => {
		const { asFragment } = render(<PhotoList />);
		expect(asFragment()).toMatchSnapshot();
	});
});

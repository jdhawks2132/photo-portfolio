import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../../components/photolist/PhotoList';

function Gallery({ currentCategory }) {
	return (
		<section>
			<h1 data-testid='h1tag'>{capitalizeFirstLetter(currentCategory.name)}</h1>
			<p>{currentCategory.description}</p>
			<div className='flex-row'>
				<PhotoList category={currentCategory.name} />
			</div>
		</section>
	);
}
export default Gallery;

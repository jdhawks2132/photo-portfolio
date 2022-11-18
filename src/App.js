import { useState } from 'react';
// import pages
import About from './pages/about/About';
import Gallery from './pages/gallery/Gallery';
import Contact from './pages/contact/Contact';

// import components
import Navbar from './components/nav/Navbar';

function App() {
	const [categories] = useState([
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
	]);

	const [currentCategory, setCurrentCategory] = useState(categories[0]);

	return (
		<div>
			<Navbar
				categories={categories}
				currentCategory={currentCategory}
				setCurrentCategory={setCurrentCategory}
			/>
			<main>
				<Gallery currentCategory={currentCategory} />
				<About />
				<Contact />
			</main>
		</div>
	);
}

export default App;

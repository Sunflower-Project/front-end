import React from 'react';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
	return (
		<div>
			<header>
				<Header />
			</header>
			<main>
				<Home />
				<Footer />
			</main>
		</div>
	);
};

export default App;

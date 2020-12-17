import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Items from './components/Items/Items';


import Footer from './components/Footer/Footer';


import ItemDetail from './components/Items/ItemDetail/ItemDetail';
import { Route } from 'react-router-dom';
import './App.css';

const App = () => {
	return (
		<div>
			<header>
				<Header />
			</header>
			<main>
				<Route path='/' exact component={Home} />
				<Route path='/browse' component={Items} />
				<Route
					path='/item/:id'
					render={(routerProps) => {
						return <ItemDetail match={routerProps.match} />;
					}}
				/>
				<Footer />
			</main>
		</div>
	);
};

export default App;

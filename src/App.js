import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Items from './components/Items/Items';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import UserProfile from './components/UserProfile/UserProfile';
import UpItemDetail from './components/UpItemDetail/UpItemDetail';
import ItemDetail from './components/ItemDetail/ItemDetail';
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
				<Route path='/login' component={Login} />
				<Route path='/signup' component={SignUp} />
				<Route path='/userprofile' component={UserProfile} />
				<Route path='/upitemdetail' component={UpItemDetail} />
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

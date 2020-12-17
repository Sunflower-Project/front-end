import React from 'react';
import { Link } from 'react-router-dom';
import Navbars from '../Navbars/Navbars';
import './Header.css';

const Header = () => {
	return (
		<div>
			<header>
				<span>
					<Link to='/'>
						<h1 className='header-title'>Sunflower</h1>
					</Link>
					<p className='header-title-p'>"Turning trash into treasure."</p>
				</span>
				<nav>
					<Navbars />
				</nav>
			</header>
		</div>
	);
};

export default Header;

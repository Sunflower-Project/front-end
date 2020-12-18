import React from 'react';
import Navbars from '../Navbars/Navbars';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<div>
			<header>
				<span className='header-span'>
					<div className='logo-div'>
						<img
							className='logo'
							src='/carousel-images/Sunflowerlogo.png'
							alt=''
						/>
					</div>
					<div>
						<Link to='/'>
							<h1 className='header-title'>Sunflower</h1>
						</Link>
							<p className='header-title-p'>"Turning trash into treasure."</p>
					</div>
				</span>
				<nav>
					<Navbars />
				</nav>
			</header>
		</div>
	);
};

export default Header;

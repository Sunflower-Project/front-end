import React from 'react';
import Navbar from '../Navbar/Navbar.js'
import './Header.css'

const Header = () => {
    return (
			<div>
				<header>
					<span>
						<h1 className='header-title'>Sunflower</h1>
						<p className='header-title-p'>"Turning trash into treasure."</p>
					</span>
					<nav>
						<Navbar />
					</nav>
				</header>
			</div>
		);
};

export default Header;
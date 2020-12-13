import React from 'react';
import Navbars from '../Navbars/Navbars'
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
						<Navbars />
					</nav>
				</header>
			</div>
		);
};

export default Header;
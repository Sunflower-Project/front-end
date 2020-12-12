import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
			<div>
				<header>
					<div>
						<h1 className='header-title'>Sunflower</h1>
					</div>
					<nav>
						<ul>
							<Link to='/about'>
								<li>About</li>
							</Link>
							<li>Categories</li>
							<li>Get Started</li>
						</ul>
					</nav>
				</header>
			</div>
		);
};

export default Header;
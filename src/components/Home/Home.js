import React from 'react';
import HomeCarousel from '../HomeCarousel/HomeCarousel'
import './Home.css'

const Home = () => {
    return (
        <body className='home-body'>
			<section className='home-container'>
				<div className='left-half'>
					<article>
						<h2>Left Half</h2>
					</article>
				</div>
				<div className='right-half'>
					<article>
						<HomeCarousel />
					</article>
				</div>
			</section>
        </body>
		);
};

export default Home;
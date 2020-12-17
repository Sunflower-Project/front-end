import React from 'react';
import HomeCarousel from '../HomeCarousel/HomeCarousel'
import './Home.css'

const Home = () => {
    return (
        <div className='home-body'>
			<section className='home-container'>
				<div className='left-half'>
					<article>
						<h2>Welcome to Sunflower!</h2>
					</article>
					<article>
						<p>A platform designed to allow communities to recycle their goods in an effort to be remade into works of art.</p>
					</article>
				</div>
				<div className='right-half'>
					<article>
						<HomeCarousel />
					</article>
				</div>
			</section>
        </div>
		);
};

export default Home;
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HomeCarousel = () => {
    return (
			<div>
				<Carousel style={{ width: '100%', height: '100%' }}>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='/carousel-images/pexels-anete-lusina-4792668.jpg'
							alt='First slide'
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='/carousel-images/pexels-cottonbro-3661264.jpg'
							alt='Second slide'
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='/carousel-images/pexels-daria-sannikova-2927582.jpg'
							alt='Third slide'
						/>
					</Carousel.Item>
				</Carousel>
			</div>
		);
};

export default HomeCarousel;
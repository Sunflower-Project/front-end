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
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='/carousel-images/pexels-cottonbro-3661264.jpg'
							alt='Second slide'
						/>

						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='/carousel-images/pexels-daria-sannikova-2927582.jpg'
							alt='Third slide'
						/>

						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		);
};

export default HomeCarousel;
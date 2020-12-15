import React from 'react';
import { Link } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
	return (
		<div className='body-div'>
			<div className='profile-info'>
				<div className='bio-block'>
					<h2 className='name'>Gabriel Pompa</h2>
					<div>
						<h3>Quote</h3>
						<p>"I am the Hurricane" - Gabriel Pompa</p>
						<h3>Bio</h3>
						<p>This is my bio. Sunflower is really awesome!</p>
						<div>
							<h3>Contact Me</h3>
							{/* Use this block for contact info... Icons: FB, Twitter, LinkedIn, Pintrest, etc. */}
						</div>
					</div>
				</div>
				<div className='picture-div'>
					<img
						className='profile-picture'
						src='profile-test/Me.jpg'
						alt=''
						width='250px'
					/>
				</div>
			</div>
			<div className='featured-work'>
				<h2>Featured Work (Upcycled)</h2>
				<div className='image-grid'>
					<div className='featured-item'>
						<Link to='/upitemdetail'>
							<img
								className='featured-image'
								src='item-test-images/pexels-element-digital-1125136.jpg'
								alt=''
							/>
                            <h4 className='item-name'>Blanket Ladder</h4>
						</Link>
					</div>
					<div>
						<img
							className='featured-image'
							src='item-test-images/pexels-evgenia-basyrova-5028844.jpg'
							alt=''
						/>
					</div>
					<div>
						<img
							className='featured-image'
							src='item-test-images/pexels-inga-seliverstova-3603994 (1).jpg'
							alt=''
						/>
					</div>
					<div>
						<img
							className='featured-image'
							src='item-test-images/pexels-julia-volk-5273075.jpg'
							alt=''
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;

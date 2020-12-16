import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import { Link } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {

	//// -- Variables -- ////

	let url = 'http://localhost:8000/item/';

	//// -- States -- ////

	let [userItems, setUserItems] = useState('');

	//// -- useEffects -- ////

	useEffect(function getItems() {
		Axios(url)
			.then((data) => {
				setUserItems(data.data);
			})
			.catch((error) => {});
		//eslint-disable-next-line
	}, []);
	
	if(!userItems){
		return null
	}

	//// -- Functions / Event Handlers -- ////

	let userItemList = userItems.map((item) => {
		return (
			<div className='item-image-div'>
				<Link to={'/item/' + item.id}>
					<h3>{item.name}</h3>
					<img className='item-image' src={item.image} alt='' />
				</Link>
			</div>
		);
	});



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
				<div className='image-grid'>{userItemList}</div>
			</div>
		</div>
	);
};

export default UserProfile;

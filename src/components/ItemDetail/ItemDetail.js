import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './ItemDetail.css';

const ItemDetail = ({ match }) => {
	//// -- Variables -- ////

	let itemId = match.params.id;
	let itemUrl = `http://localhost:8000/item/${itemId}`;
	//// -- States -- ////

	const [itemInfo, setItemInfo] = useState('');

	//// -- Functions / Event Handlers -- ////

	//// -- useEffect -- ////

	useEffect(function getItemInfo() {
		Axios(itemUrl)
			.then((data) => {
				setItemInfo(data.data);
				console.log(itemInfo);
			})
			.catch((error) => {});
		//eslint-disable-next-line
	}, []);

	if (!itemInfo) {
		return null;
	}

	//// -- Page Content -- ////

	return (
		<div className='item-info-body-div'>
			<div className='item-info'>
				<div className='item-bio-block'>
					<h2 className='item-name'>{itemInfo.name}</h2>
					<div>
						<h3>{itemInfo.category}</h3>
						<h3>
							{itemInfo.classification} - {itemInfo.condition}
						</h3>
						<h3>Description</h3>
						<p>{itemInfo.description}</p>
						<div></div>
					</div>
				</div>
				<div className='item-picture-div'>
					<img
						className='item-picture'
						src={itemInfo.image}
						alt=''
						width='250px'
					/>
				</div>
			</div>
            <div className='featured-work'>
                
            </div>
		</div>
	);
};

export default ItemDetail;

import React, { useEffect, useState } from 'react';
import ItemSuggestions from '../ItemSuggestions/ItemSuggestions';
import { Redirect } from 'react-router-dom'
import Axios from 'axios';
import './ItemDetail.css';

const ItemDetail = ({ match }) => {
	//// -- Variables -- ////

	let itemId = match.params.id;
	// let itemType = match.params.item_type;
	let itemUrl = `http://localhost:8000/item/${itemId}`;

	//// -- States -- ////

	const [itemInfo, setItemInfo] = useState('');
	let [show, setShow] = useState(false);

	//// -- Functions / Event Handlers -- ////

	let handleDelete = () => {
		Axios.delete(itemUrl)
			.then((data) => {
				setItemInfo(data.data);
			})
			.catch((error) => {});
	};

	// let handleUpdate = () => {
	// 	Axios.put(itemUrl)
	// 		.then((data) => {
	// 			setItemInfo(data.data);
	// 		})
	// 		.catch((error) => {});
	// };

	//// -- useEffect -- ////

	useEffect(function getItemInfo() {
		Axios(itemUrl)
			.then((data) => {
				setItemInfo(data.data);
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
						<h3>{itemInfo.item_type}</h3>
						<h3>
							{itemInfo.classification} - {itemInfo.condition}
						</h3>
						<h3>Description</h3>
						<p>{itemInfo.description}</p>
					</div>
				</div>
				<div className='item-picture-div'>
					<img
						className='item-picture'
						src={itemInfo.image}
						alt=''
						width='250px'
					/>
					<p onClick={handleDelete}>Delete</p>
					<p>Edit</p>
				</div>
			</div>
			<div className='featured-work'>
				<h2>Upcycle Suggestions</h2>
				<ItemSuggestions itemInfo={itemInfo} />
			</div>
		</div>
	);
};

export default ItemDetail;

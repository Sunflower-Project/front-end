import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import './ItemSuggestions.css';

const ItemSuggestions = ({ itemInfo }) => {
	//// -- Variables -- ////

	// let url = `http://localhost:8000/item`;
	let url = `https://sunflower-back-end.herokuapp.com/item/`;

	//// -- States -- ////

	const [item, setItem] = useState('');

	//// -- Functions / Event Handlers -- ////

	//// -- useEffect -- ////

	useEffect(function getAllItems() {
		Axios(url)
			.then((data) => {
				setItem(data.data);
			})
			.catch((error) => {});
		//eslint-disable-next-line
	}, []);

	if (!item) {
		return null;
	}
	let itemSuggestions = item.map((item) => {
		if (
			itemInfo.item_type === item.item_type &&
			item.classification === 'Upcycle' &&
			itemInfo.id !== item.id
		) {
			let handleRedirect = () => {
				window.location.href = `/item/${item.id}`;
			};

			return (
				<Link to={'/item/' + item.id} onClick={handleRedirect}>
					<div key={item.id} className='item-div'>
						<h3>{item.name}</h3>
						<img
							className='item-suggestion-image'
							src={item.image}
							alt={item.name}
						/>
					</div>
				</Link>
			);
		}
	});

	return <div className='item-suggestions-div'>{itemSuggestions}</div>;
};

export default ItemSuggestions;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './Items.css';

const Items = () => {
	let [items, setItems] = useState('');

	let url = 'http://localhost:8000/item/';

	// useEffect(() => {
	// 	fetch(url, {
	//         mode: 'cors',
	//         headers: {
	//             'Access-Control-Allow-Origin':'*'
	//         }
	//     })
	// 	.then((res) => res.json())
	// 	.then((resJson) => {
	//         setItems(resJson)
	//         console.log(setItems)
	//     })
	//     .catch((error) => {
	//         console.error(error)
	//     });
	// }, []);

	useEffect(function getItems() {
		Axios(url)
			.then((data) => {
				setItems(data.data);
				console.log(items);
			})
			.catch((error) => {});
	}, []);

	if (!items) {
		return null;
	}

	let itemList = items.map((item) => {
		return (
			<div className='item-image-div'>
				<Link to='/upitemdetail'>
					<h3>{item.name}</h3>
					<img className='item-image' src={item.image} alt='' />
				</Link>
			</div>
		);
	});

	return <div className='item-image-grid'>{itemList}</div>;
};

export default Items;

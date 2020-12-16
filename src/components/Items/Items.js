import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './Items.css';

const Items = () => {
	//// -- Variables -- ////

	let url = 'http://localhost:8000/item/';

	//// -- States -- ////

	let [items, setItems] = useState('');
	let [show, setShow] = useState(false);
	// const initialState = {
	// 	name: '',
	// 	category: '',
	// 	condition: '',
	// 	description: '',
	// 	classification: '',
	// 	image: '',
	// };

	//// -- useEffect -- ////

	useEffect(function getItems() {
		Axios(url)
			.then((data) => {
				setItems(data.data);

			})
			.catch((error) => {});
		//eslint-disable-next-line
	}, []);

	if (!items) {
		return null;
	}

	//// -- Functions / Event Handlers -- ////

	let itemList = items.map((item) => {
		return (
			<div className='item-image-div'>
				<Link to={'/item/' + item.id}>
					<h3>{item.name}</h3>
					<img className='item-image' src={item.image} alt='' />
				</Link>
			</div>
		);
	});
	const handleClose = () => setShow(false);
	let handleShow = () => setShow(true);

	//// -- Page Content -- ////

	return (
		<div>
			<div>
				<>
					{/* Open Modal */}
					<Button variant='primary' onClick={handleShow}>
						Create Item
					</Button>
					{/* Begin Modal */}
					<Modal show={show} onHide={handleClose}>
						{/* Modal Header */}
						<Modal.Header closeButton>
							<Modal.Title>Create a new Item!</Modal.Title>
						</Modal.Header>
						{/* Modal Body */}
						<Modal.Body>
							{/* Begin Form */}
							<Form action='submit'>
								{/* Item name */}
								<Form.Group>
									<Form.Label>Item Name</Form.Label>
									<Form.Control type='text' placeholder='e.g. Table' />
									{/* <Form.Text className='text-muted'>
										We'll never share your email with anyone else.
									</Form.Text> */}
								</Form.Group>
								{/* Category */}
								<Form.Group>
									<Form.Label>Choose a Category</Form.Label>
									<Form.Control as='select'>
										<option>Select...</option>
										<option>Indoor Furniture</option>
										<option>Toys</option>
										<option>Outdoor Furniture</option>
									</Form.Control>
								</Form.Group>
								{/* Condition */}
								<Form.Group>
									<Form.Label>What Condition is it in?</Form.Label>
									<Form.Control as='select'>
										<option>Select...</option>
										<option>Great</option>
										<option>Fair</option>
										<option>Poor</option>
									</Form.Control>
								</Form.Group>
								{/* Classification */}
								<Form.Group>
									<Form.Label>Recycle or Upcycle?</Form.Label>
									<Form.Control as='select'>
										<option>Select...</option>
										<option>Recycle</option>
										<option>Upcycle</option>
									</Form.Control>
								</Form.Group>
								{/* Item Description */}
								<Form.Group>
									<Form.Label>Describe your item...</Form.Label>
									<Form.Control as='textarea' rows={3} />
								</Form.Group>
								{/* Image Upload */}
								<Form.Group>
									<p>and finally...</p>
									<Form.File
										id='custom-file'
										label='Upload a picture of your item!'
										custom
									/>
								</Form.Group>
								{/* Submit Button */}
								<Button variant='primary' type='submit'>
									Create
								</Button>
							</Form>
						</Modal.Body>
						<Modal.Footer>
							<Button variant='secondary' onClick={handleClose}>
								Close
							</Button>
							<Button variant='primary' onClick={handleClose}>
								Save Changes
							</Button>
						</Modal.Footer>
					</Modal>
				</>
			</div>
			<div className='item-image-grid'>{itemList}</div>
		</div>
	);
};

export default Items;

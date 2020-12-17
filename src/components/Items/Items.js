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
	let initialState = {
		name: '',
		category: '',
		condition: '',
		description: '',
		classification: '',
		image: '',
	};
	let [newItem, setNewItem] = useState(initialState)

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
			<div key={item.id} className='item-image-div'>
				<Link to={'/item/' + item.id}>
					<h3>{item.name}</h3>
					<img className='item-image' src={item.image} alt={item.name} />
				</Link>
			</div>
		);
	});
	const handleClose = () => setShow(false);
	let handleShow = () => setShow(true);
	let handleSubmit = (event) => {
		const data = newItem
		console.log(data)
		event.preventDefault()
		Axios.post(url, data).then((response) => {
			console.log(response);
		});
	}
	const handleChange = (event) => {
		setNewItem({ ...newItem, [event.target.id]: event.target.value })
	}

	//// -- Page Content -- ////

	return (
		<div className='item-page-div'>
			<div>
				<>
					{/* Open Modal */}
					<Button variant='primary' onClick={handleShow}>
						Create Item
					</Button>
					{/* Begin Modal */}
					<Modal show={show} onHide={handleClose} centered size='lg'>
						{/* Modal Header */}
						<Modal.Header closeButton>
							<Modal.Title>Create a new Item!</Modal.Title>
						</Modal.Header>
						{/* Modal Body */}
						<Modal.Body>
							{/* Begin Form */}
							<Form action='submit' onSubmit={handleSubmit}>
								{/* Item name */}
								<Form.Group>
									<Form.Label>Item Name</Form.Label>
									<Form.Control
										type='text'
										placeholder='e.g. Table'
										onChange={handleChange}
										id='name'
										name='name'
										value={newItem.name}
									/>
									{/* <Form.Text className='text-muted'>
										We'll never share your email with anyone else.
									</Form.Text> */}
								</Form.Group>
								{/* Category */}
								<Form.Group>
									<Form.Label>Choose a Category</Form.Label>
									<Form.Control
										as='select'
										onChange={handleChange}
										id='category'>
										<option>Select...</option>
										<option>Indoor Furniture</option>
										<option>Toys</option>
										<option>Outdoor Furniture</option>
									</Form.Control>
								</Form.Group>
								{/* Condition */}
								<Form.Group>
									<Form.Label>What Condition is it in?</Form.Label>
									<Form.Control
										as='select'
										onChange={handleChange}
										id='condition'
										name='condition'
										value={newItem.condition}>
										<option>Select...</option>
										<option>Great</option>
										<option>Fair</option>
										<option>Poor</option>
									</Form.Control>
								</Form.Group>
								{/* Classification */}
								<Form.Group>
									<Form.Label>Recycle or Upcycle?</Form.Label>
									<Form.Control
										as='select'
										onChange={handleChange}
										id='classification'
										name='classification'
										value={newItem.classification}>
										<option>Select...</option>
										<option>Recycle</option>
										<option>Upcycle</option>
									</Form.Control>
								</Form.Group>
								{/* Item Description */}
								<Form.Group>
									<Form.Label>Describe your item...</Form.Label>
									<Form.Control
										as='textarea'
										rows={3}
										onChange={handleChange}
										id='description'
										name='description'
										value={newItem.description}
									/>
								</Form.Group>
								{/* Image Upload */}
								<Form.Group>
									<p>and finally...</p>
									<Form.File
										id=' image'
										label='Upload a picture of your item!'
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

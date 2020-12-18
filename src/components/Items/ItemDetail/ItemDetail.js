import React, { useEffect, useState } from 'react';
import ItemSuggestions from '../ItemSuggestions/ItemSuggestions';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import Axios from 'axios';
import './ItemDetail.css';

const ItemDetail = ({ match }) => {
	//// -- Variables -- ////

	let itemId = match.params.id;
	const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} />;
	const editIcon = <FontAwesomeIcon icon={faEdit} />;
	// let itemUrl = `http://localhost:8000/item/${itemId}/`;
	let itemUrl = `https://sunflower-back-end.herokuapp.com/item/${itemId}/`;

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
	let handleShow = () => setShow(true);
	let handleClose = () => setShow(false);
	let handleSubmit = (event) => {
		Axios.put(itemUrl, itemInfo)
			.then((response) => {})
			.catch(console.error);
	};
	const handleChange = (event) => {
		setItemInfo({ ...itemInfo, [event.target.id]: event.target.value });
	};

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
					<div className='title-buttons'>
						<h2 className='item-name'>{itemInfo.name}</h2>
						<div className='buttons'>
							<Button className='delete-button' onClick={handleDelete}>
								{deleteIcon}
							</Button>
							<Button variant='primary' onClick={handleShow}>
								{editIcon}
							</Button>
						</div>
					</div>
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
					<div>
						<div>
							<div>
								<>
									{/* Open Modal */}

									{/* Begin Modal */}
									<Modal show={show} onHide={handleClose} centered size='lg'>
										{/* Modal Header */}
										<Modal.Header closeButton>
											<Modal.Title>Update your item!</Modal.Title>
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
														value={itemInfo.name}
													/>
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
													{/* Item Type */}
													<Form.Group>
														<Form.Label>What type of item is it?</Form.Label>
														<Form.Control
															as='select'
															onChange={handleChange}
															id='item_type'
															name='item_type'
															value={itemInfo.item_type}>
															<option>Wooden Chair</option>
															<option>Wooden Bench</option>
															<option>Armchair</option>
															<option>Swingset</option>
															<option>Toy Truck</option>
															<option>Toy Car</option>
															<option>Toy Wagon</option>
															<option>Table</option>
															<option>Ladder</option>
														</Form.Control>
													</Form.Group>
												</Form.Group>
												{/* Condition */}
												<Form.Group>
													<Form.Label>What Condition is it in?</Form.Label>
													<Form.Control
														as='select'
														onChange={handleChange}
														id='condition'
														name='condition'
														value={itemInfo.condition}>
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
														value={itemInfo.classification}>
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
														value={itemInfo.description}
													/>
												</Form.Group>
												{/* Image Upload */}
												<Form.Group>
													<p>and finally...</p>
													<Form.Label>Image URL</Form.Label>
													<Form.Control
														type='text'
														placeholder='e.g. https://i.imgur.com/image.png'
														onChange={handleChange}
														id='image'
														name='image'
													/>
												</Form.Group>
											</Form>
										</Modal.Body>
										<Modal.Footer>
											<Button variant='secondary' onClick={handleClose}>
												Close
											</Button>
											<Button
												variant='primary'
												type='submit'
												onClick={() => {
													handleSubmit();
													handleClose();
												}}>
												Save Changes
											</Button>
										</Modal.Footer>
									</Modal>
								</>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='upcycle-div'>
				<h2>Upcycle Suggestions</h2>
				<ItemSuggestions itemInfo={itemInfo}/>
			</div>
		</div>
	);
};

export default ItemDetail;

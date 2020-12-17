import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import ItemSuggestions from '../ItemSuggestions/ItemSuggestions';
import FileUploader from '../Items/FileUploader';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';
import Axios from 'axios';
import './ItemDetail.css';

const ItemDetail = ({ match }) => {
	//// -- Variables -- ////

	let itemId = match.params.id;
	const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} />;
	const editIcon = <FontAwesomeIcon icon={faEdit} />;
	// let itemType = match.params.item_type;
	let itemUrl = `http://localhost:8000/item/${itemId}/`;

	//// -- States -- ////

	let [newFile, setNewFile] = useState(null);
	const [itemInfo, setItemInfo] = useState('');
	let [show, setShow] = useState(false);
	// let [items, setItems] = useState('');

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
		// const data = newItem
		const formData = new FormData();
		formData.append('image', newFile, newFile.name);
		formData.append('name', itemInfo.name);
		formData.append('category', itemInfo.category);
		formData.append('condition', itemInfo.condition);
		formData.append('description', itemInfo.description);
		formData.append('classification', itemInfo.classification);
		formData.append('item_type', itemInfo.item_type);
		console.log(formData, itemInfo);
		Axios.put(itemUrl, formData, {
			headers: { 'content-type': 'multipart/form-data' },
		})
		.then((response) => {
			console.log(response);
			console.log(formData);
			window.location.reload();
			})
			.catch(console.error);
	};
	const handleChange = (event) => {
		setItemInfo({ ...itemInfo, [event.target.id]: event.target.value });
	};
	// let itemType = itemInfo.map((item) => {
	// 	return <option key={item.id}>{item.item_type}</option>;
	// });

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
					<span className='delete-button' onClick={handleDelete}>
						{deleteIcon}
					</span>
					<div>
						<div className='item-page-div'>
							<div>
								<>
									{/* Open Modal */}
									<Button variant='primary' onClick={handleShow}>
										{editIcon}
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
														value={itemInfo.name}
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
													{/* Item Type */}
													<Form.Group>
														<Form.Label>What type of item is it?</Form.Label>
														<Form.Control
															as='select'
															onChange={handleChange}
															id='item_type'
															name='item_type'
															value={itemInfo.item_type}>
															{/* {itemType} */}
															<option>Wooden Chair</option>
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
													{/* <Form.File
														id='image'
														label='Upload a picture of your item!'
														onChange={(e) => setNewFile(e.target.files[0])}
														name='image'
														value={newFile}
													/> */}
													<FileUploader
														onFileSelectSuccess={(file) => setNewFile(file)}
														// onFileSelectError={({ error }) => alert(error)}
													/>
												</Form.Group>
												{/* Submit Button */}
												{/* <Button variant='primary' type='submit'>
													Create
												</Button> */}
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
							<div className='item-image-grid'>{/* {itemList} */}</div>
						</div>
					</div>
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

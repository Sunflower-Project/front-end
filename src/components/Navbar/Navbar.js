import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css'

const Navbar = () => {
	return (
		<div>
			<Nav>
				<Nav.Item>
					<Nav.Link href='/'>Home</Nav.Link>
				</Nav.Item>
				{/* <Nav.Item>
					<Nav.Link eventKey='link-1'>Register</Nav.Link>
				</Nav.Item> */}
				<Nav.Item>
					<Nav.Link href='/login'>Login</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href='/browse'>Browse</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href='/signup'>Get Started</Nav.Link>
				</Nav.Item>
			</Nav>
		</div>
	);
};

export default Navbar;

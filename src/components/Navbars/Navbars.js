import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Navbars = () => {
    return (
			<div>
				<Navbar bg='light' expand='lg'>
					<Navbar.Brand href='#home'>
                        {/* Commented until I figure out what this really means, and how to keep the hamburger on the irght without it */}
                        {/* React-Bootstrap */}
                        </Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto'>
							<Nav.Link href='/'>Home</Nav.Link>
							<Nav.Link href='/browse'>Browse</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
};

export default Navbars;
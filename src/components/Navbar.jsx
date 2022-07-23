import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
	return (
		<div>
			<Link to='/'>
				<h1>Cryptonian</h1>
			</Link>
			<div>
				<ThemeToggle />
			</div>
		</div>
	);
};

export default Navbar;

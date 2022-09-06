import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { UserAuth } from '../../context/AuthContext';
import MobileNav from './MobileNav';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const { user, logout } = UserAuth();
	const navigate = useNavigate();

	const handleNav = () => {
		setNav(!nav);
	};

	const handleSignOut = async () => {
		try {
			await logout();
			navigate('/');
		} catch (e) {
			console.log(e.message);
		}
	};

	return (
		<>
			<nav className='rounded-div flex items-center justify-between h-20 font-bold'>
				<Link to='/'>
					<h1 className='text-2xl '>
						<span className='text-accent'>Obs</span>
						Crypto~
					</h1>
				</Link>

				{user?.email ? (
					<div className='hidden  md:flex items-center  justify-center '>
						<Link to='/coinsitems' className=' text-lg'>
							Cryptocurrencies
						</Link>
						<Link to='/account' className='p-4 text-lg'>
							Account
						</Link>
						<button
							onClick={handleSignOut}
							className='px-5 py-2 font-bold w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'
						>
							Sign out
						</button>

						<div>
							<ThemeToggle />
						</div>
					</div>
				) : (
					<div className='hidden md:block '>
						<div>
							<ThemeToggle className='ml-8' />
						</div>
					</div>
				)}
			</nav>
			<MobileNav
				user={user}
				nav={nav}
				handleSignOut={handleSignOut}
				handleNav={handleNav}
			/>
		</>
	);
};

export default Navbar;

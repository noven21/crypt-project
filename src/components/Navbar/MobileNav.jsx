import React from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const MobileNav = ({ user, nav, handleNav, handleSignOut }) => {
	const navigate = useNavigate();

	return (
		<div>
			<div
				onClick={handleNav}
				className='block md:hidden absolute right-5 top-7 cursor-pointer z-10'
			>
				{nav ? (
					<AiOutlineClose size={20} />
				) : (
					<AiOutlineMenu size={20} />
				)}
			</div>
			{/* Mobile Menu */}
			{user?.email ? (
				<div
					className={
						nav
							? 'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10'
							: ' fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'
					}
				>
					<ul className='w-full p-4'>
						<li onClick={handleNav} className='border-b py-6'>
							<Link to='/'>Home</Link>
						</li>
						<li onClick={handleNav} className='border-b py-6'>
							<Link to='/account'>Account</Link>
						</li>
						<li className='border-b py-6'>
							<Link to='/coinsitems'>Cryptocurrencies</Link>
						</li>

						<li className=' py-6'>
							<ThemeToggle />
						</li>
					</ul>
					<button
						onClick={handleSignOut}
						className='px-5  w-full py-2 mb-20 font-bold my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'
					>
						Sign out
					</button>
				</div>
			) : (
				<div
					className={
						nav
							? 'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10'
							: 'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'
					}
				>
					<ul className='w-full p-4'>
						<li onClick={handleNav} className='border-b py-6'>
							<Link to='/'>Home</Link>
						</li>

						<li onClick={handleNav} className='border-b py-6'>
							<Link to='/coinsitems'>Cryptocurrencies</Link>
						</li>

						<li className=' py-6'>
							<ThemeToggle />
						</li>
					</ul>
					<div className='flex flex-col w-full p-4'>
						<Link to='/signin'>
							<button
								onClick={handleNav}
								className='w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl'
							>
								Sign In
							</button>
						</Link>
						<Link onClick={handleNav} to='/signup'>
							<button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>
								Sign Up
							</button>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default MobileNav;

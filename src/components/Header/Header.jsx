import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

const Header = () => {
	const { user } = UserAuth();

	return (
		<header>
			{user?.email ? (
				<div className='h-[70vh]  flex items-center justify-center flex-col '>
					<h1 className='text-[48px] font-bold text-center mb-1'>
						<span className='text-accent max-w-lg:block'>
							One Platform{' '}
						</span>{' '}
						all things crypto
					</h1>
					<p className='text-lg font-normal text-center'>
						The best Tracking Cryptocurrency assets <br />
						Signup now to keep up to date on your favorite
						cryptocurrency.
					</p>
				</div>
			) : (
				<div className='h-[70vh]  flex items-center justify-center flex-col '>
					<h1 className='text-[48px] font-bold text-center mb-1'>
						<span className='text-accent max-w-lg:block'>
							One Platform{' '}
						</span>{' '}
						all things crypto
					</h1>
					<p className='text-lg font-normal text-center'>
						The best Tracking Cryptocurrency assets <br />
						Signup now to keep up to date on your favorite
						cryptocurrency.
					</p>
					<div className=' flex items-center w-full justify-center p-4'>
						<Link to='/signin' className='mr-8'>
							<button
								className=' font-bold py-2 px-5 w-full my-2 p-3 bg-primary 
					text-primary hover:scale-105  border-secondary rounded-2xl shadow-xl '
							>
								Sign In
							</button>
						</Link>
						<Link to='/signup'>
							<button className='px-5 py-2 font-bold w-full my-2 p-3 bg-button text-btnText rounded-2xl  shadow-xl   hover:scale-105'>
								Sign Up
							</button>
						</Link>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;

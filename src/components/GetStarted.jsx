import React from 'react';
import { Link } from 'react-router-dom';
import Phonerank from '../assets/images/phonerank.png';
import { UserAuth } from '../context/AuthContext';

const GetStarted = () => {
	const { user } = UserAuth();

	return (
		<section className='rounded-div-shadow    my-4 h-[400px]'>
			{user?.email ? (
				<div className='flex  h-full mx-auto px-8 items-center'>
					<div>
						<h1 className='text-4xl font-bold mb-4'>
							Join a new Generation of investors
						</h1>
						{/* <Link to='/signup'>
						<button className='bg-transparent p-2 border-2 border-blue-500 text-blue-500 rounded-lg font-bold '>
							Get Started
						</button>
					</Link> */}
					</div>
					<div className='hidden md:block'>
						<img
							src={Phonerank}
							alt='phone'
							className='h-[400px]'
						/>
					</div>
				</div>
			) : (
				<div className='flex  h-full mx-auto px-8 items-center'>
					<div>
						<h1 className='text-4xl font-bold mb-4'>
							Join a new Generation of investors
						</h1>
						<Link to='/signup'>
							<button className='bg-transparent p-2 border-2 border-blue-500 text-blue-500 rounded-lg font-bold '>
								Get Started
							</button>
						</Link>
					</div>
					<div className='hidden md:block'>
						<img
							src={Phonerank}
							alt='phone'
							className='h-[400px]'
						/>
					</div>
				</div>
			)}
		</section>
	);
};

export default GetStarted;

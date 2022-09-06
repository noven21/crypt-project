import React, { useState } from 'react';

import CoinItemsTable from '../components/CoinItem/Tables/CoinItemsTable';

const CoinsItems = ({ cryptos }) => {
	const [searchText, setSearchText] = useState('');

	// console.log(coins);
	return (
		<div className='rounded-div-shadow my-4'>
			<div
				className='flex flex-col md:flex-row justify-between 
			pt-4 pb-6 text-center md:text-right'
			>
				<h1 className='text-2xl font-bold my-2'>Cryptocurrencies</h1>
				<form>
					<input
						onChange={(e) => setSearchText(e.target.value)}
						className='w-full bg-primary  border-input px-4 py-2 
						rounded-2xl shadow-xl'
						type='text'
						placeholder='Search a coin'
					/>
				</form>
			</div>
			<CoinItemsTable
				cryptos={cryptos}
				searchText={searchText}
				setSearchText={setSearchText}
			/>
		</div>
	);
};

export default CoinsItems;

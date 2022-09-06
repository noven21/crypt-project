import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CoinItem from '../CoinItem/CoinItem';

const CoinSearch = ({ coins }) => {
	const [searchText, setSearchText] = useState('');

	// console.log(coins);
	return (
		<main className='rounded-div-shadow my-4'>
			<div
				className='flex flex-col md:flex-row justify-between 
			pt-4 pb-6 text-center md:text-right'
			>
				<h2 className='text-2xl font-bold my-2'>Top 10 Cryptos</h2>
			</div>

			<table className='w-full border-collapse text-center'>
				<thead>
					<tr className='border-b'>
						<th></th>
						<th className='px-4'>#</th>
						<th className='text-left'>Coin</th>
						<th></th>
						<th>Price</th>
						<th>24h</th>
						<th className='hidden md:table-cell'>24h Volume</th>
						<th className='hidden sm:table-cell'>Mkt</th>
						<th>Last 7 Days</th>
					</tr>
				</thead>
				<tbody>
					{coins
						.filter((value) => {
							if (searchText === '') {
								return value;
							} else if (
								value.name
									.toLowerCase()
									.includes(searchText.toLowerCase())
							) {
								return value;
							}
						})
						.map((coin) => (
							<CoinItem key={coin.id} coin={coin} />
						))}
				</tbody>
			</table>
			<div className='py-4 text-accent  flex justify-end'>
				<Link to='/coinsitems'>
					<h2>See More</h2>
				</Link>
			</div>
		</main>
	);
};

export default CoinSearch;

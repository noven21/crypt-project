import React from 'react';
import AboutHome from '../components/AboutHome';
import CoinItem from '../components/CoinItem';
import CoinSearch from '../components/CoinSearch';
import Header from '../components/Header';
import Trending from '../components/Trending';

const Home = ({ coins }) => {
	return (
		<div>
			<Header />
			<CoinSearch coins={coins} />
			{/* <CoinItem key={coins.id} coins={coins} /> */}
			<AboutHome />
			<Trending />
		</div>
	);
};

export default Home;

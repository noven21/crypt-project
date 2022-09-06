import React from 'react';
import AboutHome from '../components/AboutHome/AboutHome';

import CoinSearch from '../components/CoinSearch/CoinSearch';
import GetStarted from '../components/GetStarted/GetStarted';
import Header from '../components/Header/Header';
import Trending from '../components/Trending/Trending';

const Home = ({ coins }) => {
	return (
		<main>
			<Header />
			<CoinSearch coins={coins} />

			<AboutHome />
			<Trending />
			<GetStarted />
		</main>
	);
};

export default Home;

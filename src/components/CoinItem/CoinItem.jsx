import React, { useState } from 'react';
import { UserAuth } from '../../context/AuthContext';
import { db } from '../../config/firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import CoinItemTable from './Tables/CoinItemTable';

const CoinItem = ({ coin }) => {
	const [savedCoin, setSavedCoin] = useState(false);
	const { user } = UserAuth();

	const coinPath = doc(db, 'users', `${user?.email}`);

	const coinArr = arrayUnion({
		id: coin.id,
		name: coin.name,
		image: coin.image,
		rank: coin.market_cap_rank,
		symbol: coin.symbol,
	});

	const saveCoin = async () => {
		if (user?.email) {
			setSavedCoin(true);
			await updateDoc(coinPath, {
				watchList: coinArr,
			});
		} else {
			alert('Please sign in to save a coin to your watch list');
		}
	};

	return (
		<CoinItemTable
			coin={coin}
			user={user}
			saveCoin={saveCoin}
			savedCoin={savedCoin}
			coinArr={coinArr}
		/>
	);
};

export default CoinItem;

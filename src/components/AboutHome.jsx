import Binance from '../assets/logo/binance.svg';
import Bitcoin from '../assets/logo/bitcoin.svg';
import Coinbase from '../assets/logo/coinbase.svg';
import Tether from '../assets/logo/tether.svg';
import Signup from '../assets/images/signup.png';
import Fund from '../assets/images/fund.png';
import Crypto from '../assets/images/crypto.png';

const AboutHome = () => {
	return (
		<section>
			<section className='rounded-div my-12 py-8 text-primary '>
				<div className='flex flex-col items-center  md:flex-row  md:justify-around'>
					<img
						src={Binance}
						alt='binance'
						className=' md:mb-0 h-full mb-4'
					/>
					<img
						src={Bitcoin}
						alt='bitcoin'
						className='  md:mb-0  h-full mb-4'
					/>
					<img
						src={Coinbase}
						alt='coinbase'
						className='   md:mb-0  h-full mb-4'
					/>
					<img
						src={Tether}
						alt='tether'
						className='   md:mb-0  h-full mb-4'
					/>
				</div>
				<div className='mt-20'>
					<div className='text-center mb-10'>
						<h1 className='font-bold text-2xl '>
							Get Started in Just Few Minute
						</h1>
						<p className='text-base'>
							Has a variety of features that make
							it the best place to search coins
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-4'>
						<div className=' rounded-div-shadow flex items-center flex-col p-8 text-center border '>
							<img src={Signup} alt='Sign Up' />
							<h2 className='text-lg font-semibold'>
								Sign Up
							</h2>
							<p>
								Buy Bitcoin or Ethereum, the
								securely store it in your wallet
								or send it on easily to friends{' '}
							</p>
						</div>
						<div className=' rounded-div-shadow flex items-center flex-col p-8 text-center border '>
							<img
								src={Fund}
								alt='Sign Up'
								className='mb-10'
							/>
							<h2 className='text-lg font-semibold'>
								Fund
							</h2>
							<p>
								Choose you preferred payment
								method such as bank transfer or
								credit card to top up your wallet
							</p>
						</div>
						<div className=' rounded-div-shadow flex items-center flex-col p-8 text-center border '>
							<img
								src={Crypto}
								alt='Sign Up'
								className='mb-[60px]'
							/>
							<h2 className='text-lg font-semibold'>
								Buy Crypto
							</h2>
							<p>
								Sign up for free wallet on web,
								IOS or Android and follow our easy
								process to set up your profile
							</p>
						</div>
					</div>
				</div>
			</section>
			<div className='bg-blue-200 hidden md:block  h-[300px] mt-[-300px] rounded-t-3xl'></div>
		</section>
	);
};

export default AboutHome;

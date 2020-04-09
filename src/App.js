import React from 'react';
import './App.css';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';
import useTimer from './useTimer';
import MainPage from './MainPage';
import { Footer } from './Footer';

const END_DATE = new Date('April 30, 2020');

ReactGA.initialize('UA-163143592-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
	const { days, hours, minutes, seconds } = useTimer(END_DATE);

	return (
		<>
			<Helmet>
				<title>
					{`${days} Days - ${hours}:${minutes}:${seconds}`} | ECQ
					Countdown
				</title>
			</Helmet>
			<div className="App">
				<MainPage
					endDate={END_DATE}
					timer={{ days, hours, minutes, seconds }}
				/>
				<Footer />
			</div>
		</>
	);
}

export default App;

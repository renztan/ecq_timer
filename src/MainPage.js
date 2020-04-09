import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Countdown from './Countdown';
import useRandomSentence from './useRandomSentence';
import Background from './Background';
import Tips from './Tips';

const MainPage = ({ timer }) => {
	const [sentence, setSentence] = useState(useRandomSentence());

	return (
		<>
			<Background />
			<div className="page page__main page__full">
				<Countdown timer={timer} />
				<h3 style={{ textAlign: 'center' }}>until {sentence}</h3>
				<Tips />
			</div>
		</>
	);
};

MainPage.propTypes = {
	timer: PropTypes.object.isRequired,
};

export default MainPage;

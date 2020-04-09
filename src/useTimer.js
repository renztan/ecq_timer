import { useState, useEffect } from 'react';

const useTimer = (endDate) => {
	const [days, setDays] = useState('00');
	const [hours, setHours] = useState('00');
	const [minutes, setMinutes] = useState('00');
	const [seconds, setSeconds] = useState('00');

	useEffect(() => {
		const getNumber = (number) => (number > 9 ? number : `0${number}`);

		const timer = setTimeout(() => {
			let CURRENT_TIME = new Date().getTime();
			let END_DATE_TIME = endDate.getTime();
			let TIME_LEFT = END_DATE_TIME - CURRENT_TIME;
			setDays(getNumber(Math.floor(TIME_LEFT / (1000 * 60 * 60 * 24))));
			setHours(
				getNumber(
					Math.floor(
						(TIME_LEFT % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
					)
				)
			);
			setMinutes(
				getNumber(
					Math.floor((TIME_LEFT % (1000 * 60 * 60)) / (1000 * 60))
				)
			);
			setSeconds(getNumber(Math.floor((TIME_LEFT % (1000 * 60)) / 1000)));
		}, 1000);
		return () => clearTimeout(timer);
	}, [endDate, days, hours, minutes, seconds]);

	return { days, hours, minutes, seconds };
};

export default useTimer;

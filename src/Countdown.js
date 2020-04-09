import React from 'react';
import PropTypes from 'prop-types';

const Countdown = ({ timer }) => {
	const { days, hours, minutes, seconds } = timer;

	return (
		<div className="countdown">
			<div className="countdown__content">
				<div className="countdown__item">
					<p className="countdown__text countdown__text__title">
						Days
					</p>
					<span className="countdown__text countdown__text__timer">
						{days}
					</span>
				</div>
				<span className="countdown__text countdown__text__separator">
					:
				</span>
				<div className="countdown__item">
					<p className="countdown__text countdown__text__title">
						Hours
					</p>
					<span className="countdown__text countdown__text__timer">
						{hours}
					</span>
				</div>
				<span className="countdown__text countdown__text__separator">
					:
				</span>
				<div className="countdown__item">
					<p className="countdown__text countdown__text__title">
						Minutes
					</p>
					<span className="countdown__text countdown__text__timer">
						{minutes}
					</span>
				</div>
				<span className="countdown__text countdown__text__separator">
					:
				</span>
				<div className="countdown__item">
					<p className="countdown__text countdown__text__title">
						Seconds
					</p>
					<span className="countdown__text countdown__text__timer">
						{seconds}
					</span>
				</div>
			</div>
		</div>
	);
};

Countdown.propTypes = {
	timer: PropTypes.object.isRequired,
};

export default Countdown;

import React, { useState } from 'react';

const tips = [
	'Wash your hands frequently with soap, for 20 seconds.',
	"Don't go outside, unless it's an emergency (like buying food, groceries or medicine).",
	'Stay informed. Check the news for updates around your area. Be also aware from fake news.',
	'Wear protective masks if you need to go outside.',
	"Don't hoard items. Seriously, don't",
];

const Tips = () => {
	const [tipIndex, setTipIndex] = useState(0);

	const cycleTips = (direction) => {
		if (direction === 'prev') {
			setTipIndex((current) => {
				return current === 0 ? tips.length - 1 : current - 1;
			});
		} else {
			setTipIndex((current) => {
				return current === tips.length - 1 ? 0 : current + 1;
			});
		}
	};

	return (
		<div className="tips">
			<h2 className="tips__title">Tips</h2>
			<div className="tips__controller">
				<button
					className="tips__button tips__button--prev"
					onClick={() => cycleTips('prev')}
				>
					&laquo; Previous
				</button>
				<button
					className="tips__button tips__button--next"
					onClick={() => cycleTips('next')}
				>
					Next &raquo;
				</button>
			</div>
			<p className="tips__text">{tips[tipIndex]}</p>
		</div>
	);
};

export default Tips;

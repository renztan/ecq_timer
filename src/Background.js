import React, { useState, useEffect } from 'react';

const images = [
	{
		src:
			'https://images.summitmedia-digital.com/esquiremagph/images/2020/03/15/day-one-lockdown-in-photos-13.jpg',
		author: 'Sarah Navao Limos - esquiremag.ph',
	},
	{
		src:
			'https://images.summitmedia-digital.com/esquiremagph/images/2020/03/15/day-one-lockdown-in-photos-15.jpg',
		author: 'Sarah Navao Limos - esquiremag.ph',
	},
	{
		src:
			'https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh5.googleusercontent.com/YQKwS39s40EE0LBcWYfZsR-muHxDAEVEIqAN2VIAaFXIYUE27IDDJsnEJHaev-7cd6C_IuMQr9h-1EAS7_383QdZMaXsi24mPx10Dk3_NFDRDlcP1sAv8_1F3GQiyp-oaO3La5om',
		author: 'Eloisa - REUTERS',
	},
	{
		src:
			'https://images.summitmedia-digital.com/preview/images/2020/03/16/enhanced-community-quarantine-nm-2.jpg',
		author: 'Image Shutterstock',
	},
];

const TRANSITION_DELAY = 10000;

const Background = () => {
	const [imageIndex, setImageIndex] = useState(
		Math.ceil(Math.random() * images.length) - 1
	);
	const [image, setImage] = useState(images[imageIndex]);
	const [bgClass, setBgClass] = useState('');

	useEffect(() => {
		const transitionTimeout = setTimeout(() => {
			setBgClass('background_image__image--transitioning');
			setTimeout(() => {
				setBgClass('');
			}, 2500);
		}, TRANSITION_DELAY - 2500);
		const interval = setTimeout(() => {
			setImageIndex((current) =>
				current === images.length - 1 ? 0 : current + 1
			);
			setImage(images[imageIndex]);
		}, TRANSITION_DELAY);
		return () => {
			clearTimeout(transitionTimeout);
			clearTimeout(interval);
		};
	}, [imageIndex, image]);
	return (
		<div className="background_image">
			<div
				className={`background_image__image ${bgClass}`}
				style={{ backgroundImage: `url('${image.src}')` }}
			></div>
			<p className="background_image__author">&copy; {image.author}</p>
		</div>
	);
};

export default Background;

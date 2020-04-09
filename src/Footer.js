import React from 'react';

export const Footer = () => {
	return (
		<footer className="footer footer--sticky">
			<p className="footer__text">
				<small>
					&copy; 2020 | Made by{' '}
					<a href="https://github.com/tnrnz" target="blank">
						Renz
					</a>
					{', '}
					out of boredom.
				</small>
			</p>
		</footer>
	);
};

import { useState } from "react";
import ReactCardFlip from "react-card-flip";

export const FeatureCard = ({ feature, description, icon, fullWidth = false }) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const handleHover = (e) => {
		e.preventDefault();
		setIsFlipped(!isFlipped);
	};

	return (
		<ReactCardFlip flipDirection='horizontal' containerClassName={`${fullWidth === true ? "fw-item" : ""}`}>
			<div key='front' onMouseOver={handleHover} className='features-grid-item h-100 py-3 justify-content-center align-items-center'>
				{icon}
				<p className='w-100 fw-500 mt-1'>{feature}</p>
			</div>

			<div key='back' onMouseOut={handleHover} className='features-grid-item h-100 py-3 justify-content-center align-items-center'>
				{description}
			</div>
		</ReactCardFlip>
	);
};

import React from 'react';
import './card.scss';

const Card = ({ value, order, cardSpan }) => {
	return (
		<div className='card' style={{ zIndex: order, top: order * cardSpan, left: order }}>
			{value}
		</div>
	);
};

export default Card;

import React from 'react';
import './card.scss';

const Card = ({ card: { name, isOpen }, order, cardSpan }) => {
	return (
		<div
			className='card'
			style={{ zIndex: order, top: order * cardSpan, left: order, backgroundColor: isOpen ? 'white' : 'green' }}>
			{isOpen ? name : ''}
		</div>
	);
};

export default Card;

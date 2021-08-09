import React from 'react';
import './card.scss';

const Card = ({ card, order, cardSpan, onCardClick, selectedCardId }) => {
	const { name, isOpen } = card;
	return (
		<div
			className={`card${card.id === selectedCardId ? ' selected' : ''}`}
			style={{ zIndex: order, top: order * cardSpan, left: order, backgroundColor: isOpen ? 'white' : 'green' }}
			onClick={() => isOpen && onCardClick(card, order)}>
			{isOpen ? name : ''}
		</div>
	);
};

export default Card;

import React from 'react';
import Card from '../card/Card';
import './stack.scss';

const Stack = ({ cards, stackId, onCardClick, selectedCardId }) => {
	const _onCardClick = (card, order) => {
		console.log('order', order);
		onCardClick(card, cards.length - order, stackId);
	};
	return (
		<div className='stack'>
			{cards.map((card, i) => (
				<Card card={card} order={i} cardSpan={20} onCardClick={_onCardClick} selectedCardId={selectedCardId} />
			))}
		</div>
	);
};

export default Stack;

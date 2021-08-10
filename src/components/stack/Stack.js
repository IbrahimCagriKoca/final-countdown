import React from 'react';
import Card from '../card/Card';
import './stack.scss';

const Stack = ({ cards, stackId, onCardClick, selectedCardId, isPlaceHolder }) => {
	const _onCardClick = (card, order) => {
		onCardClick(card, cards.length - order, stackId, cards.length - order > 1 ? cards[order + 1] : '');
	};

	return (
		<div className='stack' onClick={isPlaceHolder}>
			{cards.map((card, i) => (
				<Card card={card} order={i} cardSpan={20} onCardClick={_onCardClick} selectedCardId={selectedCardId} />
			))}
		</div>
	);
};

export default Stack;

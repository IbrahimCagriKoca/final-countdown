import React from 'react';
import Card from '../card/Card';
import './stack.scss';

const Stack = ({ cards }) => {
	return (
		<div className='stack'>
			{cards.map((card, i) => (
				<Card card={card} order={i} cardSpan={20} />
			))}
		</div>
	);
};

export default Stack;

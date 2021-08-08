import React from 'react';
import Card from '../card/Card';
import './stack.scss';

const Stack = ({ cards }) => {
	return (
		<div className='stack'>
			{cards.map((v, i) => (
				<Card value={v} order={i} cardSpan={20} />
			))}
		</div>
	);
};

export default Stack;

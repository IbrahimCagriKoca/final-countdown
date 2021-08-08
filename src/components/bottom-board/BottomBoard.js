import React, { useEffect, useState } from 'react';
import Stack from '../stack/Stack';
import { times } from 'lodash';
import './bottomBoard.scss';

const openLastCard = (cards) => {
	cards[cards.length - 1].isOpen = true;
	return cards;
};

const BottomBoard = ({ drawCards, shouldDraw, setShouldDraw }) => {
	const [stackCards, setStackCards] = useState([[], [], [], [], [], [], [], [], [], []]);

	const dealNewCards = () => {
		let drawnCards = drawCards(10);
		setShouldDraw(false);
		setStackCards(stackCards.map((cards, i) => [...cards, { ...drawnCards[i], isOpen: true }]));
	};

	useEffect(() => {
		let drawnCards = drawCards(54);
		const stacks = [
			openLastCard(drawnCards.splice(0, 6)),
			openLastCard(drawnCards.splice(0, 6)),
			openLastCard(drawnCards.splice(0, 6)),
			openLastCard(drawnCards.splice(0, 6)),
			openLastCard(drawnCards.splice(0, 5)),
			openLastCard(drawnCards.splice(0, 5)),
			openLastCard(drawnCards.splice(0, 5)),
			openLastCard(drawnCards.splice(0, 5)),
			openLastCard(drawnCards.splice(0, 5)),
			openLastCard(drawnCards.splice(0, 5)),
		];
		setStackCards(stacks);
	}, []);

	useEffect(() => {
		if (shouldDraw) {
			dealNewCards();
		}
	}, [shouldDraw]);

	return (
		<div className='bottom-board'>
			{times(10, (i) => (
				<Stack cards={stackCards[i]} key={i} />
			))}
		</div>
	);
};

export default BottomBoard;

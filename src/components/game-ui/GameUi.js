import React, { useState } from 'react';
import BottomBoard from '../bottom-board/BottomBoard';
import TopBoard from '../top-board/TopBoard';
import { shuffle, take } from 'lodash';

const allCardNames = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let completedStacks = 0;
const fullDeck = []
	.concat(
		allCardNames,
		allCardNames,
		allCardNames,
		allCardNames,
		allCardNames,
		allCardNames,
		allCardNames,
		allCardNames
	)
	.map((name, i) => ({
		id: i,
		value: (i % 13) + 1,
		name,
		suit: 'S',
		isOpen: false,
	}));

const GameUi = () => {
	const [gameDeck, setGameDeck] = useState(shuffle(fullDeck));
	const [shouldDraw, setShouldDraw] = useState(false);
	const remainingDrawableStacks = gameDeck.length / 10;

	const drawCards = (n) => {
		const drawnCards = take(gameDeck, n);
		setGameDeck(gameDeck.slice(n));
		return drawnCards;
	};

	return (
		<div className='game-ui'>
			<TopBoard
				closedStackCount={remainingDrawableStacks}
				placeHolderCount={8}
				drawCards={drawCards}
				onDrawClick={() => {
					setShouldDraw(true);
				}}
				completedStacks={completedStacks}
			/>
			<BottomBoard
				drawCards={drawCards}
				shouldDraw={shouldDraw}
				setShouldDraw={setShouldDraw}
				completedStacks={completedStacks}
			/>
		</div>
	);
};

export default GameUi;

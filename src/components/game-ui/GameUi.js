import React, { useState, useEffect } from 'react';
import BottomBoard from '../bottom-board/BottomBoard';
import TopBoard from '../top-board/TopBoard';
import './gameUi.scss';
import { shuffle, take } from 'lodash';

const allCardNames = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
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
    const [completedStacks, setCompletedStacks] = useState(0);
    useEffect(() => {
        if (completedStacks === 8) {
            alert('Gazandınız');
        }
    }, [completedStacks]);

    const drawCards = (n) => {
        const drawnCards = take(gameDeck, n);
        setGameDeck(gameDeck.slice(n));
        return drawnCards;
    };

    const onComplete = () => {
        setCompletedStacks(completedStacks + 1);
    };

    return (
        <div className='game-ui'>
            <TopBoard
                closedStackCount={remainingDrawableStacks}
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
                onComplete={onComplete}
            />
        </div>
    );
};

export default GameUi;

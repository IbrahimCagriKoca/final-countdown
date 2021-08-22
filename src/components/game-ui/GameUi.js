import React, { useState, useEffect } from 'react';
import BottomBoard from '../bottom-board/BottomBoard';
import TopBoard from '../top-board/TopBoard';
import BottomBoardFooter from '../bottom-board-footer/BottomBoardFooter';
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
    const [gameStartedAt, setGameStartedAt] = useState(undefined);
    useEffect(() => {
        if (completedStacks === 8) {
            alert(`Gazandınız, oyun ${Math.floor((new Date().getTime() - gameStartedAt) / 1000)} saniye sürdü`);
        }
    }, [completedStacks]);

    const drawCards = (n) => {
        try {
            const drawnCards = take(gameDeck, n);
            setGameDeck(gameDeck.slice(n));
            return drawnCards;
        } catch (error) {
            alert('Error on draw card:' + error);
        }
    };

    const onComplete = () => {
        setCompletedStacks(completedStacks + 1);
    };

    const startGame = () => {
        setGameStartedAt(new Date().getTime());
    };

    return (
        <div className='game-ui'>
            <TopBoard
                closedStackCount={remainingDrawableStacks}
                onDrawClick={() => {
                    setShouldDraw(true);
                }}
                completedStacks={completedStacks}
                isGameStarted={gameStartedAt !== undefined}
            />
            <BottomBoard
                drawCards={drawCards}
                shouldDraw={shouldDraw}
                setShouldDraw={setShouldDraw}
                onComplete={onComplete}
                isGameStarted={gameStartedAt !== undefined}
            />
            <BottomBoardFooter onStartGame={startGame} gameStartedAt={gameStartedAt} />
        </div>
    );
};

export default GameUi;

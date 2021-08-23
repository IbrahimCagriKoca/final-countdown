import React, { useState, useEffect } from 'react';
import BottomBoard from '../bottom-board/BottomBoard';
import TopBoard from '../top-board/TopBoard';
import Header from '../header/Header';
import './gameUi.scss';
import { shuffle, take } from 'lodash';
import EndGamePopup from '../end-game-popup/EndGamePopup';
import { getFullDeck, BOARD_STACK_COUNT, DECK_SET_COUNT } from '../constants';

const GameUi = () => {
    const [gameDeck, setGameDeck] = useState(shuffle(getFullDeck()));
    const [shouldDraw, setShouldDraw] = useState(false);
    const [isGameFinished, setIsGameFinished] = useState(false);
    const [gameScore, setGameScore] = useState(0);
    const remainingDrawableStacks = gameDeck.length / BOARD_STACK_COUNT;
    const [completedStacks, setCompletedStacks] = useState(0);
    const [isGameStarted, setIsGameStarted] = useState(false);
    useEffect(() => {
        if (completedStacks === DECK_SET_COUNT) {
            setIsGameFinished(true);
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
        setIsGameStarted(true);
    };

    return (
        <div className='game-ui'>
            <TopBoard
                closedStackCount={remainingDrawableStacks}
                onDrawClick={() => {
                    setShouldDraw(true);
                }}
                completedStacks={completedStacks}
                isGameStarted={isGameStarted}
            />
            <BottomBoard
                drawCards={drawCards}
                shouldDraw={shouldDraw}
                setShouldDraw={setShouldDraw}
                onComplete={onComplete}
                isGameStarted={isGameStarted}
            />
            {isGameFinished && <div className='background-blur' />}
            {isGameFinished && <EndGamePopup gameScore={gameScore} />}
            <Header
                onStartGame={startGame}
                isGameStarted={isGameStarted}
                isGameFinished={isGameFinished}
                gameScore={gameScore}
                setGameScore={setGameScore}
                completedStacks={completedStacks}
            />
        </div>
    );
};

export default GameUi;

import React, { useState, useEffect } from 'react';
import Counter from '../counter/Counter';
import './header.scss';
import { HUNDRED_MINUTES_IN_SECONDS } from '../constants';

export const stringify = (string, n) => {
    string = string.toLocaleString('en-US', {
        minimumIntegerDigits: n,
        useGrouping: false,
    });
    return string;
};

export const worstRestartEver = () => {
    window.location.reload();
};

const Header = ({ onStartGame, isGameStarted, isGameFinished, gameScore, setGameScore, completedStacks }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let gamePoints = counter === 0 ? 0 : Math.floor((HUNDRED_MINUTES_IN_SECONDS - counter) / 10);
        setGameScore(gameScore + gamePoints);
    }, [completedStacks]);
    return (
        <header className='header'>
            <Counter
                isGameStarted={isGameStarted}
                isGameFinished={isGameFinished}
                counter={counter}
                setCounter={setCounter}
            />
            <span>Score : {stringify(gameScore, 3)}</span>
            {!isGameStarted && (
                <button className='game-button' onClick={onStartGame}>
                    Start
                </button>
            )}
            {isGameStarted && (
                <button className='game-button' onClick={worstRestartEver}>
                    New Game
                </button>
            )}
        </header>
    );
};

export default Header;

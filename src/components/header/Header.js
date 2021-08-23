import React, { useState, useEffect } from 'react';
import './header.scss';

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
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    useEffect(() => {
        let gamePoints = counter === 0 ? 0 : Math.floor((6000 - counter) / 10);
        setGameScore(gameScore + gamePoints);
    }, [completedStacks]);

    useEffect(() => {
        if (isGameStarted && !isGameFinished) {
            setTimeout(() => setCounter(counter + 1), 1000);
            setSeconds(counter % 60);
            setMinutes(Math.floor(counter / 60));
            setHours(Math.floor(counter / 60 / 60));
        }
    }, [counter, isGameStarted, isGameFinished]);

    return (
        <header className='header'>
            <span className='counter'>
                {stringify(hours, 2)}:{stringify(minutes, 2)}:{stringify(seconds, 2)}
            </span>
            <span>Score : {stringify(gameScore, 4)}</span>
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

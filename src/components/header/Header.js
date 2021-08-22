import React, { useState, useEffect } from 'react';
import './header.scss';

const Header = ({ onStartGame, gameStartedAt, isGameFinished, gameScore, setGameScore, completedStacks }) => {
    const [counter, setCounter] = useState(0);
    const worstRestartEver = () => {
        window.location.reload();
    };
    useEffect(() => {
        let gamePoints = counter === 0 ? 0 : Math.floor((6000 - counter) / 10);
        setGameScore(gameScore + gamePoints);
    }, [completedStacks]);

    useEffect(() => {
        if (gameStartedAt && !isGameFinished) {
            setTimeout(() => setCounter(counter + 1), 1000);
        }
    }, [counter, gameStartedAt, isGameFinished]);
    return (
        <header className='header'>
            <span>Counter : {counter}</span>
            <span>Score : {gameScore}</span>
            {!gameStartedAt && (
                <button className='game-button' onClick={onStartGame}>
                    Start Game
                </button>
            )}
            {gameStartedAt && (
                <>
                    <button className='game-button' onClick={worstRestartEver}>
                        Start New Game
                    </button>
                </>
            )}
        </header>
    );
};

export default Header;

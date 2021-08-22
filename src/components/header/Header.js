import React from 'react';
import './header.scss';

const BottomBoardFooter = ({ onStartGame, gameStartedAt }) => {
    return (
        <header className='header'>
            {!gameStartedAt && (
                <button className='start-game-button' onClick={onStartGame}>
                    Start Game
                </button>
            )}
            {gameStartedAt && (
                <>
                    <span style={{ color: 'white' }}>{new Date(gameStartedAt).toString()}</span>
                </>
            )}
        </header>
    );
};

export default BottomBoardFooter;

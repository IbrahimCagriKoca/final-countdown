import React from 'react';
import './bottomBoardFooter.scss';

const BottomBoardFooter = ({ onStartGame, gameStartedAt }) => {
    return (
        <footer className='footer'>
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
        </footer>
    );
};

export default BottomBoardFooter;

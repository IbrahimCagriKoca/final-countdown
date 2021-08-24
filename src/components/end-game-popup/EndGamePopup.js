import React from 'react';
import { worstRestartEver } from '../helperFunctions';
import './endGamePopup.scss';

const EndGamePopup = ({ gameScore }) => {
    return (
        <div className='popup'>
            <p>
                <b>CONGRATULATIONS</b>
            </p>
            <p>Your Game Score: {gameScore}</p>
            <button className='start-button' onClick={worstRestartEver}>
                Start New Game
            </button>
        </div>
    );
};

export default EndGamePopup;

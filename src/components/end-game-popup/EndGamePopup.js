import React from 'react';
import './endGamePopup.scss';

const EndGamePopup = ({ gameScore }) => {
    return (
        <div className='popup'>
            <p>CONGRATULATIONS</p>
            <p>Your Game Score: {gameScore}</p>
        </div>
    );
};

export default EndGamePopup;

import React from 'react';
import './card.scss';
import SA from '../../assets/AS.png';
import S2 from '../../assets/2S.png';
import S3 from '../../assets/3S.png';
import S4 from '../../assets/4S.png';
import S5 from '../../assets/5S.png';
import S6 from '../../assets/6S.png';
import S7 from '../../assets/7S.png';
import S8 from '../../assets/8S.png';
import S9 from '../../assets/9S.png';
import S10 from '../../assets/10S.png';
import SJ from '../../assets/JS.png';
import SQ from '../../assets/QS.png';
import SK from '../../assets/KS.png';
import cardback from '../../assets/cardback.png';

const cardImageMap = new Map([
    ['SA', SA],
    ['S2', S2],
    ['S3', S3],
    ['S4', S4],
    ['S5', S5],
    ['S6', S6],
    ['S7', S7],
    ['S8', S8],
    ['S9', S9],
    ['S10', S10],
    ['SJ', SJ],
    ['SQ', SQ],
    ['SK', SK],
]);

const Card = ({ card, order, onCardClick, selectedCardId }) => {
    const { name, isOpen, suit } = card;
    const cardImage = cardImageMap.get(`${suit}${name}`);
    return (
        <div
            className={`card${card.id === selectedCardId ? ' selected' : ''}`}
            onClick={() => isOpen && onCardClick(card, order)}
            style={{
                zIndex: order,
                top: `${order * 2}vw`,
                left: order,
                backgroundImage: isOpen ? `url(${cardImage})` : `url(${cardback})`,
                backgroundSize: 'contain',
            }}></div>
    );
};

export default Card;

import React from 'react';
import './card.scss';
import { useDrag } from 'react-dnd';
import cardback from '../../assets/cardback-min.png';
import { CARD_IMAGE_MAP } from '../constants';

const Card = ({ card, order, onCardClick, selectedCardId, dragItem, isCardMovable }) => {
    const { name, isOpen, suit } = card;
    const cardImage = CARD_IMAGE_MAP.get(`${suit}${name}`);
    const [, drag] = useDrag(
        () => ({
            type: 'card',
            item: dragItem,
            canDrag: isCardMovable,
        }),
        [dragItem, isCardMovable]
    );

    return (
        <div
            ref={drag}
            className={`card${card.id === selectedCardId ? ' selected' : ''}`}
            onClick={() => isCardMovable && onCardClick(card, order)}
            style={{
                zIndex: order,
                top: `${order * 1.5}vw`,
                left: order,
                backgroundImage: isOpen ? `url(${cardImage})` : `url(${cardback})`,
                backgroundSize: 'contain',
            }}></div>
    );
};

export default Card;

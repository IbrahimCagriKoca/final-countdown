import React from 'react';
import { useDrop } from 'react-dnd';
import Card from '../card/Card';
import PlaceHolder from '../place-holder/PlaceHolder';
import './stack.scss';

const Stack = ({ cards, stackId, onSelect, onMove, selectedCardId }) => {
    const _onCardClick = (card, order) => {
        if (selectedCardId === undefined) {
            if (!card.isOpen) return;
            let i = order + 1;
            while (i < cards.length) {
                if (cards[i].value !== cards[i - 1].value + 1) return;
                i++;
            }
            onSelect(card, cards.length - order, stackId);
        } else {
            onMove(cards[cards.length - 1], stackId);
        }
    };

    const _onMove = () => {
        if (selectedCardId === undefined) return;
        onMove({ value: 0 }, stackId);
    };

    // const onDrop = () => {};

    return (
        <div key={`stack-${stackId}`} className='stack'>
            {cards.map((card, i) => (
                <Card
                    card={card}
                    order={i}
                    cardSpan={20}
                    onCardClick={_onCardClick}
                    selectedCardId={selectedCardId}
                    key={card.id}
                />
            ))}
            {cards.length === 0 && <PlaceHolder onClick={_onMove} stackId={stackId} />}
        </div>
    );
};

export default Stack;

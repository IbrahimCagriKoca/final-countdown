import React from 'react';
import { useDrop } from 'react-dnd';
import Card from '../card/Card';
import PlaceHolder from '../place-holder/PlaceHolder';
import { last } from 'lodash';
import './stack.scss';

export const isCardMovable = (order, cards) => {
    if (!cards[order].isOpen) return false;
    let i = order + 1;
    while (i < cards.length) {
        if (cards[i].value !== cards[i - 1].value + 1) return false;
        i++;
    }
    return true;
};

const Stack = ({ cards, stackId, onSelect, onMove, onDrag, selectedCardId }) => {
    const [, drop] = useDrop(
        () => ({
            accept: 'card',
            drop: ({ card: fromCard, stackId: fromStackId, movingCardAmount }) => {
                const _from = { card: fromCard, stackId: fromStackId };
                const _to = { card: last(cards) || { value: 0 }, stackId: stackId };
                onDrag(movingCardAmount, _from, _to);
            },
        }),
        [cards, onDrag]
    );

    const onCardClick = (card, order) => {
        if (selectedCardId === undefined && isCardMovable(order, cards)) {
            onSelect(card, cards.length - order, stackId);
        } else {
            onMove(cards[cards.length - 1], stackId);
        }
    };

    const _onMove = () => {
        if (selectedCardId === undefined) return;
        onMove({ value: 0 }, stackId);
    };

    return (
        <div className='stack' ref={drop}>
            {cards.map((card, i) => (
                <Card
                    key={`card-${card.id}`}
                    card={card}
                    order={i}
                    onCardClick={onCardClick}
                    selectedCardId={selectedCardId}
                    dragItem={{ card, stackId, movingCardAmount: cards.length - i }}
                    isCardMovable={isCardMovable(i, cards)}
                />
            ))}
            {cards.length === 0 && <PlaceHolder onClick={_onMove} stackId={stackId} />}
        </div>
    );
};

export default Stack;

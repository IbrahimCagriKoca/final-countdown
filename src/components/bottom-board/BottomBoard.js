import React, { useEffect, useState } from 'react';
import Stack from '../stack/Stack';
import { times, isEmpty } from 'lodash';
import './bottomBoard.scss';

const openLastCard = (cards) => {
    if (cards.length > 0) {
        cards[cards.length - 1].isOpen = true;
        return cards;
    }
};

const checkFinished = (cards) => {
    if (cards.length < 13) {
        return false;
    }
    const last13 = cards.slice(cards.length - 13);
    for (let i = 0; i < 13; i++) {
        if (!last13[i].isOpen) return false;
        if (last13[i].value !== i + 1) {
            return false;
        }
    }
    return true;
};

const BottomBoard = ({ drawCards, shouldDraw, onComplete, setShouldDraw }) => {
    const [stackCards, setStackCards] = useState([[], [], [], [], [], [], [], [], [], []]);
    const [moving, setMoving] = useState({});

    const dealNewCards = () => {
        let drawnCards = drawCards(10);
        setShouldDraw(false);
        setStackCards(stackCards.map((cards, i) => [...cards, { ...drawnCards[i], isOpen: true }]));
    };

    const onSelect = (card, nthFromLastCard, stackId) => {
        setMoving({ card, nthFromLastCard, stackId });
    };

    const onMove = (card, stackId) => {
        setMoving({});
        if (card.value === 0 || moving.card.value === card.value + 1) {
            moveCards(moving.nthFromLastCard, moving.stackId, stackId);
        } else {
            return;
        }
    };

    useEffect(() => {
        let drawnCards = drawCards(54);
        const stacks = [
            openLastCard(drawnCards.splice(0, 6)),
            openLastCard(drawnCards.splice(0, 6)),
            openLastCard(drawnCards.splice(0, 6)),
            openLastCard(drawnCards.splice(0, 6)),
            openLastCard(drawnCards.splice(0, 5)),
            openLastCard(drawnCards.splice(0, 5)),
            openLastCard(drawnCards.splice(0, 5)),
            openLastCard(drawnCards.splice(0, 5)),
            openLastCard(drawnCards.splice(0, 5)),
            openLastCard(drawnCards.splice(0, 5)),
        ];
        setStackCards(stacks);
    }, []);

    useEffect(() => {
        if (shouldDraw) {
            dealNewCards();
        }
    }, [shouldDraw]);

    const moveCards = (n, from, to) => {
        let newStackCards = [...stackCards];
        newStackCards[to] = [...newStackCards[to], ...newStackCards[from].splice(-1 * n)];
        openLastCard(newStackCards[from]);
        if (checkFinished(newStackCards[to])) {
            newStackCards[to].splice(-13);
            openLastCard(newStackCards[to]);
            onComplete();
        }
        setStackCards(newStackCards);
    };

    return (
        <div
            className='bottom-board'
            onClick={(e) => {
                if (!e.target.classList.contains('card')) {
                    setMoving({});
                }
            }}>
            {times(10, (i) => (
                <Stack
                    cards={stackCards[i]}
                    key={i}
                    stackId={i}
                    onSelect={onSelect}
                    onMove={onMove}
                    selectedCardId={moving.card && moving.card.id}
                />
            ))}
        </div>
    );
};

export default BottomBoard;

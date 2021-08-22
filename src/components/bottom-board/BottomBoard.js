import React, { useEffect, useState } from 'react';
import Stack from '../stack/Stack';
import { times } from 'lodash';
import './bottomBoard.scss';

export const openLastCard = (cards) => {
    if (cards.length > 0) {
        cards[cards.length - 1].isOpen = true;
    }
    return cards;
};

export const checkFinished = (cards) => {
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

const BottomBoard = ({ drawCards, shouldDraw, onComplete, isGameStarted, setShouldDraw }) => {
    const [stackCards, setStackCards] = useState([[], [], [], [], [], [], [], [], [], []]);
    const [moving, setMoving] = useState({});

    const dealNewCards = () => {
        let drawnCards = drawCards(10);
        setShouldDraw(false);
        setStackCards(
            stackCards.map((cards, i) => checkAndRemoveFinished([...cards, { ...drawnCards[i], isOpen: true }]))
        );
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

    const onDrag = (n, from, to) => {
        if (to.card.value === 0 || from.card.value === to.card.value + 1) {
            moveCards(n, from.stackId, to.stackId);
        } else {
            return;
        }
    };

    const dealInitialCards = () => {
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
    };

    useEffect(() => {
        if (isGameStarted) {
            dealInitialCards();
        }
    }, [isGameStarted]);

    useEffect(() => {
        if (shouldDraw) {
            dealNewCards();
        }
    }, [shouldDraw]);

    const checkAndRemoveFinished = (stack) => {
        if (checkFinished(stack)) {
            stack.splice(-13);
            openLastCard(stack);
            onComplete();
            return stack;
        }
        return stack;
    };

    const moveCards = (n, from, to) => {
        let newStackCards = [...stackCards];
        newStackCards[to] = [...newStackCards[to], ...newStackCards[from].splice(-1 * n)];
        openLastCard(newStackCards[from]);
        checkAndRemoveFinished(newStackCards[to]);
        setStackCards(newStackCards);
    };

    return (
        <div className='bottom-board-container'>
            {isGameStarted && (
                <div
                    className='bottom-board'
                    onClick={(e) => {
                        if (!e.target.classList.contains('card')) {
                            setMoving({});
                        }
                    }}>
                    {times(10, (i) => (
                        <Stack
                            key={`stack-${i}`}
                            cards={stackCards[i]}
                            stackId={i}
                            onSelect={onSelect}
                            onMove={onMove}
                            onDrag={onDrag}
                            selectedCardId={moving.card && moving.card.id}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default BottomBoard;

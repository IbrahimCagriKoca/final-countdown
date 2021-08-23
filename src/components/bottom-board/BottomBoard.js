import React, { useEffect, useState } from 'react';
import Stack from '../stack/Stack';
import { times } from 'lodash';
import './bottomBoard.scss';
import { BOARD_STACK_COUNT, INITIAL_BOARD_CARD_COUNT } from '../constants';
import { openLastCard, checkAndRemoveFinished, prepareInitialBoard } from '../helperFuntions';

const BottomBoard = ({ drawCards, shouldDraw, onComplete, isGameStarted, setShouldDraw }) => {
    const [stackCards, setStackCards] = useState([[], [], [], [], [], [], [], [], [], []]);
    const [moving, setMoving] = useState({});

    const dealNewCards = () => {
        let drawnCards = drawCards(BOARD_STACK_COUNT);
        setShouldDraw(false);
        setStackCards(
            stackCards.map((cards, i) =>
                checkAndRemoveFinished([...cards, { ...drawnCards[i], isOpen: true }], onComplete)
            )
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
        let drawnCards = drawCards(INITIAL_BOARD_CARD_COUNT);
        const stacks = prepareInitialBoard(drawnCards);
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

    const moveCards = (n, from, to) => {
        let newStackCards = [...stackCards];
        newStackCards[to] = [...newStackCards[to], ...newStackCards[from].splice(-1 * n)];
        openLastCard(newStackCards[from]);
        checkAndRemoveFinished(newStackCards[to], onComplete);
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
                    {times(BOARD_STACK_COUNT, (i) => (
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

import BottomBoard, {
    shouldDraw,
    setShouldDraw,
    drawCards,
    onComplete,
    isGameStarted,
    openLastCard,
    checkFinished,
} from '../components/bottom-board/BottomBoard';
import React from 'react';
import { render } from '@testing-library/react';

const mockedCardStack = [
    {
        value: 5,
        isOpen: false,
    },
    {
        value: 1,
        isOpen: false,
    },
    {
        value: 13,
        isOpen: false,
    },
    {
        value: 1,
        isOpen: true,
    },
    {
        value: 2,
        isOpen: true,
    },
    {
        value: 3,
        isOpen: true,
    },
    {
        value: 4,
        isOpen: true,
    },
    {
        value: 5,
        isOpen: true,
    },
    {
        value: 6,
        isOpen: true,
    },
    {
        value: 7,
        isOpen: true,
    },
    {
        value: 8,
        isOpen: true,
    },
    {
        value: 9,
        isOpen: true,
    },
    {
        value: 10,
        isOpen: true,
    },
    {
        value: 11,
        isOpen: true,
    },
    {
        value: 12,
        isOpen: true,
    },
    {
        value: 13,
        isOpen: true,
    },
];

describe('check html tags', () => {
    it('should return main tags classname', () => {
        const {
            container: { firstChild },
        } = render(
            <BottomBoard
                drawCards={drawCards}
                shouldDraw={shouldDraw}
                setShouldDraw={setShouldDraw}
                onComplete={onComplete}
                isGameStarted={isGameStarted !== undefined}
            />
        );
        expect(firstChild.className).toBe('bottom-board-container');
    });
});

describe('check funtions', () => {
    it('should return last cards isOpen true', () => {
        const mockedCardStack = [
            {
                id: 2,
                isOpen: false,
            },
            {
                id: 3,
                isOpen: false,
            },
            {
                id: 8,
                isOpen: false,
            },
        ];
        const result = openLastCard(mockedCardStack);
        expect(result[0].isOpen).toBeFalsy();
        expect(result[1].isOpen).toBeFalsy();
        expect(result[2].isOpen).toBeTruthy();
    });
    it('should return tre if last 13 card is ordered', () => {
        const result = checkFinished(mockedCardStack);
        expect(result).toBeTruthy();
    });
    it('should return false if last 13 card is not ordered', () => {
        let faultyStack = [...mockedCardStack];
        faultyStack[12].value = 1;
        const result = checkFinished(faultyStack);
        expect(result).toBeFalsy();
    });
    it('should return false if last 13 card is not opened', () => {
        let faultyStack = [...mockedCardStack];
        faultyStack[14].isOpen = false;
        const result2 = checkFinished(faultyStack);
        console.log(result2);
        expect(result2).toBeFalsy();
    });
    it('should return false if card lenght lower than 13', () => {
        let faultyStack = [...mockedCardStack].splice(5);
        const result2 = checkFinished(faultyStack);
        console.log(result2);
        expect(result2).toBeFalsy();
    });
});

import BottomBoard, {
    shouldDraw,
    setShouldDraw,
    drawCards,
    onComplete,
    isGameStarted,
    openLastCard,
    checkFinished,
    prepareInitialBoard,
    checkAndRemoveFinished,
} from '../components/bottom-board/BottomBoard';
import { example54CardDeck } from './constants';
import React from 'react';
import { render } from '@testing-library/react';

let mockedCardStack;
beforeEach(() => {
    mockedCardStack = [
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
});

describe('check html tags', () => {
    it('should return main tags classname', () => {
        const mockFunction = jest.fn();
        const {
            container: { firstChild },
        } = render(
            <BottomBoard
                drawCards={mockFunction}
                shouldDraw={false}
                setShouldDraw={mockFunction}
                onComplete={mockFunction}
                isGameStarted={isGameStarted !== undefined}
            />
        );
        expect(firstChild.className).toBe('bottom-board-container');
    });

    it('should return main tags classname', () => {
        const mockFunction = jest.fn();
        const {
            container: { firstChild },
        } = render(
            <BottomBoard
                drawCards={() => {
                    return mockedCardStack.splice(10);
                }}
                shouldDraw={true}
                setShouldDraw={mockFunction}
                onComplete={mockFunction}
                isGameStarted={isGameStarted !== undefined}
            />
        );
        expect(firstChild.className).toBe('bottom-board-container');
    });
});

describe('check funtions', () => {
    it('should return last cards isOpen true', () => {
        const _mockedCardStack = [
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
        const result = openLastCard(_mockedCardStack);
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
        const result = checkFinished(faultyStack);
        expect(result).toBeFalsy();
    });
    it('should return false if card lenght lower than 13', () => {
        let faultyStack = [...mockedCardStack].splice(5);
        const result = checkFinished(faultyStack);
        expect(result).toBeFalsy();
    });

    it('should return 10 lenght array', () => {
        let stack = [...example54CardDeck];
        const result = prepareInitialBoard(stack);
        expect(result[0].length).toBe(6);
        expect(result[1].length).toBe(6);
        expect(result[2].length).toBe(6);
        expect(result[3].length).toBe(6);
        expect(result[4].length).toBe(5);
        expect(result[5].length).toBe(5);
        expect(result[6].length).toBe(5);
        expect(result[7].length).toBe(5);
        expect(result[8].length).toBe(5);
        expect(result[9].length).toBe(5);
    });

    it('should return false if last 13 card is not opened', () => {
        const mockFunction = jest.fn();
        let stack = [...mockedCardStack];
        const result = checkAndRemoveFinished(stack, mockFunction);
        expect(result.length).toBe(3);
        expect(mockFunction).toHaveBeenCalled();
    });
    it('should return false if last 13 card is not opened', () => {
        const mockFunction = jest.fn();
        let faultyStack = [...mockedCardStack];
        faultyStack[12].value = 1;
        const result = checkAndRemoveFinished(faultyStack, mockFunction);
        expect(result.length).toBe(16);
        expect(mockFunction).not.toHaveBeenCalled();
    });
});

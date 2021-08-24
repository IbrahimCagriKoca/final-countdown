import BottomBoard, { isGameStarted } from '../views/bottom-board/BottomBoard';
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

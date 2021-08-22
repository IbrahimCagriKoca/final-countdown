import Stack, { isCardMovable } from '../components/stack/Stack';
import React from 'react';
import { render } from '@testing-library/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const mockedCardStack = [
    {
        id: 2,
        value: 5,
        name: '5',
        suit: 'S',
        isOpen: false,
    },
    {
        id: 3,
        value: 1,
        name: 'A',
        suit: 'S',
        isOpen: false,
    },
    {
        id: 4,
        value: 2,
        name: '2',
        suit: 'S',
        isOpen: true,
    },
    {
        id: 5,
        value: 3,
        name: '3',
        suit: 'S',
        isOpen: true,
    },
    {
        id: 6,
        value: 4,
        name: '4',
        suit: 'S',
        isOpen: true,
    },
];

describe('check html tags', () => {
    it('should return main tags classname', () => {
        const {
            container: { firstChild },
        } = render(
            <DndProvider backend={HTML5Backend}>
                <Stack
                    cards={mockedCardStack}
                    stackId={3}
                    onSelect={() => {}}
                    onMove={() => {}}
                    selectedCardId={() => {}}
                />
            </DndProvider>
        );
        expect(firstChild.className).toBe('stack');
    });
});
describe('check functions working right', () => {
    it('should return true for isCardMovable', () => {
        const result = isCardMovable(2, mockedCardStack);
        expect(result).toBeTruthy();
    });
    it('should return false for isCardMovable', () => {
        const result = isCardMovable(1, mockedCardStack);
        expect(result).toBeFalsy();
    });
    it('should return false for isCardMovable', () => {
        let faultyStack = [...mockedCardStack];
        faultyStack[faultyStack.length - 1].value = 10;
        const result = isCardMovable(2, mockedCardStack);
        expect(result).toBeFalsy();
    });
});

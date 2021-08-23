import Stack from '../components/stack/Stack';
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

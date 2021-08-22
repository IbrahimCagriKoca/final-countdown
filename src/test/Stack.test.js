import Stack from '../components/stack/Stack';
import React from 'react';
import { render } from '@testing-library/react';

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
        isOpen: true,
    },
];

describe('check html tags', () => {
    it('should return main tags classname', () => {
        const {
            container: { firstChild },
        } = render(
            <Stack
                cards={mockedCardStack}
                stackId={3}
                onSelect={() => {}}
                onMove={() => {}}
                selectedCardId={() => {}}
            />
        );
        expect(firstChild.className).toBe('stack');
    });
});

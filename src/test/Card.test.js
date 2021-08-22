import Card from '../components/card/Card';
import React from 'react';
import { render } from '@testing-library/react';
const mockedCard = {
    id: 2,
    value: 5,
    name: '5',
    suit: 'S',
    isOpen: false,
};
describe('check html tags', () => {
    it('should return main tags classname', () => {
        const {
            container: { firstChild },
        } = render(<Card card={mockedCard} order={5} onCardClick={() => {}} selectedCardId={7} />);
        expect(firstChild.className).toBe('card');
    });
    it('should add classname to selected', () => {
        const {
            container: { firstChild },
        } = render(<Card card={mockedCard} order={5} onCardClick={() => {}} selectedCardId={2} />);
        expect(firstChild.className).toBe('card selected');
    });
});

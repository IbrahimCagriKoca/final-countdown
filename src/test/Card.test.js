import Card from '../components/card/Card';
import React from 'react';
import { render } from '@testing-library/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
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
        } = render(
            <DndProvider backend={HTML5Backend}>
                <Card card={mockedCard} order={5} onCardClick={() => {}} selectedCardId={7} />
            </DndProvider>
        );
        expect(firstChild.className).toBe('card');
    });
    it('should add classname to selected', () => {
        const {
            container: { firstChild },
        } = render(
            <DndProvider backend={HTML5Backend}>
                <Card card={mockedCard} order={5} onCardClick={() => {}} selectedCardId={2} />
            </DndProvider>
        );
        expect(firstChild.className).toBe('card selected');
    });
});

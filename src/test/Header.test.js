import Header, { onStartGame } from '../components/header/Header';
import React from 'react';
import { render } from '@testing-library/react';

describe('check html tags', () => {
    it('should return main tags classname', () => {
        const mockFunction = jest.fn();
        const {
            container: { firstChild },
        } = render(
            <Header onStartGame={onStartGame} isGameStarted={false} gameScore={0} setGameScore={mockFunction} />
        );
        expect(firstChild.className).toBe('header');
    });
    it('should return main tags classname', () => {
        const mockFunction = jest.fn();
        const {
            container: { firstChild },
        } = render(<Header onStartGame={onStartGame} isGameStarted={true} gameScore={0} setGameScore={mockFunction} />);
        expect(firstChild.className).toBe('header');
    });
});

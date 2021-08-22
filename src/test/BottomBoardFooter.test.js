import BottomBoardFooter, { onStartGame, gameStartedAt } from '../components/bottom-board-footer/BottomBoardFooter';
import React from 'react';
import { render } from '@testing-library/react';

describe('check html tags', () => {
    it('should return main tags classname', () => {
        const {
            container: { firstChild },
        } = render(<BottomBoardFooter onStartGame={onStartGame} gameStartedAt={gameStartedAt} />);
        expect(firstChild.className).toBe('footer');
    });
    it('should return main tags classname', () => {
        const {
            container: { firstChild },
        } = render(<BottomBoardFooter onStartGame={onStartGame} gameStartedAt={new Date()} />);
        expect(firstChild.className).toBe('footer');
    });
});

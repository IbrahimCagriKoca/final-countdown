import GameUi from '../views/game-ui/GameUi';
import React from 'react';
import { render } from '@testing-library/react';

describe('check html tags', () => {
    it('should return main tags classname', () => {
        const {
            container: { firstChild },
        } = render(<GameUi />);
        expect(firstChild.className).toBe('game-ui');
    });
});

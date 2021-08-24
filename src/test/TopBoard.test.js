import TopBoard, { onDrawClick, completedStacks, isGameStarted } from '../views/top-board/TopBoard';
import React from 'react';
import { render } from '@testing-library/react';

describe('check html tags', () => {
    it('should return main tags classname', () => {
        const {
            container: { firstChild },
        } = render(
            <TopBoard
                closedStackCount={5}
                onDrawClick={onDrawClick}
                completedStacks={completedStacks}
                isGameStarted={isGameStarted}
            />
        );
        expect(firstChild.className).toBe('top-board');
    });
});
